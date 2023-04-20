import { Container } from '@/components/Container'
import { GamesGrid } from '@/components/GamesGrid'
import { Layout } from '@/components/Layout'
import { Slider } from '@/components/Slider'
import { useState } from 'react'
import { getPlaiceholder } from 'plaiceholder'
import { ErrorBoundary } from 'react-error-boundary'
import { fetchHighRatedGames } from '@/utils/Requests'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import css from './index.module.css'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(fetchHighRatedGames)
  const data = await res.json()

  const games = await Promise.all(
    data.results?.map(async (game) => {
      const { base64, img } = await getPlaiceholder(
        game.background_image
          ? game.background_image
          : 'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg'
      )

      return {
        ...img,
        ...game,
        blurDataURL: base64
      }
    })
  )

  return { props: { games } }
}

export default function Mustplay(props) {
  const [games, setGames] = useState(props.games || [])
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleForwardClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  const handleBackwardClick = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1)
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout
        title="VGDB | MustPlay"
        desc="Checkout MustPlay videogames"
        url="Mustplay"
      >
        <Container sx={css.header}>
          <h1 className={css.title}>Most Popular Games</h1>
        </Container>
        <div className={css.container}>
          <Slider slides={games.slice(currentIndex, currentIndex + 8)} />
          <div>
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={handleBackwardClick}
              className={css.iconButton}
            >
              <ChevronLeftIcon className={css.icon} />
            </button>

            <button
              type="button"
              disabled={currentIndex === games.length - 8}
              onClick={handleForwardClick}
              className={css.iconButton}
            >
              <ChevronRightIcon className={css.icon} />
            </button>
          </div>
        </div>
        <Container gap>
          <h2 className={css.title}>Recommendations </h2>
          <GamesGrid games={games.slice(8)} />
        </Container>
      </Layout>
    </ErrorBoundary>
  )
}

import { Container } from '@/components/Container'
import { GamesGrid } from '@/components/GamesGrid'
import { Layout } from '@/components/Layout'
import { Slider } from '@/components/Slider'
import { useState } from 'react'
import { getPlaiceholder } from 'plaiceholder'
import { ErrorBoundary } from 'react-error-boundary'
import { fetchHighRatedGames } from '@/utils/Requests'
import css from './index.module.css'

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export async function getStaticProps() {
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

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout
        title="VGDB | MustPlay"
        desc="Checkout MustPlay videogames"
        url="mustplay"
      >
        <Container sx={css.header}>
          <h1 className={css.title}>Most Popular Games</h1>
        </Container>
        <div className={css.container}>
          <Slider slides={games.slice(0, 8)} />
        </div>
        <Container gap>
          <h2 className={css.title}>Recommended</h2>
          <GamesGrid games={games.slice(8)} />
        </Container>
      </Layout>
    </ErrorBoundary>
  )
}

import { Container } from '@/components/Container'
import { GamesGrid } from '@/components/GamesGrid'
import { Layout } from '@/components/Layout'
import { Slider } from '@/components/Slider'
import { useState } from 'react'
import { getPlaiceholder } from 'plaiceholder'
import { ErrorBoundary } from 'react-error-boundary'
import { fetchTrending } from '@/utils/Requests'
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
  const res = await fetch(fetchTrending)

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

export default function Trending(props) {
  const [games, setGames] = useState(props.games || [])
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout
        title="VGDB | Trending"
        desc="Checkout the trending video games"
        url="trending"
      >
        <Container sx={css.header}>
          <h1 className={css.title}>Trending Right Now</h1>
        </Container>
        <div className={css.container}>
          <Slider slides={games.slice(0, 8)} />
        </div>
        <Container gap>
          <h2 className={css.title}>Players also liked </h2>
          <GamesGrid games={games.slice(8)} />
        </Container>
      </Layout>
    </ErrorBoundary>
  )
}
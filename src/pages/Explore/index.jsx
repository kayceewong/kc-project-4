import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { fetchAllGames } from '@/utils/Requests'
import { PaginatedGames } from '@/components/Pagination'

export async function getStaticProps() {
  const res = await fetch(fetchAllGames)

  const data = await res.json()

  return { props: { data } }
}

export default function Explore(props) {
  return (
    <Layout
      title="VGDB | Explore"
      desc="Start exploring!"
      url="Explore"
    >
      <Container gap>
        <PaginatedGames itemsPerPage={12} initial={props.data} />
      </Container>
    </Layout>
  )
}

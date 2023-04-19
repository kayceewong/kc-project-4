import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { Platforms } from '@/components/Platforms'

export default function Home() {
  return (
    <Layout title="VGDB">

      <Head>
        <title>Home - VGDB</title>
      </Head>

      <main>

        <Platforms />
      </main>

    </Layout>
  )
}

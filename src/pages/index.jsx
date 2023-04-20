import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { Platforms } from '@/components/Platforms'
import { Banner } from '@/components/Banner'
import { RAWG } from '@/components/Rawg'

export default function Home() {
  return (
    <Layout title="VGDB">

      <Head>
        <title>Home - VGDB</title>
      </Head>

      <main>
        <Platforms />
        <Banner />

        <RAWG />
      </main>
    </Layout>
  )
}

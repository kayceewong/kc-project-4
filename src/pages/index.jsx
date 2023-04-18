import Head from 'next/head'
// import { Layout } from '@/components/Layout'
import { Platforms } from '@/components/Platforms'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-black lg:h-[140vh]">
      <Head>
        <title>Home - VGDB</title>
      </Head>

      <Navbar />
      <main>

        <Platforms />

      </main>

    </div>
  )
}

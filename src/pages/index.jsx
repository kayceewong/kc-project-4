import Head from 'next/head'
// import Image from 'next/image'

import Header from '../components/Header'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-black lg:h-[140vh]">
      <Head>
        <title>Home - VGDB</title>
      </Head>
      Home Page | Hello World
      <Header />
      <main>
        <Banner />
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}

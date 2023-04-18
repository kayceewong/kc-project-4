import { NextSeo } from 'next-seo'
import { Navbar } from '../Navbar'
import css from './styles.module.css'

export const Layout = ({ children, title, desc, image, url }) => {
  const og = '/images/Game.png'
  return (
    <>
      <NextSeo
        title={title}
        description={desc}
        openGraph={{
          url: `https://""/${url}`,
          title,
          description: desc,
          locale: 'en_us',
          images: [
            {
              url: image || og,
              width: 1200,
              height: 630,
              alt: title,
              type: 'image/jpeg'
            }
          ],
          site_name: 'VGDB'
        }}
      />
      <Navbar />
      <main id="main" className={css.main}>
        {children}
      </main>

    </>
  )
}

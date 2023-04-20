import { Container } from '@/components'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { isBrowser } from 'react-device-detect'
import Image from 'next/image'
import css from './styles.module.css'

const data = [
  {
    title: '',
    image: '/images/Logo.png',
    darkClr: '#dee2e6',
    lightClr: '#6c757d',
    animDelay: 0.6
  }
]

export const Banner = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
    || (theme === 'system'
      && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <Container gap>
      <ul className={css.list}>
        {data.map((banner) => {
          const {
            title,
            image,
            key,
            lightClr,
            darkClr,
            animDelay
          } = banner
          return (
            <motion.li
              key={key}
              className={css.banner}
              style={{ color: isDark ? darkClr : lightClr }}
              initial={{ opacity: 0, y: 100, scale: 0 }}
              whileInView={{ opacity: 1, y: 1, scale: 1 }}
              transition={{ delay: isBrowser ? animDelay : 0 }}
            >
              <div style={{ width: '100%', maxWidth: '1500px' }}>
                <Image
                  src={image}
                  alt={title}
                  width={800}
                  height={400}
                  layout="responsive"
                  objectFit="cover"
                />

              </div>
              {title}
            </motion.li>
          )
        })}
      </ul>
    </Container>
  )
}

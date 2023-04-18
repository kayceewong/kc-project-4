import cn from 'classnames'
import { Squash as Hamburger } from 'hamburger-react'
import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { Routes } from '@/utils/Routes'
import { Container } from '../Container'
import { Route } from '../Route'
import css from './styles.module.css'

export const Menu = () => {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef()

  useOnClickOutside(ref, () => setOpen(false))

  return (
    <div ref={ref} className={css.wrapper}>
      <div className={css.cta}>
        <Hamburger
          hideOutline={false}
          size={26}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              y: '-100%'
            }}
            animate={{
              y: 0
            }}
            exit={{
              y: '-100%'
            }}
            transition={{ duration: 0.4 }}
            className={cn(css.menu)}
          >
            <Container sx={css.container}>
              <ul className={css.links}>
                {Routes.map((route) => (
                  <li
                    className={cn(css.item, route.large && css.large)}
                    key={route.key}
                  >
                    <Route route={route} />
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

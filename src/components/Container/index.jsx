import cn from 'classnames'
import { motion } from 'framer-motion'
import css from './styles.module.css'

export const Container = ({
  children,
  paddingBlock = '1rem',
  paddingInline = '1rem',
  margin = 'auto',
  gap,
  sx,
  initial,
  whileInView,
  duration,
  delay
}) => (
  <motion.div
    className={cn(css.container, sx)}
    style={{
      paddingBlock,
      paddingInline,
      margin: gap ? '5rem auto' : margin
    }}
    initial={initial}
    whileInView={whileInView}
    transition={{
      duration: duration || 0.3,
      delay: delay || 0
    }}
  >
    {children}
  </motion.div>
)

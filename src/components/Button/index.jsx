import cn from 'classnames'
import Link from 'next/link'
import css from './styles.module.css'

export const Button = ({ children, onClick, sx, margin = '0 0' }) => (
  <button
    type="button"
    style={{ margin }}
    className={cn(css.btn, css.ripple, sx)}
    onClick={onClick}
  >
    {children}
  </button>
)

export const LinkButton = ({
  children,
  onClick,
  sx,
  margin = '0 0',
  href,
  blank
}) => (
  <Link href={href}>
    <a
      style={{ margin }}
      className={cn(css.btn, css.link, sx)}
      onClick={onClick}
      target={blank && '_blank'}
    >
      {children}
    </a>
  </Link>
)

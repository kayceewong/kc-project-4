import Image from 'next/image'
import Link from 'next/link'
import { Menu } from '../Menu'
import { Search } from '../Search'
import { ThemeSwitch } from '../ThemeSwitch'

import { Routes } from '../../utils/Routes'
import css from './styles.module.css'

export const Navbar = () => (
  <div className={css.wrapper}>
    <div className={css.container}>
      <nav className={css.nav}>
        <div className={css.partition}>
          <Menu />
          <Link href="/" className={css.logo} passHref>
            <Image src="/images/VGDB_Logo.png" alt="VGDB" width={100} height={40} />
          </Link>
          <DesktopRoutes />
        </div>
        <div className={css.partition}>
          <Search />
          <ThemeSwitch />
        </div>
      </nav>
    </div>
  </div>
)

const DesktopRoutes = () => (
  <ul className={css.desktopRoutes}>
    {Routes.map((route) => (
      <li key={route.key}>
        <Link href={route.url}>
          {route.title}
        </Link>
      </li>
    ))}
  </ul>
)

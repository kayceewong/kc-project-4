import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useState, useEffect } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10" />
      <Image
        src="/images/KC Logo White.png"
        alt="Logo"
        width={100}
        height={100}
        className="cursor-pointer object-contain"
      />
      <ul className="hidden space-x-4 md:flex">
        <li className="headerLink">Home</li>
        <li className="headerLink">Playstation</li>
        <li className="headerLink">Xbox</li>
        <li className="headerLink">Switch</li>
        <li className="headerLink">PC</li>
      </ul>
      <div className="flex items-center space-x-4 text-sm font-light" />
      <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline" />
      <p className="hidden lg:inline">Search</p>
      <Link href="" passHref>
        <Image
          src="/images/avatar_male.png"
          alt="Avatar"
          className="cursor-pointer rounded"
          width={50}
          height={50}
        />

      </Link>
      <div />
    </header>
  )
}

export default Header

'use client'

import { Search, ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

import { useScroll } from '@/hooks/document'

import './Header.scss'

export default function Header() {
  const { fromTop } = useScroll()

  const isStick = useMemo(() => {
    return fromTop > 40 // mt-10
  }, [fromTop])

  return (
    <header className={`header${isStick ? ' is-stick' : ''}`}>
      <div className="container">
        <Link href="/">
          <Image
            src="/logo.png"
            width={421}
            height={96}
            alt="evermos"
            className="header__logo"
          />
        </Link>

        <ul className="header__nav">
          <li>
            <Link href="/">Kategori</Link>
          </li>
          <li>
            <Link href="/">Brand</Link>
          </li>
          <li>
            <Link href="/">Produk</Link>
          </li>
          <li>
            <Link href="/">Panduan</Link>
          </li>
        </ul>

        <div className="header__action">
          <a>
            <Search />
          </a>
          <a className="has-bubble">
            <ShoppingBasket />
          </a>
          <a className="button">Masuk / Daftar</a>
        </div>
      </div>
    </header>
  )
}

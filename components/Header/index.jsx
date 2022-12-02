import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.page__header}>
      <div className={styles.colored__line}></div>
      <div className='container'>
        <Link href='/'>
          <h1>Leo's Blog in <span>Next.js</span></h1>
        </Link>
      </div>
    </header>
  )
}
 
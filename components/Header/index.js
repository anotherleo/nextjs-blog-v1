import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header>
        <div className="container">
            <Link href="/">
                <h1>Leo #1 Blog in Next</h1>
            </Link>
        </div>
    </header>
  )
}

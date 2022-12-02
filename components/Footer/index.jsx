import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.page__footer}>
        <p>Leo Thomas Monteiro, 2022.</p>
        <p>Made with love and React/Next.js.</p>

        <div className={styles.colored__line}></div>
    </footer>
  )
}

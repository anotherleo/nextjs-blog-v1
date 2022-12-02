import React from 'react'
import styles from './FakeButton.module.scss'

export default function Button(props) {
  return (
    <div className={styles.fake__button}>{props.text}</div>
  )
}

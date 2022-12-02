import React from 'react'
import styles from './Title.module.scss'

export default function Title(props) {
  return (
    <h2 className={styles.page__title}>
        {props.text}
    </h2>
  )
}

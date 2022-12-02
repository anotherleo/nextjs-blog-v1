import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FakeButton from '../FakeButton'
import styles from './Post.module.scss'

export default function Post({post}) {
  return (
    <div className={styles.card}>
      <Link href={`/blog/${post.slug}`}>
        <Image 
          src={post.frontmatter.cover_image}
          alt={post.frontmatter.title}
          width={150}
          height={200}
        />
        <h3>{post.frontmatter.title}</h3>
        <span>
          Posted on {post.frontmatter.date}
        </span>
        <p>{post.frontmatter.excerpt}</p>
        <FakeButton text="Ler mais" />
      </Link>
    </div>
  )
}

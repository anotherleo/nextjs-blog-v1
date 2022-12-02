import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Post({post}) {
  return (
    <div className='card'>
      <Link href={`/blog/${post.slug}`}>
        <Image 
          src={post.frontmatter.cover_image}
          alt={post.frontmatter.title}
          width={150}
          height={200}
        />
        <h3>{post.frontmatter.title}</h3>
        <div className="post-date">
          Posted on {post.frontmatter.date}
        </div>
        <p>{post.frontmatter.excerpt}</p>
        <div className="btn">Ler mais</div>
      </Link>
    </div>
  )
}

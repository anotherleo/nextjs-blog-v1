import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import React from 'react'
import Link from 'next/link'

export default function PostPage({
    frontmatter: {title, date, cover_img}, 
    slug, 
    content
}) {
  return (
    <>
        <div className="card card-page">
            <h1 className='post-title'>{title}</h1>
            <div className="post-date">Posted on {date}</div>
            <img src={cover_img} alt={title} />

            <div className="post-body">
                <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
        </div>

        <Link href='/' className='btn btn-back'>Voltar</Link>
    </>
  )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const {data: frontmatter, content} = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}
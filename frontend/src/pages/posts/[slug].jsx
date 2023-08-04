import client, { sanityClient } from '../client'
import groq from 'groq'
import styles from '../../styles/blogs.module.css'
import Image from "next/image"
import BlockContent from '@sanity/block-content-to-react';
import { format } from 'date-fns';



const Post = ({post, author}) => {

  const {
    author: authorRef,
    title,
    body,
    publishedAt,
  } = post;
  
  const formattedPublishedAt = format(new Date(publishedAt), 'dd/MM/yyyy');

  return (
<>
            <div className={styles.blog}>
                <div className={styles.imagem}>
                    <Image src="/images/blogmaior.svg" layout="responsive" width={1240} height={368} alt="Foto Blog" /><br/>
                </div>
                <div className={styles.titulos}>
                    <h1>{title}</h1>
                    <h6>Por {authorRef}, {formattedPublishedAt} </h6>
                </div>

                <div className={styles.texto}>
                <BlockContent blocks={body} />
                </div>
            </div>
            
        </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "author": author->name,
  publishedAt, 
  body
}`


export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params
  const post = await sanityClient.fetch(query, { slug })
  
  return {
    props: {
      post
    }
  }
}


export default Post
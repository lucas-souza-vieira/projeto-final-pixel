import Image from "next/image";
import styles from '../styles/blog.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { sanityClient } from "./client";
import { format } from 'date-fns';

export default function Blog({ posts, author }) {
  const {
    author: authorRef,
    title,
    mainImage,
    body,
    publishedAt,
    slug,
  } = posts[0];

  const formattedPublishedAt = format(new Date(publishedAt), 'dd/MM/yyyy');

  const orderedMenores = posts.slice(1, 6).sort((postA, postB) => new Date(postB.publishedAt) - new Date(postA.publishedAt));

  return (
    <>
      <div className={styles.blog}>
        <h1>BLOG</h1>
        <div className={styles.post}>
        <Image src="/images/blog.svg" width={610} height={339} alt="Foto blog"/>
          <div className={styles.text}>
            <div className={styles.h}>
              <h2>{title}</h2>
              <h6>Por {author.name}, {formattedPublishedAt}</h6>
            </div>
            <BlockContent blocks={body} />
          </div>
        </div>

        <div className={styles.menores}>
          {orderedMenores.map((post) => (
            <div key={post._id}>
              <a href={`/posts/${post.slug.current}`}>
                {post.mainImage && (
                  <Image src="/images/blog2.svg" width={390} height={220} alt="Foto blog" />
                )}
                <p>{post.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await sanityClient.fetch(`*[_type == "post"]`);
  const author = await sanityClient.fetch(`*[_type == "author"]`);

  return {
    props: {
      posts,
      author: author[0],
    }
  }
}

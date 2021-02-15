import React, { useRef, useState} from "react"
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '@/components/post/post-body/post-body'
import PostHeader from '@/components/post/post-header/post-header'
import Layout from '@/components/layout/layout'
import SEO from '@/components/seo/seo'
import { getAllPosts, getPostAndMorePosts } from '@/lib/data/api/cms'
import PageTitle from '@/components/title/page-title'
import markdownToHtml from '@/lib/utils/markdownToHtml'
import styled from 'styled-components';
import config from "@/lib/data/SiteConfig";
import ReadingProgress from "@/components/post/post-reading-progress/reading-progress.js"
import media from 'styled-media-query';
//import CoverImage from '@/components/post/post-image/cover-image'
import Header from '@/components/navigation/header/header'
import Footer from '@/components/navigation/footer/footer'
import Link from 'next/link'
import RelatedPosts from '@/components/post/post-preview/related-posts'
import PostReactions from "@/components/post/post-reactions/post-reactions"
//import PostComments from "@/components/post/post-comments/post-comments"
import getReadTime from "@/lib/utils/read-time"
import TableOfContents from "@/components/post/post-toc/table-of-contents"
import toc from 'markdown-toc'
import SocialShare from "@/components/social/social-share/social-share"


// components for posts

const PostWrapper = styled.div`
  max-width: 1200px;
  padding: var(--space);
  margin: calc(var(--space-lg)*2.5) auto var(--space-lg) auto;
  ${media.lessThan('medium')`
    padding-left: var(--space-sm);
    padding-right: var(--space-sm);
  `}
`


const Content = styled.div`
  grid-column: span 4/span 4;
  margin-top: var(--space-);
  ${media.lessThan('large')`
    grid-column: span 6/span 6;
  `}
`



export default function Post({ post, morePosts }) {  


  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  


  function copyToClipboard(e) {
    navigator.clipboard.writeText(`${config.siteUrl}/articles/${post.slug}`);
    e.target.focus();
    setCopySuccess('Copied!');
  };

  const target = React.createRef()

  return (
    <Layout>
      <Header/>
        {router.isFallback ? (
          <PageTitle>{config.loading}</PageTitle>
        ) : (
          <>
            <SEO   
              title={post.title}
              description={post.excerpt}
              image={post.coverImage.coverImage.formats.small.url}
              slug={`articles/${post.slug}`}
              date={post.date}
              ogType="article"
              author={post.user}
              postSEO
            />
            <article ref={target} className="h-entry">
              <ReadingProgress target={target} />
              {/*{post.coverImage.coverImage ? (
              <CoverImage title={post.title} alt={post.title} url={post.coverImage.coverImage.url} caption={post.coverImage.caption}/>
              ) : null }*/}

              <PostWrapper>

                  <Content>


                    <PostHeader postData={post} />    
                    {/*<TOCInPostWrapper>
                      <TableOfContents content={post.toc}/>
                    </TOCInPostWrapper>      */}
                    
                    <PostBody className="e-content" content={post.content} />     

                    <SocialShare slug={`/articles/${post.slug}`} /> 
                    <PostReactions postId={post.id} postSlug={post.slug} />

                    {/*<PostComments postID={post.id}/>*/}  

                    <RelatedPosts relatedPosts={morePosts} />
                  </Content>


              </PostWrapper>

            </article>
            
          </>
        )}     
      <Footer />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.slug)
  const content = data?.posts[0]?.content || ''
  const excerpt = await markdownToHtml(data?.posts[0]?.excerpt || '')
  const readingTime = getReadTime(content); 
  const tocContent = await markdownToHtml(toc(content).content)

  return {
    revalidate:  86400,
    props: {
      post: {
        ...data?.posts[0],
        readingTime: readingTime,
        content,
        excerpt,
        toc: tocContent
      },
      morePosts: data?.morePosts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts()
  return {
    paths: allPosts?.map((post) => `/articles/${post.slug}`) || [],
    fallback: true,
  }
}

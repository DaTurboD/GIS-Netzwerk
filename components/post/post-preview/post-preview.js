import Date from '@/components/date/date'
import Link from 'next/link'
import styled from 'styled-components';
import media from "styled-media-query"
import PostReactions from "@/components/post/post-reactions/post-reactions"

const Card = styled.div`
  margin: 0 auto var(--space) auto;
  border-radius: 0.75rem;
  background-color: var(--bg-dark);
  max-width: 370px;
  transition: 0.2s;
  ${media.greaterThan('large')`
    :hover {
      box-shadow: 0 25px 25px var(--secondary-color);    
    }
`}
`

const CardItemWrapper = styled.section`
  height: 100%;
`;

const CardItemImg = styled.div`
`;

const CardItemInfo = styled.div`
  position: relative;
  padding: var(--space-sm) var(--space);
`;

const CardItemTitle = styled.h2`
  color: var(--text-color);
  font-size: 1.2em;
  line-height: 1.35;
  margin-top: var(--space-sm);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--border-dark);
`;

const CardItemMeta = styled.div`
  display: flex;
  font-size: 1.3rem;
  margin-top: calc(var(--space-sm) *0.5);
  margin-bottom: calc(var(--space-sm) *0.5);
  color: var(--text-color);
`;

const CardItemDescription = styled.div`
  color: var(--text-color);
  margin-bottom: var(--space-sm);
`;

const TagsWrapper = styled.div`
  display: block;
  margin-top: var(--space);
  margin-bottom: var(--space-sm);
`

const TagItem = styled.a`
  display: inline-block;
  text-transform: uppercase;
  transition: 0.2s;
  cursor: pointer;
  font-size: 1.3rem;
  padding: calc(var(--space-sm)*0.2) var(--space-sm);
  margin: calc(var(--space-sm)*0.5);
  background-color: var(--primary-color);
  border-radius: var(--space-sm);
  :hover {
    background-color: ${props =>
      props.color ? props.color : '#798ad0'};
    color: white;
  }
`

const ReadingTime = styled.span`
  margin-left: var(--space-sm);
`

const ReadingTimeSymbol = styled.i`
`

export default function PostPreview({
  id,
  title,
  coverImage,
  date,
  dateUpdated,
  excerpt,
  author,
  slug,
  tags,
  readingTime
}) {

  //const backgroundImage = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${coverImage.coverImage.formats.small.url}`
  
  return (
    <Card>
      <CardItemWrapper>
        {/*<CardItemImg>
          {coverImage.coverImage ? (
          <CoverImage slug={slug} title={title} caption={coverImage.caption} url={coverImage.coverImage.url}/>
          ) : null
          }
        </CardItemImg>*/}
        <CardItemInfo>
          <CardItemTitle>
            <Link as={`/articles/${slug}`} href="/articles/[slug]" passHref>
              <a title={title}>{title}</a>
            </Link>
          </CardItemTitle>
          <CardItemMeta>
            <Date dateString={dateUpdated ? dateUpdated : date} />
            <PostReactions preview postId={id} postSlug={slug}/>
            <ReadingTime><ReadingTimeSymbol className="las la-book-open" /> {readingTime} min read</ReadingTime>
          </CardItemMeta>
          <CardItemDescription>{excerpt}</CardItemDescription>
          <TagsWrapper>
            {tags.map((tag, i) => (
              <Link key={i} href={`/articles/topics/${tag.slug}`} passHref>
                <TagItem color={tag.color} title={tag.name}>{tag.name}</TagItem>
              </Link>
            ))}
          </TagsWrapper>
        </CardItemInfo>
      </CardItemWrapper>
    </Card>
  )
}

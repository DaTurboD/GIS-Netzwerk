import Author from '../post-author/post-author'
import PostTitle from '../../title/content-title'
import media from 'styled-media-query';
import styled from 'styled-components';
import Link from 'next/link'
import Date from '../../date/date'      
const _ = require("lodash");

const TagsWrapper = styled.a`
  display: block;
  margin-top: var(--space);
`

const TagItem = styled.a`
  background-color: ${props =>
    props.color ? props.color : '#798ad0'};
  padding: calc(var(--space-sm)*0.5);
  border-radius: calc(var(--space-sm)*0.5);
  font-size: 13px;
  text-transform: uppercase;
  margin: calc(var(--space-sm)*0.5) var(--space-sm) calc(var(--space-sm)*0.5) 0;
  color: #fff;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    background-color: white;
    color: ${props =>
      props.color ? props.color : '#798ad0'};
  }
`

const PostHeaderWrapper = styled.div`
  max-width: 640px;
  margin: auto;
`

const DateWrapper = styled.div`
  max-width: 640px;
  margin: auto;
  ${media.lessThan('large')`
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`

export default function PostHeader({ title, date, author, tags }) {
  
  return (
    <>
      <PostHeaderWrapper>

        <TagsWrapper>
          {tags.map((tag, i) => (
              <Link key={i} href={`/blog/themen/${tag.slug}`}>
                <TagItem color={tag.color} title={tag.name}>{tag.name}</TagItem>
              </Link>
          ))}
        </TagsWrapper>

        <PostTitle>{title}</PostTitle>
          
        <Author name={author.username} picture={author.picture} bio={author.bio} socials={author.socials} date={date} />

        <Date dateString={date} />
      </PostHeaderWrapper>
    </>
  )
}
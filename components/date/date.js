import { parseISO, format } from 'date-fns'
import config from "../../data/SiteConfig";
import styled from 'styled-components';

const PostDate = styled.time`
  font-style: italic;
  color: var(--gray);
`

export default function Date({ dateString, ago }) {
  const date = parseISO(dateString)
  return <PostDate dateTime={dateString}>{format(date, config.dateFormat)}</PostDate>
}
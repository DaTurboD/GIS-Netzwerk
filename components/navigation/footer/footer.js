import React, { useState, useEffect } from "react"
import config from "@/lib/data/internal/SiteConfig";
import styled from 'styled-components';
import Link from 'next/link'
import media from 'styled-media-query';
import ReactMarkdown from "react-markdown"
import { format } from 'date-fns'
import { getNowData } from "@/lib/data/external/cms";
import { FaGithub, FaTwitter, FaInstagram, FaRss, FaEnvelope, FaLinkedin, FaBicycle, FaSteam } from 'react-icons/fa';
import { SiGarmin, SiStrava } from 'react-icons/si';
import { Input } from "@/styles/templates/input"
import { Button } from "@/styles/templates/button"
// styled components

const FooterContainer = styled.footer`
  padding: var(--space-sm) 0;
  ${media.lessThan('medium')`  
    flex-wrap: wrap;
    padding: var(--space-sm);
  `}
`;

const FooterInnerContainer = styled.div`    
  grid-template-columns: repeat(4,minmax(0px,1fr));
  display: grid;
  margin: 0px auto;
  padding: var(--space) var(--space) 0 var(--space);
  max-width: 1200px;
  border-top: 1px solid rgb(48, 54, 61);
  ${media.lessThan('medium')`
    padding: var(--space) 0 0 0;
    display: block;
  `}
`

const FooterMainNav = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  font-size: 1rem;
  text-align: right;
  grid-column: span 1 / span 1;
  display: flex;
  justify-content: space-around;
  ${media.lessThan('medium')` 
    display: flex;
    justify-content: space-between;
    margin-top: var(--space-sm);
  `}
`

const FooterMainNavItem = styled.li`
  display: inline-block;
  transition: 0.2s;
  :hover {
    color: var(--thirdy-color);
    cursor: pointer;
  }
  ${media.lessThan('medium')` 
    margin: 0;
  `}
`

const FooterMainNavLink = styled.a`
  padding: var(--space-sm) 0;
`

const FooterColumnWrapper = styled.div`
  grid-column: span 4/span 4;
  list-style: none;
  padding-inline-start: 0;
  max-width: 1200px;
  margin-top: var(--space);
  font-size: .875rem;
  display: flex;
  justify-content: space-between;
  ${media.lessThan('medium')`  
    display: block;
  `}
`
const FooterColumn = styled.nav`
  max-width: 25%;
  line-height: 1.25rem;
  ${media.lessThan('medium')`  
    margin-bottom: var(--space);
    max-width: 100%;
  `}
`

const FooterColumnPosts = styled.nav`
  max-width: 30%;
  line-height: 1.25rem;
  ${media.lessThan('medium')`  
    margin-bottom: var(--space);
    max-width: 100%;
  `}
`

const FooterColumnTitle = styled.p`
  font-weight: 600;
  margin-bottom: var(--space-sm);
`

const FooterColumnDescription = styled.div`
  margin-bottom: var(--space);
  line-height: 1.75;
`

const List = styled.ol`
  list-style: none;
  padding-inline-start: 0;
`


const FooterItem = styled.li`
  margin-bottom: var(--space-sm);
  transition: 0.2s;
  :hover {
    color: var(--thirdy-color);
    cursor: pointer;
  }
`

const FooterItemLink = styled(Link)`
  :hover { 
    color: var(--secondary-color);
  }
`

const FooterNotice = styled.p`
  font-size:.75rem;
  grid-column: span 4/span 4;
  margin-top: var(--space-sm);
`

const FooterLink = styled.a`
  color: var(--text-color);
  border-bottom: 1px solid var(--secondary-color);
  cursor: pointer;
  :hover {
    border-bottom: 1px solid transparent;
  }
`

const FooterBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0px, 1fr));
  gap: var(--space-sm);
  grid-column: span 4/span 4;
  ${media.lessThan('medium')`  
    display: block;
  `}
`

const SearchWrapper = styled.div`
  font-family: var(--primary-font);
  grid-column: span 2 / span 2;
  height: var(--space);
`


const AboutMeLink = styled.a`
  border-bottom: 1px solid var(--secondary-color);
  cursor: pointer;
  :hover {
    border-bottom: 1px solid transparent;
  }
`


export default function Footer() {
  const [recentPosts, setRecentPosts] = useState([])
  const [loadedData, setLoadedData] = useState([])
  const [about, setAbout] = useState([])
  const [search, setSearch] = useState("")

  const getData = () => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch('https://api.mxd.codes/posts?_sort=date:DESC', requestOptions)
      .then(response => response.json())
      .then(data => setRecentPosts(data.slice(0,4)));
    fetch('https://api.mxd.codes/about', requestOptions)
      .then(response => response.json())
      .then(data => setAbout(data));
    setLoadedData(true)
  }

  useEffect(() => {
    loadedData == false ?
    getData() : null

  }, []);

  const footerItems = [
    { 
      name: "Contact",
      link: "/contact" 
    },   
    { 
      name: "About this site",
      link: "/about-this-site" 
    },
    { 
      name: "Dashboard",
      link: "/dashboard" 
    },
    { 
      name: "Feeds",
      link: "/feeds" 
    },
    { 
      name: "Webmention Endpoint",
      link: "/webmention" 
    },
    { 
      name: "Mailing",
      link: "/mailinglist" 
    },
  ]

  const headerItems = [
    { 
      name: "Now",
      link: "/now" 
    },
    { 
      name: "Articles",
      link: "/articles" 
    },
    { 
      name: "Notes",
      link: "/notes" 
    },
    { 
      name: "Photos",
      link: "/photos" 
    },
    { 
      name: "Links",
      link: "/links" 
    },
  ]
  return (
    <FooterContainer>

      <FooterInnerContainer>
        <FooterBar>

          <SearchWrapper >
            <Input 
              type="text"   
              name="search-website"
              id="search-website"
              aria-label="Search"
              value={search}
              label="search-input"
              onChange={(e) => setSearch(e.target.value)}
            /> 
            <Button 
              type="button"
              name="search"
              id="search"
              aria-label="Search"
              onClick={() => window.open(`https://www.ecosia.org/search?q=site:${config.domain}+${search}`)}
              title="search"
            >
            Search</Button>
          </SearchWrapper>

          {/*<FooterMainNav>
            {headerItems.map((item, i) => (
              <FooterMainNavLink key={i}href={item.link} passHref><a title={item.name}>{item.name}</a></FooterMainNavLink >
            ))}
            </FooterMainNav>*/}


        </FooterBar>

        <FooterColumnWrapper> 

          <FooterColumn>      
            <FooterColumnTitle>{about.intro}</FooterColumnTitle>
            <FooterColumnDescription>
            <ReactMarkdown
              children={about.bioShort}
            />
           <Link href="/about" passHref><AboutMeLink title="About me">Read more.</AboutMeLink></Link>
          </FooterColumnDescription>
          </FooterColumn>

          <FooterColumn>
            <FooterColumnTitle>Elsewhere</FooterColumnTitle>
            <List>
              <FooterItem>
                <a href={config.socials.twitter} title="@mxdietrich on Twitter"><FaTwitter/> Twitter</a>
              </FooterItem>
              <FooterItem>
                <a href={config.socials.instagram} title="_maxdietrich on Instagram"><FaInstagram/> Instagram</a>
              </FooterItem>
              <FooterItem>
                <a href={config.socials.github} title="DaTurboD on GitHub"><FaGithub/> Github</a>
              </FooterItem>
              <FooterItem>
                <a href={config.socials.strava} title="Max Dietrich on Strava"><SiStrava/> Strava</a>
              </FooterItem>
              {/*<FooterItem>
                <a href={config.socials.steam} title="Max Dietrich on Steam"><FaSteam/> Steam/</a>
              </FooterItem>*/}
              <FooterItem>
                <a href={config.socials.linkedin} title="Max Dietrich on Linkedin"><FaLinkedin/> Linkedin</a>
              </FooterItem>
            </List>
          </FooterColumn>
        
          <FooterColumnPosts>
            <FooterColumnTitle>Recent Articles</FooterColumnTitle>
            <List>
              {recentPosts.map((post, i) => (
                <FooterItem key={i}>
                  <FooterItemLink href={`/articles/${post.slug}`} passHref><a title={post.title}>{post.title}</a></FooterItemLink>
                </FooterItem>
                ))}
            </List>
              </FooterColumnPosts>


          <FooterColumn>
            <List>
              {footerItems.map((item, i) => (
                <FooterItem key={i}>
                  <FooterItemLink href={item.link} passHref><a title={item.name}>{item.name}</a></FooterItemLink>
                </FooterItem>
                ))}
              </List>
          </FooterColumn>






        </FooterColumnWrapper> 

        <FooterNotice>
          2018–{format(new Date(), "yyyy")} <Link href="/">
            <a title={config.siteTitle}>{config.siteTitle}</a>
          </Link>
          <span> • </span>
          <Link href="/privacy-policy"> 
            <FooterLink title="Privacy Policy">Privacy Policy</FooterLink>
          </Link>
          <span> • </span>
          <Link href="/site-notice">
            <FooterLink title="Site Notice">Site Notice</FooterLink>
          </Link>
        </FooterNotice>
      </FooterInnerContainer>
    </FooterContainer>
  )
}


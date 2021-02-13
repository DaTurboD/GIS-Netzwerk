
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Layout from '@/components/layout/layout'
import SEO from '@/components/seo/seo'
import Title from '@/components/title/page-title'
import Link from 'next/link'
import Newsletter from '@/components/newsletter/subscribe'

export default function MailingList() {
  return (
  <>
    <SEO   
      title="Mailing List"
      slug="mailinglist"
    />
    <Layout>
      <Header/>
      <Title>Mailing List</Title>

      <Newsletter />
      
      <Footer />
    </Layout>
  </>
  )
}

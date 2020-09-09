import Header from '../header/headerNav'
import Footer from '../footer/footer'
import Meta from '../seo/seo'
import Container from './container'
import { initGA, logPageView } from '../../utils/analytics'

export default function Layout({ children }) {

  /*componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }*/

  return (
    <>
      <Meta />
        <Container>{children}</Container>
    </>
  )
}
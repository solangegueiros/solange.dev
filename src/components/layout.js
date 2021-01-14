import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MdxLink} from "gatsby-theme-i18n"
//import { useIntl } from "react-intl"
import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/layout.css"

const components = {
  a: MdxLink,
}

const Layout = ({ children, pageContext }) => {
  //const intl = useIntl()


  return (
    <React.Fragment>
      <Header pageContext={pageContext}/>
      
      <main style={{ margin: `1rem auto`, maxWidth: 800, padding: `0 1rem` }}>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>

      <Footer pageContext={pageContext}/>
    </React.Fragment>
  )
}

export default Layout

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

//<div style={{ margin: `3rem auto`, maxWidth: 1200, padding: `0 1rem` }}>

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ margin: `0 auto`, maxWidth: 800, padding: `0 1rem` }}>
        <Header />

        {children}

        <footer>
          © {new Date().getFullYear()}, Solange Gueiros
        </footer>      

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout



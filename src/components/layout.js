import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

/*
<div style={{ margin: `3rem auto`, maxWidth: 1200, padding: `0 1rem` }}>
<div style={{ margin: `0 auto`, maxWidth: 800, padding: `0 1rem` }}>
<div style={{ margin: `0 auto`, padding: `0 ` }}>
*/


const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div  >
        {children}

        <Footer />
      </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout



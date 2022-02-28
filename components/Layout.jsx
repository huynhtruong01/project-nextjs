import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

Layout.propTypes = {}

function Layout({ children }) {
  return (
    <div className="container">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

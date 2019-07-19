import React from "react"

import NavBar from "./nav-bar"
import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
)

export default Layout

// Enable smooth scroll
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#ss"]')
}
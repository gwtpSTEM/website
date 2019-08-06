import React from "react"

import Navbar from "./nav-en"
import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <Navbar />
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
import React from "react"

import Navbar from "./nav-ja-sub"
import Footer from "./footer-ja"

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
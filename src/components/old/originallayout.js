import React from "react"
import { Link } from "gatsby"
import Header2 from "../header"
import NavbarGlobal from "../navbar"
import { rhythm, scale } from "../../utils/typography"
import Footer from "../footer"

class Layout2 extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      {/**header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {**/}
  }
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            color: '#ffc529',

          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    
    return (
      <>
      <NavbarGlobal />
      <Header2 />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          marginTop: '60px',
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          position: 'relative',
        }}
      >
        
        <header>{header}</header>
        
        <main style={{color: 'white',}}>{children}</main>

        </div>
        
        <Footer />
      </>
    )
  }
}

export default Layout2

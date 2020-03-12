import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  let footer

  if (location.pathname === rootPath) {
    header = (
      <div>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: '50%',
            alignItems: 'center',
            justifyContent: 'center',
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
        <Bio location={location} />
        <a href='https://github.com/garethiv' target="_blank">github</a> • 
        <a href='https://www.linkedin.com/in/garethveale/' target="_blank"> linkedin</a> • 
        <a href='https://twitter.com/garethveale' target="_blank"> twitter</a>
      </div>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
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
      </h3>
    )
    footer = (
      <div
        style ={{

        }}
      >
        <p>
          <Link to={`https://github.com/garethiv`}>github</Link> • 
          <Link to={`https://www.linkedin.com/in/garethveale/`}>linkedin</Link> • 
          <Link to={`https://twitter.com/garethveale`}>twitter</Link>
        </p>
      </div>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        {footer}
      </footer>
    </div>
  )
}

export default Layout

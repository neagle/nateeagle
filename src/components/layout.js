import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <StaticQuery
          query={graphql`
            query SocialQuery {
              site {
                siteMetadata {
                  social {
                    twitter
                  }
                }
              }
            }
          `}
          render={data => {
            console.log("data", data)

            return (
              <>
                <a
                  href={`https://twitter.com/${
                    data.site.siteMetadata.social?.twitter || ``
                  }`}
                >
                  Twitter
                </a>
              </>
            )
          }}
        />
      </footer>
    </div>
  )
}

export default Layout

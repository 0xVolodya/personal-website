import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let headerList = [{ title: "Home", to: "/home" }, { title: "About", to: "/about" }, { title: "Blog", to: "/blog" }]

  headerList = headerList.map(item => {
    item.bold = item.to === location.pathname
    return item
  })
  return (
    <div data-is-root-path={isRootPath}>
      <header className="global-header">
        <Link to="/">
          <StaticImage className="bio-avatar" src="../images/retro-game.svg"
                       layout="fixed"
                       formats={["AUTO", "WEBP", "AVIF"]}
                       width={50}
                       height={50}
                       quality={95}
                       alt="Profile picture" />
        </Link>
        <div className="global-header--right">
          {headerList.map(item =>
            <Link key={item.title} to={item.to}
                  className={`navigation-item ${item.bold ? "item-bold" : ""}`}>{item.title}</Link>
          )}</div>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

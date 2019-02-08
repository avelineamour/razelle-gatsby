import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className={"header"}>
      <div className="left-nav nav">
        <Link to='/'>Home</Link>
        <Link to='/resume'>Résumé</Link>
        <Link to='/portfolio'>Portfolio</Link>
      </div>

      <h1>front end web developer<br/>&<br/>designer</h1>
      <div className="right-nav nav">
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

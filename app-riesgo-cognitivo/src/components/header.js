import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Background from '../images/banner2.jpg'

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#182c25`,
            textDecoration: `none`,
            display: 'flex',  
            justifyContent:'center', 
            alignItems:'center', 
            height: '30vh',
            backgroundImage: "url(" + Background + ")"
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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

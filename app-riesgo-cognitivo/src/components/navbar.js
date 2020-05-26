import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link style={{ textDecoration :'none', color :'#182c25'}} to={props.to}>{props.children}</Link>
  </li>
)

export default function Navbar({ children }) {
  return (
    <div style={{textAlign: 'center', background :'#455b55'}}>
        <ul style={{ listStyle: `none`}}>
          <ListLink to="/">Inicio</ListLink>
          <ListLink to="/datasets/">Datasets</ListLink>
          <ListLink to="/about/">Acerca De</ListLink>
          <ListLink to="/contact/">Contacto</ListLink>
        </ul>
    </div>
  )
}


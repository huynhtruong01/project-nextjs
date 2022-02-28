import Link from 'next/link'
import React from 'react'

NavBar.propTypes = {}

function NavBar(props) {
  return (
    <div className="nav-bar">
      <Link href="/" passHref={true}>
        <h1>Shopping</h1>
      </Link>
      <ul>
        <li>
          <Link href="/" passHref={true}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" passHref={true}>
            About
          </Link>
        </li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default NavBar

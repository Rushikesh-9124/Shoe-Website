import React from 'react'

function Header() {
  return (
    <div>
    <nav>
      <div className="logo">
        <img src="./images/brand_logo.png" alt="logo" />
      </div>
      <ul className="lists">
        <li><a href="">Menu</a></li>
        <li><a href="">Location</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <div className="btn">
          <input type="button" value="Login" />
      </div>
    </nav>

    </div>
  )
}

export default Header

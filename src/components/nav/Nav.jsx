import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import "./Nav.css"

export default function Nav() {
  return (
    <nav>
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </BrowserRouter>
    </nav>
  )
}

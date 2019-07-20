import React from 'react'
import './Header.css'
import UserMenu from '../UserMenu/UserMenu'
import Search from '../Search/Search'
const Header = () => {
  return (
    <header>
      <h1>BetterFlix</h1>
      <UserMenu />
      <Search/>
    </header>
  )
}

export default Header

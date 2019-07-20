import React from 'react';
import './Header.css';
import { UserMenu } from '../UserMenu/UserMenu';

const Header = () => {
  return (
    <header>
      <h1>BetterFlix</h1>
      <UserMenu />
    </header>
  );
};

export default Header;

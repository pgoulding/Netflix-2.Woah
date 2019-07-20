import React from 'react';
import './Header.css';
import { UserMenu} from '../UserMenu/UserMenu';
import {connect} from 'react-redux'
import { signOut } from '../../actions'
import Search from '../Search/Search';

export const Header = (user) => {

  const headerSignOut = (e) => {
    e.preventDefault()
    user.signOut()
  }
  const logout = (
    <form>
      <button onClick={(e) => headerSignOut(e)}>Log Out</button>
    </form>
  )

  return (
    <header>
      <Search />
      <h1>BetterFlix</h1>
      {user.user.id ? logout : <UserMenu /> }
    </header>
  );
};
export const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
})
export const mapStateToProps =(state) => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

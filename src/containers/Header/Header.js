import React, { Component } from 'react';
import './Header.css';
import { UserMenu} from '../UserMenu/UserMenu';
import {connect} from 'react-redux'
import { signOut } from '../../actions'
import Search from '../Search/Search';

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }
  }
  headerSignOut = (e) => {
    e.preventDefault()
    this.props.signOut()
  }
  
  logout = (
    <form>
      <button onClick={(e) => this.headerSignOut(e)}>Log Out</button>
    </form>
  )

  toggleMenu = (e) => {
    e.preventDefault()
    console.log('hit')
    this.setState({ expanded: !this.state.expanded })
  }

  render () {
    return (
     <header>
       <button onClick = {(e) => this.toggleMenu(e)}>Hamburger Menu</button>
       <h1>BetterFlix</h1>
       {this.props.user.id ? this.logout : <UserMenu /> }
       <div className={this.state.expanded ? 'menu-hidden' : 'menu-expanded'}>
       <Search />
       </div>
     </header>
   );
  }
};
export const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
})
export const mapStateToProps =(state) => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

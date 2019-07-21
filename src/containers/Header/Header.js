import React, { Component } from 'react';
import './Header.css';
import { UserMenu} from '../UserMenu/UserMenu';
import {connect} from 'react-redux'
import { signOut } from '../../actions'
import Search from '../Search/Search';
import {Link} from 'react-router-dom'

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
    this.setState({ expanded: !this.state.expanded })
  }

  render () {
    return (
     <header>
       {/* <button onClick = {(e) => this.toggleMenu(e)}>Hamburger Menu</button> */}
        <Link to='/' ><h1>BetterFlix</h1></Link>
       <nav className='header_nav-links'>
       <Search />
      <Link to='/genre' className='genre-link'>Genres</Link>
       {this.props.user.id ? this.logout : <UserMenu /> }
       </nav>
       {/* <div className={this.state.expanded ? 'menu-hidden' : 'menu-expanded'}>
       </div> */}
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

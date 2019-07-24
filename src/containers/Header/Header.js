import React, { Component } from 'react';
import './Header.css';
import { UserMenu } from '../UserMenu/UserMenu';
import { connect } from 'react-redux';
import { signOut } from '../../actions';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import profileImage from '../../images/user.png';
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }
  headerSignOut = e => {
    e.preventDefault();
    this.props.signOut();
  };

  userMenu = (
    <form className='user-select-menu'>
      <Link to='/create_account'>
        <button className='user-select-buttons'> Create Account </button>
      </Link>
      <Link to='/log_in'>
        <button className='user-select-buttons'> Log In </button>
      </Link>
    </form>
  );

  logout = (
    <form>
      <button
        className='user-select-buttons'
        onClick={e => this.headerSignOut(e)}
      >
        Log Out
      </button>
    </form>
  );

  toggleMenu = e => {
    e.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    return (
      <header onClick={e => this.toggleMenu(e)}>
        <Link to='/'>
          <h1> BetterFlix </h1>
        </Link>
        <nav className='header_nav-links'>
          <Link to='/search' className='header-link'>
            Search
          </Link>
          <Link to='/genre' className='header-link'>
            Genres
          </Link>
          <Link to='/favorites' className='header-link'>
            Favorites
          </Link>
          {!this.state.expanded && !this.props.user.id && (
            <img
              alt='user menu button'
              className='user-toggle-button'
              img
              src={profileImage}
              onClick={e => this.toggleMenu(e)}
            />
          )}
          {this.state.expanded && this.userMenu}
          {this.props.user.id && this.logout}
        </nav>
      </header>
    );
  }
}
export const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});
export const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

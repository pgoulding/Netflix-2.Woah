import React, { Component } from 'react';
import './Header.css';
import { UserMenu } from '../UserMenu/UserMenu';
import { connect } from 'react-redux';
import { signOut } from '../../actions';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import profileImage from '../../images/user.png';
export class Header extends Component {
	constructor (props) {
		super(props);
		this.state = {
			expanded: false
		};
	}
	headerSignOut = e => {
		e.preventDefault();
		this.props.signOut();
	};

	logout = (
		<form>
			<button className="user-select-buttons" onClick={e => this.headerSignOut(e)}>
				Log Out
			</button>
		</form>
	);

	toggleMenu = e => {
		e.preventDefault();
		this.setState({ expanded: !this.state.expanded });
	};

	render () {
		return (
			<header>
				<Link to="/">
					<h1>BetterFlix</h1>
				</Link>
				<nav className="header_nav-links">
					<Search />
					<Link to="/genre" className="header-link">
						Genres
					</Link>
					<Link to="/favorites" className="header-link">
						Favorites
					</Link>
					<img
						alt="user menu button"
						className="user-toggle-button"
						img
						src={profileImage}
						onClick={e => this.toggleMenu(e)}
					/>
					<div className={this.state.expanded ? 'menu-expanded' : 'menu-hidden'}>
						{this.props.user.id ? this.logout : <UserMenu />}
					</div>
				</nav>
			</header>
		);
	}
}
export const mapStateToProps = state => ({
	user: state.user
});
export const mapDispatchToProps = dispatch => ({
	signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

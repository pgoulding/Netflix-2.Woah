import React, { Component } from 'react';
import './UserMenu.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions';

export class UserMenu extends Component {
  signOutUser = async e => {
    e.preventDefault();
    // await this.setState({
    //   name: '',
    //   password: '',
    //   email: ''
    // });
    await this.props.signOut();
    // console.log(this.props.signOut({ ...this.props.user }));
    // console.log(...this.props.user);
  };

  // const loginMenu = () => {
  //   if (!this.props.user.id) {
  //     return (
  //       <form>
  //         <Link to='/create_account'>
  //           <button>Create Account</button>
  //         </Link>
  //         <Link to='/sign_in'>
  //           <button>Log In</button>
  //         </Link>
  //       </form>
  //     );
  //   } else {
  //     return (
  //       <form>
  //         {/* <button onClick={e => this.signOutUser(e)}>Log Out</button> */}
  //       </form>
  //     );
  //   }
  // };
  render = () => {
    if (this.props.id) {
      return (
        <form>
          <button onClick={e => this.signOutUser(e)}>Log Out</button>
        </form>
      );
    } else {
      return (
        <form>
          <Link to='/create_account'>
            <button>Create Account</button>
          </Link>
          <Link to='/sign_in'>
            <button>Log In</button>
          </Link>
        </form>
      );
    }
  }

};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  signOut: (fake) => dispatch(signOut(fake))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

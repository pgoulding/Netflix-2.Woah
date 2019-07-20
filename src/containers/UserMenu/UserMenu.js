import React, { Component } from 'react';
import './UserMenu.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class UserMenu extends Component {
  // const signOutUser = async e => {
  //   e.preventDefault();
  //   await this.setState({
  //     name: '',
  //     password: '',
  //     email: ''
  //   });
  //   await signOut({ ...this.state });
  //   console.log(signOut({ ...this.state }));
  //   console.log(this.state);
  // };

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
// } else {
//   return (
//     <form>
//       {/* <button onClick={e => this.signOutUser(e)}>Log Out</button> */}
//     </form>
//   );

};

export const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, null)(UserMenu);

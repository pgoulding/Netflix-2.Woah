import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

class  Favorites extends Component {
  render () {
  if (!this.props.user.id) {
    return <Redirect to="/log_in" />
  }
    return (
      <h3>Favorite</h3>
    )
  }
}

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Favorites)

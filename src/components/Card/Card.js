import React from 'react'
import {
  connect
} from 'react-redux'
import './Card.css'
import {
  sendFavorite
} from '../../utils/API/apiFetch'

const Card = ({ movieInfo, user }) => {
  const { title, poster_path } = movieInfo
  const { user_id } = user
  const imageUrl = `http://image.tmdb.org/t/p/w300/${poster_path}`
  return (
    <article className="card">
      <h3>{ title }</h3>
      <img alt={ title && ' movie poster' } src={ imageUrl }/>
      {user.id && <button onClick={() => sendFavorite({ ...movieInfo, user_id})}>Favorite Movie</button>}
    </article>
  )
}

    const mapStateToProps = ({
      user
    }) => ({
      user
    })

    const mapDispatchToProps = (dispatch) => ({
      // signIn: (userInfo) => dispatch(signIn(userInfo))
    })


    export default connect(mapStateToProps, mapDispatchToProps)(Card)
import React from 'react'
import Card from '../Card/Card'
import { connect } from 'react-redux'
import './Gallery.css'


const Gallery = ({ data, genre }) => {

  let details = data.map(movie => {
      return <Card key={data.id} movieInfo={movie} />
    })

  return (
    <section>
      <h2>{ genre }</h2>
      <div className="gallery">
      { details }
      </div>
    </section>
  )
}

const mapStateToProps = ({ movies }) => ({
  movies
})

const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Gallery)


import React from 'react'
import Card from'./Card'
import { connect } from 'react-redux'
import './gallery.css'


const Gallery = ( {data, genre} ) => {

console.log( data )
  let details = data.map(movie => {
    console.log(movie)
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


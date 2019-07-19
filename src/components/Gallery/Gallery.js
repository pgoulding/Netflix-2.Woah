import React from 'react'
// import Card from '../Card/Card'
import { connect } from 'react-redux'
import { sendFavorite } from '../../utils/API/ApiFetch'
import AliceCarousel from 'react-alice-carousel';
import './Gallery.css'
import 'react-alice-carousel/lib/alice-carousel.css';
const Gallery = ( {data, genre, user} ) => {
  // const onSlideChange = (e)  => {
  //   console.log('Item`s position during a change: ', e.item);
  //   console.log('Slide`s position during a change: ', e.slide);
  // }

  // const onSlideChanged = (e) => {
  //   console.log('Item`s position after changes: ', e.item);
  //   console.log('Slide`s position after changes: ', e.slide);
  // }

    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };

  let details = data.map(movie => {
    const { title, overview, backdrop_path } = movie
    const { user_id } = user
    const imageUrl = `http://image.tmdb.org/t/p/original${backdrop_path}`

    return (
      <div className="card">
        {/* <h3>{title}</h3> */}

        <img alt={title && ' movie poster'} src={imageUrl} />
        {user_id && <button onClick={() => sendFavorite({ ...movie, user_id })}>Favorite Movie</button>}
          <div className="details-hover">
              <h3>{title}</h3>
              <p>{overview}</p>
          </div>
        </div>
    ) 
      // return <Card key={data.id} movieInfo={movie} />
    })

  return (
    <section>
      <h2>{ genre }</h2>
      <AliceCarousel
        duration={1000}
        autoPlay={true}
        startIndex={1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        // playButtonEnabled={true}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlayActionDisabled={true}
        // onSlideChange={onSlideChange}
        // onSlideChanged={onSlideChanged}
        >
      { details }
      </AliceCarousel>
      {/* <div className="gallery"> */}
      {/* { details } */}
      {/* </div> */}
    </section>
  )
}

const mapStateToProps = ({ movies, user }) => ({
  movies,
  user
})

const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Gallery)


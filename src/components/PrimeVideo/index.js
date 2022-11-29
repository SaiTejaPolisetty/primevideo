import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const ActionMoviesList = moviesList.filter(obj => obj.categoryId === 'ACTION')

  const comedyMoviesList = moviesList.filter(obj => obj.categoryId === 'COMEDY')

  return (
    <div className="bg-container">
      <div className="banner">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="banner-img"
        />
      </div>
      <div className="website-body">
        <h1 className="movies-heading">Action Movies</h1>
        <div>
          <MoviesSlider itemsList={ActionMoviesList} />
        </div>
        <h1 className="movies-heading">Comedy Movies</h1>
        <div>
          <MoviesSlider itemsList={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo

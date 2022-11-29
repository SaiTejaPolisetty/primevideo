import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const settings = {
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
}

const MoviesSlider = props => {
  const {itemsList} = props
  console.log(itemsList)

  return (
    <div className="slider-style">
      <Slider {...settings}>
        {itemsList.map(obj => (
          <MovieItem data={obj} key={obj.id} />
        ))}
      </Slider>
    </div>
  )
}
export default MoviesSlider

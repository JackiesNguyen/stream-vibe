import Slider from 'react-slick'

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
  }

  const image = 'https://wallpapers.com/images/hd/2013-marvel-studios-movie-thor-hxua9tvc2z0ptxny.jpg'
  return (
    <div className="banner">
      <div className="slider-container banner-container">
        <Slider {...settings}>
          <div>
            <img src={image} alt="banner" />
          </div>
          <div>
            <img src={image} alt="banner" />
          </div>
          <div>
            <img src={image} alt="banner" />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Banner

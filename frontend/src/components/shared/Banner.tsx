import '~/styles/banner.css'

import Slider from 'react-slick'
import { Play, Plus, ThumbsUp, Volume2 } from 'lucide-react'

import { Button } from './Button'

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
          <div className="relative rounded-xl">
            <div className="banner-img">
              <img src={image} alt="banner" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-32 left-0 right-0 z-10 flex flex-col gap-11 text-center text-white">
              <div className="flex flex-col px-36 py-0">
                <h2 className="text-4xl font-bold leading-normal">Avengers : Endgame</h2>
                <p className="text-lg font-medium leading-normal text-grey-60">
                  With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos&apos;s
                  actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter
                  who they face... Avenge the fallen.
                </p>
              </div>
              <div className="flex flex-row items-center justify-center gap-5">
                <Button>
                  <Play size={24} className="mr-2" />
                  Play Now
                </Button>
                <Button variant="icon">
                  <Plus size={24} />
                </Button>
                <Button variant="icon">
                  <ThumbsUp size={24} />
                </Button>
                <Button variant="icon">
                  <Volume2 size={24} />
                </Button>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl">
            <div className="banner-img">
              <img src={image} alt="banner" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-32 left-0 right-0 z-10 flex flex-col gap-11 text-center text-white">
              <div className="flex flex-col px-36 py-0">
                <h2 className="text-4xl font-bold leading-normal">Avengers : Endgame</h2>
                <p className="text-lg font-medium leading-normal text-grey-60">
                  With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos&apos;s
                  actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter
                  who they face... Avenge the fallen.
                </p>
              </div>
              <div className="flex flex-row items-center justify-center gap-5">
                <Button>
                  <Play size={24} className="mr-2" />
                  Play Now
                </Button>
                <Button variant="icon">
                  <Plus size={24} />
                </Button>
                <Button variant="icon">
                  <ThumbsUp size={24} />
                </Button>
                <Button variant="icon">
                  <Volume2 size={24} />
                </Button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Banner

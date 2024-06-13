import { forwardRef, useImperativeHandle, useRef } from 'react'
import Slider from 'react-slick'
import { v4 as uuidv4 } from 'uuid'

import carouselSettings from '~/constants/carouselSettings'
import { type ICardCarousel } from '~/types/cardCarousel'

import CardCarousel from './CardCarousel'

interface ICarouselProps {
  arrData: ICardCarousel
}

const Carousel = forwardRef(({ arrData }: ICarouselProps, ref) => {
  const sliderRef = useRef<Slider>(null)
  const settings = carouselSettings

  useImperativeHandle(ref, () => ({
    slickNext: () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext()
      }
    },
    slickPrev: () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev()
      }
    },
    slickGoTo: (index: number) => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(index)
      }
    },
  }))

  return (
    <Slider {...settings} ref={sliderRef}>
      {arrData.results.map((data) => (
        <CardCarousel data={data} key={uuidv4()} />
      ))}
    </Slider>
  )
})

export default Carousel

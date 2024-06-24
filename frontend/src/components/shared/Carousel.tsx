import { forwardRef, useImperativeHandle, useRef } from 'react'
import Slider from 'react-slick'
import { ArrowRight, Clock, Eye } from 'lucide-react'

import { imgPoster } from '~/assets'
import carouselSettings from '~/constants/carouselSettings'
import { type ICardCarousel, type IResult } from '~/types/cardCarousel'

interface ICarouselProps {
  arrData: ICardCarousel
  slidesToShow?: number
  isTopInContent?: boolean
  isTimeAndViewContent?: boolean
}

const Carousel = forwardRef(({ arrData, slidesToShow, isTopInContent, isTimeAndViewContent }: ICarouselProps, ref) => {
  const sliderRef = useRef<Slider>(null)
  const settings = carouselSettings(Number(slidesToShow))

  const getContentCardCarousel = (data: IResult) => {
    if (isTimeAndViewContent) {
      return (
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-1 rounded-3xl border border-black-15 bg-black-06 p-1.5 text-grey-60">
            <Clock />
            <span className="text-base font-normal leading-6">1h 30min</span>
          </div>
          <div className="flex items-center gap-1 rounded-3xl border border-black-15 bg-black-06 p-1.5 text-grey-60">
            <Eye />
            <span className="text-base font-normal leading-6">1h 30min</span>
          </div>
        </div>
      )
    }
    return (
      <div className="flex flex-col items-start">
        {isTopInContent && (
          <div className="rounded-md bg-primary p-2.5 text-base font-semibold leading-6 text-white">Top 10 In</div>
        )}
        <div className="flex w-full flex-row items-center justify-between">
          <span className="text-lg font-semibold leading-7 text-white">{data.title}</span>
          <ArrowRight className="w-5 text-white lg:w-9" />
        </div>
      </div>
    )
  }
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
      {arrData.results.map((data: IResult) => (
        <div key={data.id} className="relative cursor-pointer rounded-xl border border-black-15 bg-black-10 p-8">
          <div className="cardCarousel-img">
            <img src={imgPoster} alt="video" className="h-full w-full rounded-xl object-cover" />
          </div>
          {getContentCardCarousel(data)}
        </div>
      ))}
    </Slider>
  )
})

export default Carousel

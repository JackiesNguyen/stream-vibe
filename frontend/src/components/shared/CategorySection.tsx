import React from 'react'
import type Slider from 'react-slick'

import { type ICardCarousel } from '~/types/cardCarousel'

import Carousel from './Carousel'
import Heading from './Heading'
import NextPreButtons from './NextPreButtons'

interface ICategorySectionProps {
  title: string
  subTitle?: string
  data: ICardCarousel
  slidesToShow?: number
  isTopInContent?: boolean
  isTimeAndViewContent?: boolean
}

const CategorySection = ({
  title,
  subTitle,
  data,
  slidesToShow,
  isTopInContent,
  isTimeAndViewContent,
}: ICategorySectionProps) => {
  const carouselRef = React.createRef<Slider>()

  const handleNext = () => carouselRef.current?.slickNext()
  const handlePrevious = () => carouselRef.current?.slickPrev()
  const handleStepClick = (index: number) => carouselRef.current?.slickGoTo(index)

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <Heading title={title} subTitle={subTitle} />
        <NextPreButtons
          onNextClick={handleNext}
          onPrevClick={handlePrevious}
          onStepClick={handleStepClick}
          totalData={data.totalData}
        />
      </div>
      <div className="mt-14">
        <Carousel
          arrData={data}
          ref={carouselRef}
          slidesToShow={slidesToShow}
          isTopInContent={isTopInContent}
          isTimeAndViewContent={isTimeAndViewContent}
        />
      </div>
    </div>
  )
}

export default CategorySection

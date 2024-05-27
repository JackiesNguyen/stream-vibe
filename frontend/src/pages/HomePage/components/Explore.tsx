import React from 'react'
import type Slider from 'react-slick'

import { Carousel, Heading, NextPreButtons } from '~/components'
import { type ICardCarousel } from '~/types/cardCarousel'

interface IExploreProps {
  data: ICardCarousel
}
const Explore = ({ data }: IExploreProps) => {
  const carouselRef = React.createRef<Slider>()

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slickNext()
    }
  }

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.slickPrev()
    }
  }

  const handleStepClick = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.slickGoTo(index)
    }
  }
  return (
    <section className="py-20">
      <div className="flex flex-row items-center justify-between gap-5">
        <Heading
          content="Explore our wide variety of categories"
          subContent="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a
          documentary to learn something new"
        />
        <NextPreButtons
          onNextClick={handleNext}
          onPrevClick={handlePrevious}
          onStepClick={handleStepClick}
          totalData={data.totalData}
        />
      </div>
      <div className="mt-14">
        <Carousel arrData={data} ref={carouselRef} />
      </div>
    </section>
  )
}

export default Explore

import React from 'react'
import type Slider from 'react-slick'
import { Play } from 'lucide-react'

import { imgHero } from '~/assets'
import { Button, Carousel, Heading, NextPreButtons, WrapperContainer } from '~/components'
import Helmet from '~/components/Helmet'

const HomePage = () => {
  const arrData = {
    totalData: 25,
    results: [
      { id: 1, title: 'The Content1' },
      { id: 2, title: 'The Content2' },
      { id: 3, title: 'The Content3' },
      { id: 4, title: 'The Content4' },
      { id: 5, title: 'The Content5' },
    ],
  }

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
    <>
      <Helmet title="Home" />
      <div className="relative">
        <img src={imgHero} alt="hero" className="h-[640px] w-full object-cover sm:h-[836px] lg:h-screen" />
        <div className="bg-linear-gradient relative h-[250px] w-full sm:h-[300px]">
          <div className="absolute -top-20 left-0 right-0 z-10 flex h-full w-full justify-center text-white">
            <div className="flex max-w-[1096px] flex-col items-center gap-5 px-5 text-center">
              <h2 className="text-[28px] font-bold leading-normal sm:text-5xl xl:text-6xl">
                The Best Streaming Experience
              </h2>
              <p className="mb-5 text-center text-sm font-normal leading-normal xl:mb-10 xl:text-lg">
                StreamVibe is the best streaming experience for watching your favorite movies and shows on demand,
                anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest
                blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so
                you can easily find the content you want to watch.
              </p>
              <Button>
                <Play size={24} className="mr-2" />
                Start Watching Now
              </Button>
            </div>
          </div>
        </div>
        <WrapperContainer className="relative bg-black-08 pt-20">
          {/* Explore */}
          <div>
            <div className="flex flex-row items-center justify-between gap-5">
              <div className="flex flex-col gap-5">
                <Heading content="Explore our wide variety of categories" />
                <span className="text-sm font-normal leading-normal text-grey-60 lg:text-lg">
                  Whether you&apos;re looking for a comedy to make you laugh, a drama to make you think, or a
                  documentary to learn something new
                </span>
              </div>
              <NextPreButtons
                onNextClick={handleNext}
                onPrevClick={handlePrevious}
                onStepClick={handleStepClick}
                totalData={arrData.totalData}
              />
            </div>
          </div>
          <div className="mt-14">
            <Carousel arrData={arrData} ref={carouselRef} />
          </div>
        </WrapperContainer>
      </div>
    </>
  )
}

export default HomePage

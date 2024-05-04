import { Play } from 'lucide-react'

import { hero } from '~/assets'
import { Button, Heading, NextPreButtons, WrapperContainer } from '~/components'

const HomePage = () => {
  return (
    <div className="relative">
      <img src={hero} alt="hero" className="h-[640px] w-full object-cover sm:h-[836px] lg:h-screen" />
      <div className="bg-linear-gradient relative h-[300px] w-full">
        <div className="absolute -top-20 left-0 right-0 z-10 flex h-full w-full  justify-center text-white">
          <div className="flex max-w-[1096px] flex-col items-center gap-5">
            <h2 className="text-6xl font-bold leading-normal">The Best Streaming Experience</h2>
            <p className="mb-10 text-center text-lg font-normal leading-normal">
              StreamVibe is the best streaming experience for watching your favorite movies and shows on demand,
              anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest
              blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you
              can easily find the content you want to watch.
            </p>
            <Button>
              <Play size={24} className="mr-2" />
              Start Watching Now
            </Button>
          </div>
        </div>
      </div>
      <WrapperContainer className="bg-black-08 pt-24">
        {/* Explore */}
        <div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-5">
              <Heading content="Explore our wide variety of categories" />
              <span className="text-lg font-normal leading-normal text-grey-60">
                Whether you&apos;re looking for a comedy to make you laugh, a drama to make you think, or a documentary
                to learn something new
              </span>
            </div>
            <NextPreButtons />
          </div>
        </div>
      </WrapperContainer>
    </div>
  )
}

export default HomePage

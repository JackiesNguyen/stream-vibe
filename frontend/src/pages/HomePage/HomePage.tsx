import { Play } from 'lucide-react'

import { Button, WrapperContainer } from '~/components'
import Helmet from '~/components/Helmet'

import Advertisement from './components/Advertisement'
import Experience from './components/Experience'
import Explore from './components/Explore'
import Plans from './components/Plans'
import Questions from './components/Questions'

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

  return (
    <>
      <Helmet title="Home" />
      <div className="relative">
        <img
          src="https://res.cloudinary.com/dulkwgwws/image/upload/v1716459234/images/curbhrxkjpspxppbqkjt.png"
          alt="hero"
          className="h-[640px] w-full object-cover sm:h-[836px] lg:h-screen"
        />
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
        <WrapperContainer className="bg-black-08">
          {/* Explore */}
          <Explore data={arrData} />

          {/* Experience */}
          <Experience />

          {/* Questions */}
          <Questions />

          {/* Plans */}
          <Plans />

          {/* Advertisement */}
          <Advertisement />
        </WrapperContainer>
      </div>
    </>
  )
}

export default HomePage

import { ArrowRight } from 'lucide-react'

import { imgPoster } from '~/assets'
import { type IResult } from '~/types/cardCarousel'

interface ICardCarouselProps {
  data: IResult
}

const CardCarousel = ({ data }: ICardCarouselProps) => {
  return (
    <div className="relative cursor-pointer rounded-xl border-2 bg-black-10 p-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="bg-test">
        <img src={imgPoster} alt="video" className="h-full w-full rounded-xl object-cover" />
      </div>
      <div className="mt-2 flex items-center justify-between text-white">
        <span className="text-sm font-semibold lg:text-lg">{data.title}</span>
        <ArrowRight className="w-5 lg:w-9" />
      </div>
    </div>
  )
}

export default CardCarousel

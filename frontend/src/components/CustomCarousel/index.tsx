import { useRef } from 'react'

import { Card, CardContent } from '../@shadcnUI/ui/card'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from '../@shadcnUI/ui/carousel'

export default function CustomCarousel() {
  const carouselApiRef = useRef<CarouselApi | null>(null)

  const handleNextClick = () => {
    if (carouselApiRef.current) {
      carouselApiRef.current.scrollNext()
    }
  }

  const handlePrevClick = () => {
    if (carouselApiRef.current) {
      carouselApiRef.current.scrollPrev()
    }
  }

  return (
    <div>
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full max-w-sm"
        setApi={(api) => {
          carouselApiRef.current = api
        }}
      >
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
        <CarouselDots />
      </Carousel>

      <button type="button" onClick={handlePrevClick}>
        Prev Button
      </button>
      <button type="button" onClick={handleNextClick}>
        Next Button
      </button>
    </div>
  )
}

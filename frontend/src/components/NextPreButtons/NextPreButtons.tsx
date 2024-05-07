import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid'

import carouselSettings from '~/constants/carouselSettings'
import cn from '~/libs/utils'

interface INextPreButtonsProps {
  className?: string
  onNextClick: () => void
  onPrevClick: () => void
  onStepClick: (index: number) => void
  totalData: number
}

const NextPreButtons = ({ className, onNextClick, onPrevClick, totalData, onStepClick }: INextPreButtonsProps) => {
  const [currentStep, setCurrentStep] = useState<number>(0)

  const TOTAL_DOTS = Math.min(Math.ceil(totalData / carouselSettings.slidesToShow), 4)

  const handleStepClick = (index: number) => {
    setCurrentStep(index)
    onStepClick(index * carouselSettings.slidesToShow)
  }

  const handleNextClick = () => {
    setCurrentStep((prevStep) => (prevStep === TOTAL_DOTS - 1 ? 0 : prevStep + 1))
    onNextClick()
  }

  const handlePrevClick = () => {
    setCurrentStep((prevStep) => (prevStep === 0 ? TOTAL_DOTS - 1 : prevStep - 1))
    onPrevClick()
  }

  return (
    <div
      className={cn(
        'hidden gap-4 rounded-xl border border-black-12 bg-black-06 p-3 sm:flex sm:items-center',
        className,
      )}
    >
      <div
        className="cursor-pointer rounded-lg bg-black-10 p-2 transition-colors hover:bg-black-20"
        onClick={handlePrevClick}
        role="button"
        aria-label="Previous"
      >
        <ArrowLeft className="h-7 w-7 text-white" />
      </div>
      <div className="flex items-center gap-2">
        {Array.from({ length: TOTAL_DOTS }).map((_, index) => {
          const isActive = index === currentStep
          return (
            <div
              key={uuidv4()}
              className={cn('h-1 w-6 bg-black-20', { 'bg-red-45': isActive })}
              onClick={() => {
                handleStepClick(index)
              }}
              role="button"
              aria-label={`Step `}
            />
          )
        })}
      </div>
      <div
        className="cursor-pointer rounded-lg bg-black-10 p-2 transition-colors hover:bg-black-20"
        onClick={handleNextClick}
        role="button"
        aria-label="Next"
      >
        <ArrowRight className="h-7 w-7 text-white" />
      </div>
    </div>
  )
}

export default NextPreButtons

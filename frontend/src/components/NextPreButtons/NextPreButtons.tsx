import { ArrowLeft, ArrowRight } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid'

import cn from '~/libs/utils'

const NextPreButtons = () => {
  const classNameButton = 'cursor-pointer rounded-lg bg-black-10 p-2 hover:bg-black-20 transition-colors'

  return (
    <div className="border-black-12 flex items-center gap-4 rounded-xl border bg-black-06 p-3">
      <div className={classNameButton}>
        <ArrowLeft className="h-7 w-7  text-white" />
      </div>
      <div className="flex items-center gap-2">
        {Array(4)
          .fill(null)
          .map((_, index) => {
            const isActive = index === 0
            return <div key={uuidv4()} className={cn('bg-black-20 h-1 w-6', { 'bg-red-45': isActive })} />
          })}
      </div>
      <div className={classNameButton}>
        <ArrowRight className="h-7 w-7  text-white" />
      </div>
    </div>
  )
}

export default NextPreButtons

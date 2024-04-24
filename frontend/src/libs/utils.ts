import { cx } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const cn: typeof cx = (...inputs) => {
  return twMerge(cx(inputs))
}

export default cn

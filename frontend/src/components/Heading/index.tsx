import cn from '~/libs/utils'

interface IHeadingProps {
  className?: string
  content: string
}

const Heading = ({ className, content }: IHeadingProps) => {
  return (
    <h2 className={cn('text-xl font-bold leading-normal text-white lg:text-3xl 2xl:text-4xl', className)}>{content}</h2>
  )
}

export default Heading

import cn from '~/libs/utils'

interface IHeadingProps {
  className?: string
  content: string
  subContent?: string
}

const Heading = ({ className, content, subContent }: IHeadingProps) => {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <h2 className="text-xl font-bold leading-normal text-white lg:text-3xl 2xl:text-4xl">{content}</h2>
      <span className="text-sm font-normal leading-normal text-grey-60 lg:text-lg">{subContent}</span>
    </div>
  )
}

export default Heading

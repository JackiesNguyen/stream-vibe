import cn from '~/libs/utils'

interface IHeadingProps {
  className?: string
  title: string
  subTitle?: string
}

const Heading = ({ className, title, subTitle }: IHeadingProps) => {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <h2 className="text-xl font-bold leading-normal text-white lg:text-3xl 2xl:text-4xl">{title}</h2>
      <span className="text-sm font-normal leading-normal text-grey-60 lg:text-lg">{subTitle}</span>
    </div>
  )
}

export default Heading

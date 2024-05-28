import cn from '~/libs/utils'

interface IWrapperContainerProps {
  children: React.ReactNode
  className?: string
}

const WrapperContainer = ({ className, children }: IWrapperContainerProps) => {
  return <div className={cn('px-5 py-5 md:px-7 lg:px-24', className)}>{children}</div>
}

export default WrapperContainer

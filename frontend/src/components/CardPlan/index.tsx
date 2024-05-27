import { Link } from 'react-router-dom'

import { type TPlan } from '~/constants/plans'

interface ICardPlanProps {
  plan: TPlan
}
const CardPlan = ({ plan }: ICardPlanProps) => {
  return (
    <div className="flex flex-col gap-12 rounded-xl border border-black-15 bg-black-10 p-[50px]">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold leading-9 text-white">{plan.title}</h2>
        <p className="line-clamp-2 text-lg font-normal leading-7 text-grey-60">{plan.description}</p>
      </div>
      <div className="text-[40px] font-semibold text-white">
        ${plan.price}
        <span className="text-lg font-medium text-grey-60">/month</span>
      </div>
      <div className="flex items-center gap-5">
        <Link
          to="/"
          className="flex flex-1 items-center justify-center rounded-lg border border-black-15 bg-black-08 px-6 py-[18px] text-white"
        >
          Start Free Trial
        </Link>
        <Link
          to="/"
          className="flex flex-1 items-center justify-center rounded-lg bg-primary px-6 py-[18px] text-white"
        >
          Choose Plan
        </Link>
      </div>
    </div>
  )
}

export default CardPlan

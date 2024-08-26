import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Heading, SwitchTabs } from '~/components/shared'
import plans from '~/constants/plans'

const Plans = () => {
  const [endpoint, setEndpoint] = useState<string>('movie')

  const onTabChange = (tab: string) => {
    setEndpoint(tab === 'Movies' ? 'movie' : 'tv')
  }

  return (
    <section className="flex flex-col gap-20 py-10 xl:py-20">
      <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <Heading
          title={`Choose the plan that's right for you ${endpoint}`}
          subTitle="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        />
        <SwitchTabs data={['Movies', 'TV Shows']} onTabChange={onTabChange} />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="flex flex-col gap-7 rounded-xl border border-black-15 bg-black-10 p-6 lg:gap-12 lg:p-[50px]"
          >
            <div className="flex flex-col gap-2.5 lg:gap-4">
              <h2 className="text-lg font-bold leading-9 text-white lg:text-2xl">{plan.title}</h2>
              <p className="line-clamp-2 text-sm font-normal leading-7 text-grey-60 lg:text-lg">{plan.description}</p>
            </div>
            <div className="text-2xl font-semibold text-white lg:text-[40px]">
              ${plan.price}
              <span className="text-sm font-medium text-grey-60 lg:text-lg">/month</span>
            </div>
            <div className="flex items-center gap-5">
              <Link
                to="/"
                className="flex flex-1 items-center justify-center rounded-lg border border-black-15 bg-black-08 p-4 text-white lg:px-6 lg:py-[18px]"
              >
                Start Free Trial
              </Link>
              <Link
                to="/"
                className="flex flex-1 items-center justify-center rounded-lg bg-primary p-4 text-white lg:px-6 lg:py-[18px]"
              >
                Choose Plan
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Plans

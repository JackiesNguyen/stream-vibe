import { useState } from 'react'

import { CardPlan, Heading, SwitchTabs } from '~/components/shared'
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
          content={`Choose the plan that's right for you ${endpoint}`}
          subContent="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        />
        <SwitchTabs data={['Movies', 'TV Shows']} onTabChange={onTabChange} />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <CardPlan key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  )
}

export default Plans

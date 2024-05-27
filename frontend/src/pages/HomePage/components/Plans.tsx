import { useState } from 'react'

import { Heading, SwitchTabs } from '~/components'
import CardPlan from '~/components/CardPlan'
import plans from '~/constants/plans'

const Plans = () => {
  const [endpoint, setEndpoint] = useState<string>('movie')

  const onTabChange = (tab: string) => {
    setEndpoint(tab === 'Movies' ? 'movie' : 'tv')
  }

  console.log(endpoint)

  return (
    <section className="flex flex-col gap-20 py-20">
      <div className="flex items-center justify-between">
        <Heading
          content="Choose the plan that's right for you"
          subContent="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        />
        <SwitchTabs data={['Movies', 'TV Shows']} onTabChange={onTabChange} />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {plans.map((plan) => (
          <CardPlan key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  )
}

export default Plans

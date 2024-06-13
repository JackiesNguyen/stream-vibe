import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import cn from '~/libs/utils'

interface ISwitchTabsProps {
  data: string[]
  onTabChange: (tab: string, index: number) => void
}

const SwitchTabs = ({ data, onTabChange }: ISwitchTabsProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const activeTab = (tab: string, index: number) => {
    setSelectedTab(index)
    onTabChange(tab, index)
  }

  return (
    <div className="flex items-center rounded-xl border border-black-15 bg-black-06 p-2 text-white lg:p-2.5">
      {data.map((tab, index) => (
        <div
          role="button"
          key={uuidv4()}
          className={cn('p-3 text-sm font-medium leading-7 text-grey-60 lg:p-3.5 lg:text-lg', {
            'rounded-lg bg-black-12 text-white': selectedTab === index,
          })}
          onClick={() => {
            activeTab(tab, index)
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  )
}

export default SwitchTabs

import { Tab } from '@headlessui/react'
import React, { useState } from 'react'
import ChartCard from '../components/charts/ChartCard'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  let [categories] = useState({
    "温度": <ChartCard typeData={"temp"} className="h-full w-full " />,
    "电压": <ChartCard typeData={"battery"} className="h-full w-full " />,
    "气压": <ChartCard typeData={"pressure"} className="h-full w-full " />,
  });
  return (
    <div className="grid grid-cols-12 grid-rows-6 gap-4 h-full">
      <div className="col-start-2 col-span-10 sm:col-span-6 row-span-3 mt-2 h-full">
        <Tab.Group>
          <Tab.List className="flex p-1 px-5 space-x-1 rounded-xl">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-300 ring-white ring-opacity-60',
                    selected
                      ? 'bg-white shadow-lg'
                      : 'text-gray-500 hover:bg-white/[0.12] hover:text-gray-200'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            {Object.values(categories).map((cards, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'bg-white rounded-xl p-3',
                  'focus:outline-none '
                )}
              >
                {cards}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>      
  )
}

import { Tab } from '@headlessui/react'
import React, { useState } from 'react'
import LoginPart from '../components/login-parts/LoginPart';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Login() {
  let [categories] = useState({
    "登陆": <LoginPart />
   });

  return (
    <div className="h-full">
      <div className="w-full shadow-md text-2xl text-blue-900 bg-blue-50 bg-opacity-50 pl-6 p-4 mb-4">能源站监控管理平台</div>
      <Tab.Group > 
        <Tab.Panels>
          {Object.values(categories).map((cards, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-white rounded-xl p-3 shadow-sm mx-2 w-11/12 h-80 ',
                'focus:outline-none '
              )}
            >
              {cards}
            </Tab.Panel>
          ))}
        </Tab.Panels>
        <Tab.List className="flex mt-1 p-1 px-5 space-x-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-1/3 py-2.5 text-sm leading-5 font-medium text-blue-700',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-300 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white'
                    : 'text-gray-500 hover:bg-white/[0.12] hover:text-gray-200'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}

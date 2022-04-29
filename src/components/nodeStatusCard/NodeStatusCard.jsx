import { SunIcon } from '@heroicons/react/solid'
import React from 'react'

export default function NodeStatusCard(props) {
  
  return (
    <div className="grid grid-rows-6 gap-4 grid-cols-12 transition ease-in-out delay-75 relative basis-[90%] bg-slate-100/50 py-2 shadow-gray-400 shadow-2xl hover:shadow-lg h-48 rounded-xl hover:bg-blue-50/50 dark:bg-gray-800 dark:shadow-gray-900 dark:hover:bg-gary-700/20">
      <div className="relative row-start-2 row-span-3 col-start-3 col-span-3">
        <SunIcon className="absolute w-12 h-12 animate-pingSlow text-green-400/50 blur-sm" />
        <SunIcon className="absolute text-green-700 w-12 h-12" />
      </div>
      <div className="col-start-7 col-span-6 row-start-2 row-span-2 pt-2 text-2xl leading-snug dark:text-slate-100">节点 {props.id}</div>
      <div className="col-start-4 col-span-10 xl:col-start-5 row-start-4 row-span-1 text-lg leading-loose dark:text-slate-100">节点类型 01</div>
      <div className="col-start-4 col-span-10 xl:col-start-5 row-start-5 row-span-1 text-lg leading-loose dark:text-slate-100">节点状态 正常</div>

    </div>
  )
}

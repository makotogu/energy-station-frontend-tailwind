import React from 'react'
import ChartCard from '../components/charts/ChartCard'

export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-6 gap-4 h-full">
      <div id="dasd" className="col-start-2 col-span-10 row-start-2 row-span-4 border-2 h-full">
        <ChartCard typeData={"temp"} className="h-full w-full "/>
      </div>
    </div>      
  )
}

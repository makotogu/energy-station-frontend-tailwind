import { Paper } from '@mui/material';
import React from 'react'
import SystemCharts from '../components/charts/SystemCharts';
import CommandBar from '../components/commad-bar/CommandBar';
import NodeStatusCard from '../components/nodeStatusCard/NodeStatusCard'
import HomeTable from '../components/tables/HomeTable';

export default function Home() {
  return (
    <div className="relative flex flex-wrap">
      <div className="flex flex-row w-full">
          <Paper className="basis-2/3 p-8 h-[320px] bg-gray-100 m-4 border-r-2 dark:bg-gray-700/40">
            <div className=" block text-2xl font-thin leading-10">节点状态</div>
            <div className="flex space-x-6 pl-4 pt-4">
              <NodeStatusCard id={1} />
              <div className="transition ease-in-out delay-75 relative flex flex-col justify-center  basis-[10%]  border-8 border-dotted border-gray-300/50 bg-slate-100/50 px-5 py-2 rounded-xl group hover:border-gray-500/50 text-lg text-gray-600/50 hover:text-gray-600">
                查看其他
              </div>
            </div>
          </Paper>

          <Paper className="basis-1/3 h-[320px] p-8 m-4 ">
            <div className='text-2xl font-thin leading-10'>服务器状态</div>
            <div className=" w-96 h-full dark:hidden">
              <SystemCharts />
            </div>
            <div className=" w-96 h-full bg-white hidden dark:block">
              <SystemCharts />
            </div>
          </Paper>

      </div>

      <div className='basis-full w-96 mt-1 border-b-2 pb-5 '>
        <CommandBar />
      </div>      

      <div className='basis-full w-96 mt-1'>
        <div className="flex basis-full space-x-3 mt-4 ml-6 mb-2 ">
          <div className="text-2xl font-thin leading-10">表格数据</div>
        </div>
        <HomeTable />
      </div>
    </div>
  )
}

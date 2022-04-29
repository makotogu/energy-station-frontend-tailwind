import GasMeter from '../../../static/img/GasMeter.png';
import GasPipe from '../../../static/img/ZhangJiang/GasPipe.png';
import HeatPipe from '../../../static/img/ZhangJiang/HeatPipe.png';
import OutputMeter from '../../../static/img/OutputMeter.png';
import UserMeter from '../../../static/img/UserMeter.png';
import React from 'react'
import { Grow, Paper, Tooltip } from '@mui/material';

export default function NodeZhangJiangCanvas() {

  return (
    <Paper className="relative w-[1050px] h-[820px] mt-[20px] ml-[30px]">
      {/* 管道结构 */}
      <Grow in={true}>
        <img src={GasPipe} className="w-[140px] h-[140px] absolute left-[395px] top-[130px] " />
      </Grow>
      <Grow in={true}>
        <img src={HeatPipe} className="w-[840px] h-[420px] absolute left-[95px] top-[290px] " />
      </Grow>
      {/* 用表结构 */}
      <Grow in={true}>
        <Tooltip title="入口燃气表" followCursor>
          <img src={GasMeter} className="w-[140px] h-[180px] absolute left-[452px] hover:animate-pulse" alt="入口燃气表" />
        </Tooltip>
      </Grow>
      <Grow in={true}>
        <Tooltip title="出口能量计" followCursor>
          <img src={OutputMeter} className="w-[200px] h-[180px] absolute left-[225px] top-[190px] hover:animate-pulse" alt="出口能量计" />
        </Tooltip>
      </Grow>
      <Grow in={true}>
        <Tooltip title="用户表" followCursor>
          <img src={UserMeter} className="w-[200px] h-[160px] absolute left-[5px] top-[430px]" alt="用户表" />
        </Tooltip>
      </Grow>
      <Grow in={true}>
        <Tooltip title="用户表" followCursor>
          <img src={UserMeter} className="w-[200px] h-[160px] absolute left-[280px] top-[430px]" alt="用户表" />
        </Tooltip>
      </Grow>
      <Grow in={true}>
        <Tooltip title="用户表" followCursor>
          <img src={UserMeter} className="w-[200px] h-[160px] absolute left-[550px] top-[430px]" alt="用户表" />
        </Tooltip>
      </Grow>
      <Grow in={true}>
        <Tooltip title="用户表" followCursor>
          <img src={UserMeter} className="w-[200px] h-[160px] absolute left-[825px] top-[430px]" alt="用户表" />
        </Tooltip>
      </Grow>
      <Grow in={true}>
        <Tooltip title="用户表" followCursor>
          <img src={UserMeter} className="w-[200px] h-[160px] absolute left-[5px] top-[630px]" alt="用户表" />
        </Tooltip>
      </Grow>
      <Grow in={true}>
        <Tooltip title="用户表" followCursor>
          <img src={UserMeter} className="w-[200px] h-[160px] absolute left-[280px] top-[630px]" alt="用户表" />
        </Tooltip>
      </Grow>
      <Grow in={true}>
        <Tooltip title="用户表" followCursor>
          <img src={UserMeter} className="w-[200px] h-[160px] absolute left-[550px] top-[630px]" alt="用户表" />
        </Tooltip>
      </Grow>
      <Grow in={true}>
        <Tooltip title="用户表" followCursor>
          <img src={UserMeter} className="w-[200px] h-[160px] absolute left-[825px] top-[630px]" alt="用户表" />
        </Tooltip>
      </Grow>
    </Paper>
  )
}

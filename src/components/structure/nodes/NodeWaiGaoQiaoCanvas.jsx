import GasMeter from '../../../static/img/GasMeter.png';
import GasPipe from '../../../static/img/WaiGaoQiao/GasPipe.png';
import ElecPipe from '../../../static/img/WaiGaoQiao/ElecPipe.png';
import HeatPipe from '../../../static/img/WaiGaoQiao/HeatPipe.png';
import MagnetMeter from '../../../static/img/MagnetMeter.png';
import UserMeter from '../../../static/img/UserMeter.png';
import ElecMeter from '../../../static/img/ElecMeter.png';
import HeatSample from '../../../static/sample/HeatSample.png';
import GasSample from '../../../static/sample/GasSample.png';
import ColdSample from '../../../static/sample/ColdSample.png';
import ElecSample from '../../../static/sample/ElecSample.png';
import React from 'react'
import { Divider, Grow, Tooltip } from '@mui/material';

export default function NodeWaiGaoQiaoCanVas() {
  const [frame, setFrame] = React.useState(
    {
      width: 0,
      height: 0,
      rate: 0.0,
      restWidth: 0,
      restHeight: 0,
    }
  )
  React.useEffect(() => {
    var documentWidth = window.innerWidth - 256 - 10;
    var documentHeight = window.innerHeight - 64 - 10;
    var rate = documentWidth - 256 >= 800 ? (documentWidth - 256) * 0.7 / 1620 : 800 * 0.7 / 1620;
    if (rate * 1425 > documentHeight * 0.8) {
      rate = documentHeight * 0.8 / 1435;
    }
    setFrame({ ...frame, width: 1620 * rate, height: 1425 * rate, rate: rate, restWidth: (documentWidth - 256) - 1620 * rate, restHeight: documentHeight - 1425 * rate });
    // eslint-disable-next-line 
  }, []);

  var userMeterList = [];
  for (let i = 0; i < 4; i++) {
    userMeterList.push(
      <Grow in={true}>
        <Tooltip title={<div className='text-xl'>{"用户表" + (i + 1)}</div>} followCursor>
          <img
            src={UserMeter}
            className="absolute hover:animate-pulse"
            alt="用户表"
            style={{ width: 360 * frame.rate, height: 320 * frame.rate, left: (0 + 420 * (i)) * frame.rate, top: 735 * frame.rate }}
          />
        </Tooltip>
      </Grow>
    )
  }
  for (let i = 0; i < 4; i++) {
    userMeterList.push(
      <Grow in={true}>
        <Tooltip title={<div className='text-xl'>{"用户表" + (i + 5)}</div>} followCursor>
          <img
            src={UserMeter}
            className="absolute hover:animate-pulse"
            alt="用户表"
            style={{ width: 360 * frame.rate, height: 320 * frame.rate, left: (0 + 420 * (i)) * frame.rate, top: 1105 * frame.rate }}
          />
        </Tooltip>
      </Grow>
    )
  }
  var userMeterStatusList = [];
  for (let i = 0; i < 8; i++) {
    userMeterStatusList.push(
      <div className='flex flex-row flex-grow p-2 items-center' style={{ width: frame.restWidth / 1.5 }}>
        <div className='ml-[20px] text-[#3E5769]' style={{ fontSize: frame.height / 45 }}>
          用户表-{i + 1}
        </div>
        <div className='flex-grow font-[200] text-[#7C97AA]' style={{ fontSize: frame.height / 45 }}>
          xx.xx
        </div>
        <div className='w-[44px] h-[24px] '>
          <svg className='fill-[#83FF00] stroke-[#CDDDEB] stroke-[4] '>
            <circle cx={12} cy={12} r={8} />
          </svg>
        </div>
      </div>
    )
  }
  return (
    <div className='flex flex-row' >
      <div className='absolute top-[24px] left-[286px]'>
        <div className='text-3xl leading-loose font-[250] text-[#3E5769]'>上海森兰外高桥能源服务有限公司</div>
        <div className='text-xl font-[150] text-[#7C97AA]'>上海市浦东新区杨高北路1880号</div>
      </div>
      <div className="absolute" style={{ left: frame.width + 256, top: 128 }}>
        <div className='text-xl font-[250] text-[#3E5769] mb-[10px]'>图例</div>
        <div className='flex flex-row items-center w-[128px] my-2 '>
          <img src={GasSample} className="w-[24px]" alt='燃气图例' />
          <div className='ml-[30px] text-[#7C97AA] leading-loose flex-grow'> -- 燃气</div>
        </div>
        <div className='flex flex-row items-center w-[128px] my-2 '>
          <img src={ElecSample} className="w-[24px]" alt='电力图例' />
          <div className='ml-[30px] text-[#7C97AA] leading-loose flex-grow'> -- 电力</div>
        </div>
        <div className='flex flex-row w-[128px] items-center my-2'>
          <img src={HeatSample} className="w-[24px]" alt='供热图例' />
          <div className='ml-[30px] text-[#7C97AA] leading-loose flex-grow'> -- 供热</div>
        </div>
        <div className='flex flex-row w-[128px] items-center my-2'>
          <img src={ColdSample} className="w-[24px]" alt='供冷图例' />
          <div className='ml-[30px] text-[#7C97AA] leading-loose flex-grow'> -- 供冷</div>
        </div>
      </div>
      <div className=''>
        <div
          className={"relative ml-[30px]"}
          style={{
            width: frame.width + 40,
            height: frame.height + 80,
          }}
        >
          <div className="relative left-[20px] top-[20px]">
            {/* 车间结构 */}
            <Grow in={true}>
              <div
                className='flex flex-row border-collapse items-center justify-center absolute border-4 border-gray-300 bg-gray-200/80 border-dashed text-xl  text-[#3E5769] font-[350] leading-loose z-10'
                style={{width: 440*frame.rate, height: 200*frame.rate, left: 564*frame.rate, top: 400*frame.rate}}
              >
                <div className='flex items-center justify-center border-r-2 border-gray-400/80 border-dotted h-full' style={{width: 220*frame.rate-10, fontSize: (220*frame.rate-10)/6}}>
                  供热机组
                </div>
                <div className='flex items-center justify-center border-l-2 border-gray-400/80 border-dotted h-full' style={{width: 220*frame.rate+10, fontSize: (220*frame.rate+10)/8}}>
                  地下制冷机组
                </div>
              </div>
            </Grow>

            {/* 管道结构 */}
            <Grow in={true}>
              <img
                src={GasPipe}
                className="absolute"
                alt='燃气管道'
                style={{ width: 200 * frame.rate, height: 200 * frame.rate, left: 473 * frame.rate, top: 277 * frame.rate }}
              />
            </Grow>
            <Grow in={true}>
              <img
                src={ElecPipe}
                className="absolute"
                alt='电力管道'
                style={{ width: 200 * frame.rate, height: 200 * frame.rate, left: 900 * frame.rate, top: 277 * frame.rate }}
              />
            </Grow>
            <Grow in={true}>
              <img
                src={HeatPipe}
                className="absolute"
                alt='能量管道'
                style={{ width: 1290 * frame.rate, height: 669 * frame.rate, left: 166 * frame.rate, top: 512 * frame.rate }}
              />
            </Grow>

            {/* 用表结构 */}
            <Grow in={true}>
              <Tooltip title={<div className='text-xl'>入口燃气表</div>} followCursor>
                <img
                  src={GasMeter}
                  className="absolute hover:animate-pulse"
                  alt="入口燃气表"
                  style={{ width: 187 * frame.rate, height: 311 * frame.rate, left: 558 * frame.rate, top: 28 * frame.rate }}
                />
              </Tooltip>
            </Grow>
            <Grow in={true}>
              <Tooltip title={<div className='text-xl'>入口燃气表</div>} followCursor>
                <img
                  src={ElecMeter}
                  className="absolute hover:animate-pulse"
                  alt="入口电源表"
                  style={{ width: 187 * frame.rate, height: 311 * frame.rate, left: 840 * frame.rate, top: 28 * frame.rate }}
                />
              </Tooltip>
            </Grow>
            <Grow in={true}>
              <Tooltip title={<div className="text-xl">出口能量计</div>} followCursor>
                <img
                  src={MagnetMeter}
                  className="absolute hover:animate-pulse"
                  alt="出口能量计-1"
                  style={{ width: 300 * frame.rate, height: 300 * frame.rate, left: 252 * frame.rate, top: 362 * frame.rate }}
                />
              </Tooltip>
            </Grow>
            <Grow in={true}>
              <Tooltip title={<div className="text-xl">出口能量计</div>} followCursor>
                <img
                  src={MagnetMeter}
                  className="absolute hover:animate-pulse"
                  alt="出口能量计-2"
                  style={{ width: 300 * frame.rate, height: 300 * frame.rate, left: 1018 * frame.rate, top: 362 * frame.rate }}
                />
              </Tooltip>
            </Grow>
            {userMeterList.map((item, index) => {
              return item;
            })}
          </div>
        </div>
      </div>
      <Divider sx={{ marginLeft: "40px", marginRight: "40px" }} orientation="vertical" flexItem />
      <div
        className={' flex flex-row space-x-10 mt-[20px] ml-[' + frame.width + 'px]'}
      >
        <div
          className='flex flex-col space-y-4 pl-4'
          style={{
            width: frame.restWidth / 1.2,
            height: frame.height,
          }}
        >
          <div className='flex flex-row space-x-6 mt-6'>
            <div
              className='flex flex-row flex-wrap divide-y-2'
              style={{
                width: frame.restWidth / 1.5,
                border: "none",
                backgroundImage: "linear-gradient(to bottom right #E7F1F9, #EDF5FC), linear-gradient(to bottom right, #FFFFFF, #FFFFFF, #CAD6E5)",
                padding: "1px",
                borderRadius: "5px",
                backgroundClip: "content-box, padding-box",
                textAlign: "center",
                boxShadow: "12px 3px 45px 0px rgba(18,61,101,0.3), -24px -24px 60px 0px rgba(255,255,255,0.6), inset -12px -9px 120px 0px rgba(255,255,255,0.2)",
              }}
            >
              <div className='flex flex-row flex-grow py-2 px-2 items-center' style={{ width: frame.restWidth / 1.5 }}>
                <div className='ml-[20px] text-[#3E5769]' style={{fontSize: frame.height / 45}}>
                  入口燃气表
                </div>
                <div className='flex-grow font-[200] text-[#7C97AA]' style={{ fontSize: frame.height / 45 }}>
                  xx.xx
                </div>
                <div className='w-[44px] h-[24px] '>
                  <svg className='fill-[#83FF00] stroke-[#CDDDEB] stroke-[4] '>
                    <circle cx={12} cy={12} r={8} />
                  </svg>
                </div>
              </div>
              <div className='flex flex-row flex-grow py-2 px-2 items-center ' style={{ width: frame.restWidth / 1.5 }}>
                <div className='ml-[20px]  text-[#3E5769]' style={{ fontSize: frame.height / 45 }}>
                  入口电源表
                </div>
                <div className='flex-grow font-[200] text-[#7C97AA]' style={{ fontSize: frame.height / 45 }}>
                  xx.xx
                </div>
                <div className='w-[44px] h-[24px] '>
                  <svg className='fill-[#83FF00] stroke-[#CDDDEB] stroke-[4] '>
                    <circle cx={12} cy={12} r={8} />
                  </svg>
                </div>
              </div>
            </div>

          </div>
          <div className='flex flex-row space-x-6'>
            <div
              className='flex flex-row flex-wrap divide-y-2'
              style={{
                width: frame.restWidth / 1.5,
                border: "none",
                backgroundImage: "linear-gradient(to bottom right #E7F1F9, #EDF5FC), linear-gradient(to bottom right, #FFFFFF, #FFFFFF, #CAD6E5)",
                padding: "1px",
                borderRadius: "5px",
                backgroundClip: "content-box, padding-box",
                textAlign: "center",
                boxShadow: "12px 3px 45px 0px rgba(18,61,101,0.3), -24px -24px 60px 0px rgba(255,255,255,0.6), inset -12px -9px 120px 0px rgba(255,255,255,0.2)",
              }}
            >
              <div className='flex flex-row flex-grow p-2 items-center' style={{ width: frame.restWidth / 1.5 }}>
                <div className='ml-[20px] text-[#3E5769]' style={{ fontSize: frame.height / 45 }}>
                  出口能量计-1
                </div>
                <div className='flex-grow font-[200] text-[#7C97AA]' style={{ fontSize: frame.height / 45 }}>
                  xx.xx
                </div>
                <div className='w-[44px] h-[24px] '>
                  <svg className='fill-[#83FF00] stroke-[#CDDDEB] stroke-[4] '>
                    <circle cx={12} cy={12} r={8} />
                  </svg>
                </div>
              </div>
              <div className='flex flex-row flex-grow p-2 items-center' style={{ width: frame.restWidth / 1.5 }}>
                <div className='ml-[20px] text-[#3E5769]' style={{ fontSize: frame.height / 45 }}>
                  出口能量计-2
                </div>
                <div className='flex-grow font-[200] text-[#7C97AA]' style={{ fontSize: frame.height / 45 }}>
                  xx.xx
                </div>
                <div className='w-[44px] h-[24px] '>
                  <svg className='fill-[#83FF00] stroke-[#CDDDEB] stroke-[4] '>
                    <circle cx={12} cy={12} r={8} />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            className='flex flex-row flex-wrap divide-y-2 '
            style={{
              width: frame.restWidth / 1.5,
              border: "none",
              backgroundImage: "linear-gradient(to bottom right #E7F1F9, #EDF5FC), linear-gradient(to bottom right, #FFFFFF, #FFFFFF, #CAD6E5)",
              padding: "1px",
              borderRadius: "10px",
              backgroundClip: "content-box, padding-box",
              textAlign: "center",
              boxShadow: "12px 3px 45px 0px rgba(18,61,101,0.3), -36px -36px 50px 0px rgba(255,255,255,0.7), inset -12px -9px 120px 0px rgba(255,255,255,0.2)",
            }}
          >
            {userMeterStatusList.map((item, index) => {
              return item;
            })}
          </div>

        </div>

      </div>
    </div>


  )
}

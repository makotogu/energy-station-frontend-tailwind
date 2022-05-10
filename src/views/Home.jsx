import { height } from '@mui/system';
import React from 'react'
import HomeCharts from '../components/charts/node/HomeCharts';
import SystemCharts from '../components/charts/SystemCharts';
import CommandBar from '../components/commad-bar/CommandBar';
import HomeTable from '../components/tables/HomeTable';

export default function Home() {
  const [frame, setFrame] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    console.log(window.innerWidth);
    setFrame({
      width: window.innerWidth - 300,
      height: window.innerHeight - 100,
    });
  }, []);

  return (
    <div 
      style={{
        width: frame.width,
        height: frame.height,
        paddingLeft: '20px',
        paddingTop:"20px",
      }}
    >
      <div className="relative flex flex-row space-x-12">
        <div className='flex flex-col'>
          <div 
            className='mt-1 mb-8'
            style={{
              width: frame.width * 2 / 3.1,
              height: frame.height* 2 / 3.8,
              // height: "min-content",
              border: "none",
              backgroundImage: "linear-gradient(to bottom right #E7F1F9, #EDF5FC), linear-gradient(to bottom right, #FFFFFF, #FFFFFF, #CAD6E5)",
              padding: "1px",
              borderRadius: "5px",
              backgroundClip: "content-box, padding-box",
              textAlign: "left",
              boxShadow: "12px 3px 45px 0px rgba(18,61,101,0.3), -24px -24px 60px 0px rgba(255,255,255,0.6), inset -12px -9px 120px 0px rgba(255,255,255,0.2)",
            }}
          >
            <div 
              className="text-3xl text-[#3E5769] font-[350] leading-10 mt-4 ml-6 mb-1 no-scrollbar" 
              style={{
                fontSize: frame.height / 40,
              }}
            >表格数据</div>
            <HomeTable />
          </div>
          <div
            className='mt-1 mb-8'
            style={{
              width: frame.width * 2 / 3.1,
              height: frame.height* 1.2 / 3.5,
              border: "none",
              backgroundImage: "linear-gradient(to bottom right #E7F1F9, #EDF5FC), linear-gradient(to bottom right, #FFFFFF, #FFFFFF, #CAD6E5)",
              padding: "1px",
              borderRadius: "5px",
              backgroundClip: "content-box, padding-box",
              textAlign: "left",
              boxShadow: "12px 3px 45px 0px rgba(18,61,101,0.3), -24px -24px 60px 0px rgba(255,255,255,0.6), inset -12px -9px 120px 0px rgba(255,255,255,0.2)",
            }}
          >
            <div 
              className="text-3xl text-[#3E5769] font-[350] leading-10 mt-4 ml-6 mb-1 no-scrollbar"
              style={{
                fontSize: frame.height / 40,
              }}
            >数据图例</div>
            <HomeCharts />
          </div>
        </div>
        <div className='flex flex-col space-y-4'>
          <div
            className=""
            style={{
              width: frame.width / 3.1,
              // height: frame.height * 2 / 3.8,
              height: "min-content",
              border: "none",
              backgroundImage: "linear-gradient(to bottom right #E7F1F9, #EDF5FC), linear-gradient(to bottom right, #FFFFFF, #FFFFFF, #CAD6E5)",
              padding: "1px",
              borderRadius: "5px",
              backgroundClip: "content-box, padding-box",
              textAlign: "left",
              boxShadow: "12px 3px 45px 0px rgba(18,61,101,0.3), -24px -24px 60px 0px rgba(255,255,255,0.6), inset -12px -9px 120px 0px rgba(255,255,255,0.2)",
            }}
          >
            <div 
              className='text-3xl text-[#3E5769] font-[350] leading-10 mt-4 ml-6 mb-2'
              style={{
                fontSize: frame.height / 40,
              }}
            >服务器状态</div>
            <div className="flex flex-col ml-[10%] w-[80%] h-[50%] ">
              <SystemCharts />
            </div>
            <div className='px-8 mb-6'>
              <div
                className='flex flex-row items-center'
                style={{
                  height: "45px",
                  border: "none",
                  backgroundImage: "linear-gradient(#E7F1F9, #EDF5FC),linear-gradient(to bottom right, #FFFFFF, #FFFFFF, #CAD6E5)",
                  padding: "0.5px",
                  borderRadius: "10px",
                  backgroundClip: "content-box,padding-box",
                  textAlign: "left",
                  boxShadow: "8px 2px 32px 0px rgba(18,61,101,0.15), -8px -8px 20px 0px rgba(255,255,255,0.6), inset -4px -3px 40px 0px rgba(255,255,255,0.09)",
                }}
              >
                <div 
                  className='mx-4 font-[350] text-[#7C97AA] flex-grow'
                  style={{
                    fontSize: Math.round(window.outerWidth / 110),
                  }}
                >数据库服务状态</div>
                <div 
                  className='mr-4 text-[#7C97AA] text-xl '
                  style={{
                    fontSize: Math.round(window.outerWidth / 110),
                  }}
                >正常</div>
                <div className='w-[44px] h-[24px] '>
                  <svg className='fill-[#83FF00] stroke-[#CDDDEB] stroke-[4] '>
                    <circle cx={12} cy={12} r={8} />
                  </svg>
                </div>
              </div>
              <div
                className='flex flex-row items-center'
                style={{
                  marginTop: "14px",
                  height: "45px",
                  border: "none",
                  backgroundImage: "linear-gradient(#E7F1F9, #EDF5FC),linear-gradient(to bottom right, #FFFFFF, #FFFFFF, #CAD6E5)",
                  padding: "0.5px",
                  borderRadius: "10px",
                  backgroundClip: "content-box,padding-box",
                  textAlign: "left",
                  boxShadow: "8px 2px 32px 0px rgba(18,61,101,0.15), -8px -8px 20px 0px rgba(255,255,255,0.6), inset -4px -3px 40px 0px rgba(255,255,255,0.09)",
                }}
              >
                <div 
                  className='mx-4 font-[350] text-[#7C97AA] text-xl flex-grow'
                  style={{
                    fontSize: Math.round(window.outerWidth / 110),
                  }}
                >后台服务状态</div>
                <div 
                  className='mr-4 text-[#7C97AA] text-xl '
                  style={{
                    fontSize: Math.round(window.outerWidth / 110),
                  }}
                >拥挤</div>
                <div className='w-[44px] h-[24px] '>
                  <svg className='fill-[#f2ff00] stroke-[#CDDDEB] stroke-[4] '>
                    <circle cx={12} cy={12} r={8} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className=""
            style={{
              width: frame.width / 3.1,
              height: frame.height * 1 / 3.2,
              border: "none",
              backgroundImage: "linear-gradient(to bottom right #E7F1F9, #EDF5FC), linear-gradient(to bottom right, #FFFFFF, #FFFFFF, #CAD6E5)",
              padding: "1px",
              borderRadius: "5px",
              backgroundClip: "content-box, padding-box",
              textAlign: "left",
              boxShadow: "12px 3px 45px 0px rgba(18,61,101,0.3), -24px -24px 60px 0px rgba(255,255,255,0.6), inset -12px -9px 120px 0px rgba(255,255,255,0.2)",
            }}
          >
            <CommandBar />
          </div>
        </div>
      </div>
    </div>

  )
}

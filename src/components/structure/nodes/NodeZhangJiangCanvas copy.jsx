import GasMeter from '../../../static/img/GasMeter.png';
import ElecMeter from '../../../static/img/ElecMeter.png';
import OutputMeter from '../../../static/img/OutputMeter.png';
import UserMeter from '../../../static/img/UserMeter.png';
import React from 'react'
import anime from 'animejs';

export default function NodeZhangJiangCanvas() {
  React.useEffect(() => {
    anime({
      targets: ".cursor",
      easing: "easeOutQuad",
      points:[
        {
          value: '380 70, 390 70, 390 100, 380 100',
          duration: 4000,
        },
        {
          value: '375 70, 405 70, 405 80, 375 80',
          duration: 10,
        },
        {
          value:
            function (el, i) {
              var way = i % 3;
              switch (way) {
                case 0: return '375 0, 405 0, 405 10, 375 10';
                case 1: return '375 120, 405 120, 405 130, 375 130';
                case 2: return '375 240, 405 240, 405 250, 375 250';
                default: return '375 0, 405 0, 405 10, 375 10';
              }
            },
          duration: 1000,
        },
        {
          value:
            function (el, i) {
              var way = i % 3;
              switch (way) {
                case 0: return '400 0, 410 0, 410 30, 400 30';
                case 1: return '400 120, 410 120, 410 150, 400 150';
                case 2: return '400 240, 410 240, 410 270, 400 270';
                default: return '400 0, 410 0, 410 30, 400 30';
              }
            },
          duration: 10,
        },
        {
          value:
            function (el, i) {
              var way = i % 3;
              switch (way) {
                case 0: return '470 0, 480 0, 480 30, 470 30';
                case 1: return '470 120, 480 120, 480 150, 470 150';
                case 2: return '470 240, 480 240, 480 270, 470 270';
                default: return '470 0, 480 0, 480 30, 470 30';
              }
            },
          duration: 1000,
        }
      ],
      delay: anime.stagger(500),
      loop: true,
    })
  }, []);
  let cursors = [];

  for (var i = 0; i < 12; i++) {
    cursors.push(
      <svg className="absolute top-[55px] w-full h-full " >
        <polyline  radius="10%" className='cursor fill-yellow-300 blur-[0.5px] stroke-slate-200' points="0 70, 10 70, 10 100, 0 100" />
      </svg>
    );
  }
  return (
    <div className="relative w-[800px] h-[600px] mt-[20px]">
      <img src={GasMeter} className="w-[100px] h-[120px] absolute" />
      {/* <img src={ElecMeter} className="w-[100px] absolute" /> */}
      <img src={OutputMeter} className="w-[100px] h-[100px] absolute left-[200px] top-[20px]" />
      <img src={UserMeter} className="w-[100px] h-[80px] absolute left-[490px] top-[40px]" />
      <img src={UserMeter} className="w-[100px] h-[80px] absolute left-[490px] top-[160px]" />
      <img src={UserMeter} className="w-[100px] h-[80px] absolute left-[490px] top-[280px]" />
      <svg className="w-full h-full absolute top-[60px] blur-[0.3px] stroke-blue-400">
        <rect className="fill-blue-300" x="0" y="70" rx="5" ry="5" width="400px" height="20px" />
        <rect className="fill-blue-300" x="380" y="0" rx="5" ry="5" width="100px" height="20px" />
        <rect className="fill-blue-300" x="380" y="120" rx="5" ry="5" width="100px" height="20px" />
        <rect className="fill-blue-300" x="380" y="240" rx="5" ry="5" width="100px" height="20px" />
        <rect className="fill-blue-300" x="380" y="0" rx="5" ry="5" width="20px" height="260px" />

      </svg>
      <div className='absolute  w-full h-full'>
        {
          cursors.map((cursor, index) => {
            return cursor;})
        }
      </div>
    </div>
  )
}

import React, {useEffect, useState} from 'react';
import Charts from './Charts';
import './ChartCard.css'

export default function ChartCard( props ) {
    const [edata, setEdata] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [range, setRange] = useState(30);

    useEffect( () => {
        fetch("http://192.168.0.105:8082/EnergyStationData/" + props.typeData + "?limit=" + range, { method: 'GET' })
            .then(resonse => resonse.json())
            .then(data => {
                setEdata(data.data);
                setIsLoading(false);
            })
            .catch(error => { console.log(error);});
    },
    // eslint-disable-next-line
    [range]);
    return (
        <div>
            <div id={"chartContainer"+props.typeData} style={{marginBottom:"20px"}}>
                {
                    isLoading 
                    ? <div className="text-sm">加载中......</div>
                    : <Charts myOption="" edata={edata} className="h-full w-full"/>
                }
            </div>
            <div className="grid grid-cols-12 grid-rows-6 gap-y-6">
                <div className="col-span-5 row-span-1 text-sm text-center">
                    数据范围：{range}
                </div>
                <input type="range" min="1" max="120" value={range} onChange={(value)=>{setRange(value.target.value)}} className="row-span-1 mx-1 col-start-2 col-span-11"/>
            </div>
        </div>
    );
}
 
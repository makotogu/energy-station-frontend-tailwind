import React, {useEffect, useState} from 'react';
import Charts from './Charts';
import './ChartCard.css'
import { useHistory } from 'react-router-dom';

export default function ChartCard( props ) {
    const [edata, setEdata] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [range, setRange] = useState(30);
    const history = useHistory();
    useEffect( () => {
        if (localStorage.getItem('token')) {
            fetch("http://localhost:8888/data/" + props.typeData + "?limit=" + range, { method: 'GET', headers: { 'token': localStorage.getItem('token') } })
                .then(response => {
                    if (response.status === 401) {
                        alert("请登陆后访问");
                        setTimeout(() => { history.push("/login") }, 200);
                        
                    }
                    return response.json()
                })
                .then(data => {
                    setEdata(data.data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error(error.toString());
                });
        }
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
            <div className="grid grid-cols-12 grid-rows-6 gap-y-6 h-20">
                <div className="col-span-5 row-span-1 row-span-2 text-sm text-center">
                    数据范围：{range}
                </div>
                <input type="range" min="1" max="120" value={range} onChange={(value)=>{setRange(value.target.value)}} className="row-start-3 mx-1 col-start-2 col-span-11"/>
            </div>
        </div>
    );
}
 
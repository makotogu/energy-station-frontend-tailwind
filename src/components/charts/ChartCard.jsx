import React, {useEffect, useState} from 'react';
import Charts from './Charts';

export default function ChartCard( props ) {
    const [edata, setEdata] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect( () => {
        fetch("http://192.168.0.105:81/EnergyStationData/" + props.typeData + "?limit=" + 90, { method: 'GET' })
            .then(resonse => resonse.json())
            .then(data => {
                setEdata(data.data);
                setIsLoading(false);
            });
    }, []);
    useEffect(() => {
        setTimeout(() => {
            fetch("http://192.168.0.105:81/EnergyStationData/" + props.typeData + "?limit=" + 90, { method: 'GET' })
                .then(resonse => resonse.json())
                .then(data => {
                    setEdata(data.data);
                    setIsLoading(false);
                });
        }, 30*1000);
    }, []);

    return (
        <div id={"chartContainer"+props.typeData} style={{marginBottom:"20px"}}>
            {
                isLoading 
                ? <div>daadsd</div>
                : <Charts myOption="" edata={edata} className="h-full w-full"/>
            }
        </div>
    );
}

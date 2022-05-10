import { CircularProgress } from '@mui/material';
import React, { useState } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Brush, Line, LineChart } from 'recharts'

const createData = (XAxis, node1, node2, node3) => {
    return { XAxis, node1, node2, node3 };
}

export default function HomeCharts() {
    const [data, setData] = useState({
        tempreature: [],
        battery: [],
        pressure: [],
    });

    const [isLoaded, setIsLoaded] = useState(false);

    React.useEffect(() => {
        var temperatureSets = [];
        var batterySets = [];
        var pressureSets = [];
        fetch(process.env.REACT_APP_URL + "/data/charts/ZHANG_JIANG", {
            method: 'GET',
            headers: {
                'token': localStorage.getItem('token')
            }
        }).then(res => res.json())
            .then(data => {
                var dataSets = data.data;
                var node_1_Sets = dataSets[0];
                var node_2_Sets = dataSets[1];
                var node_3_Sets = dataSets[2];
                for (var i = 0; i < node_1_Sets.length; i++) {
                    temperatureSets.push(createData(i + 1, node_1_Sets[i].firstSamplingPointTemperature, node_2_Sets[i].firstSamplingPointTemperature, node_3_Sets[i].firstSamplingPointTemperature));
                    batterySets.push(createData(i + 1, node_1_Sets[i].batteryVoltage, node_2_Sets[i].batteryVoltage, node_3_Sets[i].batteryVoltage));
                    pressureSets.push(createData(i + 1, node_1_Sets[i].firstSamplingPointAtmosphericPressure, node_2_Sets[i].firstSamplingPointAtmosphericPressure, node_3_Sets[i].firstSamplingPointAtmosphericPressure));
                }
                console.log(temperatureSets);
                setData({
                    tempreature: temperatureSets,
                    battery: batterySets,
                    pressure: pressureSets,
                });
                setIsLoaded(true);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div
            className='flex flex-row items-center justify-center' 
            style={{
            width: "95%",
            height: "80%",
        }}>
            {
                isLoaded
                    ? 
                    <ResponsiveContainer width={"100%"} height={"90%"}>
                        <LineChart data={data.tempreature}
                            margin={{ top: 10, right: 10, left: 20, bottom: 10 }}>
                            <XAxis dataKey="XAxis" />
                            <YAxis unit={" ℃"} domain={['dataMin-1', 'dataMax+1']} />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Line type="monotone" dataKey="node1" stroke="#8884d8" strokeDasharray={"5 2"} dot={false} />
                            <Line type="monotone" dataKey="node2" stroke="#82ca9d" strokeDasharray={"5 2"} dot={false} />
                            <Line type="monotone" dataKey="node3" stroke="#68aeff" strokeDasharray={"5 2"} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                    : <CircularProgress />
            }
        </div>
    )
}

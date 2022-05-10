import { CircularProgress } from '@mui/material';
import React, { useState } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Brush, Legend } from 'recharts'

const createData = (XAxis, node1, node2, node3) => {
    return { XAxis, node1, node2, node3 };
}

export default function NodeCharts({station}) {
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
        fetch(process.env.REACT_APP_URL + "/data/charts/"+station, {
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
        <div style={{
            width: window.innerWidth - 300,
            height: window.innerHeight - 300,
            marginLeft: "20px",
            paddingLeft: "10px",
        }}>
            {
                isLoaded
                    ? <ResponsiveContainer width={"100%"} height={"33%"}>
                        <AreaChart data={data.tempreature}
                            margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorNode1" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorNode2" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorNode3" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#68aeff" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#68aeff" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="XAxis" />
                            <YAxis unit={" ℃"} domain={['dataMin-2', 'dataMax+1']} />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="node1" stroke="#8884d8" fillOpacity={1} fill="url(#colorNode1)" />
                            <Area type="monotone" dataKey="node2" stroke="#82ca9d" fillOpacity={1} fill="url(#colorNode2)" />
                            <Area type="monotone" dataKey="node3" stroke="#68aeff" fillOpacity={1} fill="url(#colorNode3)" />
                            <Brush height={20} />
                        </AreaChart>
                    </ResponsiveContainer>
                    : <CircularProgress />
            }
            {
                isLoaded
                    ? <ResponsiveContainer width={"100%"} height={"33%"}>
                        <AreaChart data={data.battery}
                            margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorNode1" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorNode2" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorNode3" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#68aeff" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#68aeff" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="XAxis" />
                            <YAxis unit={" V"} domain={['dataMin-2', 'dataMax+1']} />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="node1" stroke="#8884d8" fillOpacity={1} fill="url(#colorNode1)" />
                            <Area type="monotone" dataKey="node2" stroke="#82ca9d" fillOpacity={1} fill="url(#colorNode2)" />
                            <Area type="monotone" dataKey="node3" stroke="#68aeff" fillOpacity={1} fill="url(#colorNode3)" />
                            <Brush height={20} />
                        </AreaChart>
                    </ResponsiveContainer>
                    : <CircularProgress />
            }
            {
                isLoaded
                    ? <ResponsiveContainer width={"100%"} height={"33%"}>
                        <AreaChart data={data.pressure}
                            margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorNode1" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorNode2" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorNode3" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#68aeff" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#68aeff" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="XAxis" />
                            <YAxis unit={"Pa"} domain={['dataMin-2', 'dataMax+1']} />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="node1" stroke="#8884d8" fillOpacity={1} fill="url(#colorNode1)" />
                            <Area type="monotone" dataKey="node2" stroke="#82ca9d" fillOpacity={1} fill="url(#colorNode2)" />
                            <Area type="monotone" dataKey="node3" stroke="#68aeff" fillOpacity={1} fill="url(#colorNode3)" />
                            <Brush height={20}/>
                        </AreaChart>
                    </ResponsiveContainer>
                    : <CircularProgress />
            }

        </div>
    )
}

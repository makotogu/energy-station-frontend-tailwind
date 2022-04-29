import React, { useEffect, useState } from 'react';
import { RadialBar, Legend, ResponsiveContainer, Tooltip, BarChart, XAxis, YAxis, CartesianGrid, Bar, ComposedChart } from 'recharts';
import LoadingAnime from '../anime/LoadingAnime';

const colorSet = ['#8884d8', '#83a6ed', '#0088FE', '#8dd1e1', '#00C49F', '#d0ed57', '#FFBB28', '#ffc658', '#FF8042'];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

function background() {
    return <div className='bg-gray-900'></div>
}

export default function SystemCharts() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        var tempData = [];
        setIsLoading(true);
        fetch("http://192.168.0.105:8888/system/systemData", {
            method: "GET",
        }).then(res => res.json())
            .then(data => {
                console.log(data.data);
                data.data.map((item, index) => {
                    tempData.push({ name: item.columnKey, value: Math.round(item.value * 1000) / 10, fill: colorSet[index] })
                })
                console.log(tempData);
                setData(tempData);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])


    return (
        <div className='w-full h-full'>
            {isLoading
                ? <LoadingAnime/>
                : <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        layout="vertical"
                        data={data}
                        margin={{
                            top: 10,
                            right: 20,
                            bottom: 20,
                            left: 30,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis type="number" unit={"%"} domain={[0, 100]} />
                        <YAxis dataKey="name" type="category" scale="band" />
                        <Tooltip />
                        <Bar dataKey="value" barSize={20} background={{ fill: "#eee" }} />
                    </ComposedChart>
                </ResponsiveContainer>
            }

        </div>
    );
}

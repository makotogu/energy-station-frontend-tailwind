import React, { useEffect } from 'react';
import * as echarts from 'echarts';

export default function Charts(props) {
    let option = {
        title: {
            text: props.title,
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: props.edata.legend
        },
        toolbox: {
            show: true,
            future: {
                dataZoom: {},
                dataView: {
                    readOnly: false,
                },
                magicType: {
                    type: ['line', 'bar']
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: props.edata.xseries
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: props.edata.series
    };
    if (props.option) {
        option = props.option;
    } 
    useEffect( () => {
        let myChart = echarts.init(document.getElementById('myChart'));
        myChart.setOption(option);
        myChart.resize();
    }, [props])
    return (
    <>
          <div id="myChart" style={{height: props.style.height , width: props.style.width}} className=""></div>
    </>
);}

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoadingAnime from '../anime/LoadingAnime';


const tableHeader = [
    "环境采样节点ID", "节点类型", "结点状态", "电池电压", "数据点数",
    "采样点数据长度", "首个数据采集时间", "采集间隔", "第一采集点温度", "第一采集点湿度",
    "第一采集点大气压", "第一采集点风速", "第一采集点风向", "接受时间", "软件版本号"
];
const tableHeaderCode = [
    "collect_node", "node_type", "node_status", "battery_voltage", "data_number",
    "data_length", "first_data_collection_time", "collect_interval", "first_sampling_point_temperature", "first_sampling_point_humidity",
    "first_sampling_point_atmospheric_pressure", "first_sampling_point_wind_speed", "first_sampling_point_wind_direction", "receive_time", "software_version_number"
];
const selectItems = [];
for (var i = 0; i < tableHeader.length; i++) {
    selectItems.push({
        id: i + 1,
        name: tableHeader[i],
        tableHeaderCode: tableHeaderCode[i]
    });
}

export default function HomeTable(props) {
    const [tableHeaders, setTableHeaders] = useState([]);
    const history = useHistory();
    const [tableDatas, setTableDatas] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [totalPages, setTotalPages] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [pagesNav, setPagesNav] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [target, setTarget] = useState("all");
    const [orderTarget, setOrderTarget] = useState("all");
    const [order, setOrder] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [selected, setSelected] = useState(selectItems[0]);
    // eslint-disable-next-line no-unused-vars
    const [searchContent, setSearchContent] = useState("none");

    useEffect(() => {
        var size = Math.round(window.innerHeight/3/75);
        var tempHeaders = [];
        var tempPages = []
        tempPages.push("doubleLeft");
        tempPages.push("left")
        for (var i = 0; i < tableHeader.length; i++) {
            tempHeaders.push({ "value": tableHeader[i], "code": tableHeaderCode[i] });
        }
        setTableHeaders(tempHeaders);
        fetch(process.env.REACT_APP_URL + "/data/query/" + currentPage + "/" + size + "?target=" + target + "&orderTarget=" + orderTarget + "&order=" + order + "&key=" + searchContent, {
            method: "GET",
            headers: {
                "token": localStorage.getItem("token")
            }
        }).then(response => {
            if (response.status === 401) {
                // alert("登陆已失效，请登陆后访问");
                setTimeout(() => { history.push("/login") }, 200);
            }
            return response.json()
        }).then((data) => {
            setTableDatas(data.data.records);
            setTotalPages(data.data.pages);
            for (var i = 0; i < data.data.pages; i++) {
                if (data.data.pages >= 7) {
                    if (Math.abs(currentPage - (i + 1)) <= 2) {
                        if (i + 1 === currentPage) {
                            tempPages.push("currentPage");
                        } else {
                            tempPages.push(i + 1);
                        }
                    } else if (Math.abs(currentPage - (i + 1)) === 3) {
                        tempPages.push("...");
                    }
                } else {
                    if (i + 1 === currentPage) {
                        tempPages.push("currentPage");
                    } else {
                        tempPages.push(i + 1);
                    }
                }
            }
            tempPages.push("right");
            tempPages.push("doubleRight");
            setPagesNav(tempPages);
            if (isLoading) {
                setIsLoading(false);
            }
        }).catch((error) => {
            console.log(error);
        });
        // eslint-disable-next-line 
    }, [currentPage, order, selected]);

    // useEffect(() => {
    //     if (isLoading) {
    //         setIsLoading(false);
    //     }
    // },[isLoading])

    return (
        <div className='overflow-scroll small-scrollbar'>
            <table className="w-[1800px] border-collapse overflow-y-scroll overflow-x-scroll small-scrollbar">
                <thead>
                    <tr className="table-head">
                        {tableHeaders.map((data, index) => {
                            return (
                                <th className="table-title">
                                    <div className='table-title-cell'>
                                        <button className="mx-2"
                                            onClick={() => {
                                                if (target !== data.code) {
                                                    setOrder(true);
                                                } else {
                                                    setOrder(!order);
                                                }
                                                setOrderTarget(data.code);
                                            }} >
                                            {data.value}
                                        </button>
                                    </div>
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableDatas.map((data, index) => {
                        return (
                            <tr className="table-content ">
                                <td className="table-data">
                                    <div className='table-data-cell'>
                                        {data.collectNode}
                                    </div>
                                </td>
                                <td className="table-data">
                                    <div className='table-data-cell'>
                                        {data.nodeType}
                                    </div>
                                </td>
                                <td className="table-data">
                                    <div className='table-data-cell'>
                                        {data.nodeStatus}
                                    </div>
                                </td>
                                <td className="table-data">
                                    <div className='table-data-cell'>
                                        {data.batteryVoltage}
                                    </div>
                                </td>
                                <td className="table-data">
                                    <div className='table-data-cell'>
                                        {data.dataNumber}
                                    </div>
                                </td>
                                <td className="table-data">
                                    <div className='table-data-cell'>
                                        {data.dataLength}
                                    </div>
                                </td>
                                <td className="table-data">
                                    <div className='table-data-cell'>
                                        {data.firstDataCollectionTime}
                                    </div>
                                </td>
                                <td className="table-data">
                                    <div className='table-data-cell'>
                                        {data.collectInterval}
                                    </div>
                                </td>
                                <td className="table-data">
                                    <div className='table-data-cell'>
                                        {data.firstSamplingPointTemperature}
                                    </div>
                                </td>
                                <td className="table-data">
                                    <div className='table-data-cell'>
                                        {data.firstSamplingPointHumidity}
                                    </div>
                                </td>
                                <td className="table-data">
                                    <div className='table-data-cell'>
                                        {data.firstSamplingPointAtmosphericPressure}
                                    </div>
                                </td>
                                <td className="table-data">
                                    <div className='table-data-cell'>
                                        {data.firstSamplingPointWindSpeed}
                                    </div>
                                </td>
                                <td className="table-data">
                                    <div className='table-data-cell'>
                                        {data.firstSamplingPointWindDirection}
                                    </div>
                                </td>
                                <td className="table-data">
                                    <div className='table-data-cell'>
                                        {data.receiveTime}
                                    </div>
                                </td>
                                <td className="table-data">
                                    <div className='table-data-cell'>
                                        {data.softwareVersionNumber}
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="container w-11/12 mt-2 ml-24 pt-2 leading-loose">
                {isLoading ? (<div className=""><LoadingAnime /></div>) : null}
            </div>
        </div>

    )
}

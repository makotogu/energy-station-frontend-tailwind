import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoadingAnime from '../anime/LoadingAnime';
import "./FullTable.css";

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
for(var i = 0; i < tableHeader.length; i++) {
    selectItems.push({
        id: i+1,
        name: tableHeader[i],
        tableHeaderCode: tableHeaderCode[i]
    });
}

export default function HomeTable(props) {
    const [tableHeaders, setTableHeaders] = useState([]);
    const history = useHistory();
    const [tableDatas, setTableDatas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [pagesNav, setPagesNav] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [target, setTarget] = useState("all");
    const [orderTarget, setOrderTarget] = useState("all");
    const [order, setOrder] = useState(true);
    const [selected, setSelected] = useState(selectItems[0])
    const [searchContent, setSearchContent] = useState("none");

    useEffect(() => {
        var size = 4;
        var tempHeaders = [];
        var tempPages = []
        tempPages.push("doubleLeft");
        tempPages.push("left")
        for (var i = 0; i < tableHeader.length; i++) {
            tempHeaders.push({ "value": tableHeader[i], "code": tableHeaderCode[i] });
        }
        setTableHeaders(tempHeaders);
        fetch("http://192.168.0.105:8888/data/query/" + currentPage + "/" + size + "?target=" + target + "&orderTarget=" + orderTarget + "&order=" + order + "&key="+ searchContent, {
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
        <div>
            <table className="table-auto border-collapse w-full  min-w-[1024px] 2xl:min-w-[1500px] overflow-y-scroll overflow-x-scroll">
                <thead>
                    <tr className="bg-blue-400/50 leading-loose text-sm 2xl:text-base shadow-xl dark:bg-orange-500/80">
                        {tableHeaders.map((data, index) => {
                            return (
                                <th className="hover:bg-blue-100/50 border-2 border-slate-100 dark:border-gray-500/75">
                                    <button className="dark:text-gray-100 mx-2"
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
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableDatas.map((data, index) => {
                        return (
                            <tr className="text-center border-b border-l border-zinc-100 dark:border-gray-500 leading-loose hover:bg-blue-100/25 odd:bg-slate-200 dark:hover:bg-orange-300/25 dark:odd:bg-orange-100/25  ">
                                <td className="table-data">{data.collectNode}</td>
                                <td className="table-data">{data.nodeType}</td>
                                <td className="table-data">{data.nodeStatus}</td>
                                <td className="table-data">{data.batteryVoltage}</td>
                                <td className="table-data">{data.dataNumber}</td>
                                <td className="table-data">{data.dataLength}</td>
                                <td className="table-data">{data.firstDataCollectionTime}</td>
                                <td className="table-data">{data.collectInterval}</td>
                                <td className="table-data">{data.firstSamplingPointTemperature}</td>
                                <td className="table-data">{data.firstSamplingPointHumidity}</td>
                                <td className="table-data">{data.firstSamplingPointAtmosphericPressure}</td>
                                <td className="table-data">{data.firstSamplingPointWindSpeed}</td>
                                <td className="table-data">{data.firstSamplingPointWindDirection}</td>
                                <td className="table-data">{data.receiveTime}</td>
                                <td className="table-data">{data.softwareVersionNumber}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="container w-11/12 mt-2 ml-24 pt-2 leading-loose">
                {isLoading ? (<div className="dark:text-gray-100"><LoadingAnime /></div>) : null}
            </div>
        </div>

    )
}

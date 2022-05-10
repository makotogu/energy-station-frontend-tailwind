import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon, SelectorIcon } from '@heroicons/react/solid';
import { ArchiveIcon } from '@heroicons/react/outline';
import React, { useState, useEffect, Fragment } from 'react';
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
for(var i = 0; i < tableHeader.length; i++) {
    selectItems.push({
        id: i+1,
        name: tableHeader[i],
        tableHeaderCode: tableHeaderCode[i]
    });
}

export default function FullTable(props) {
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
        var size = window.innerHeight > 1000 ? Math.round(window.innerHeight / 120) : Math.round(window.innerHeight / 140);
        var tempHeaders = [];
        var tempPages = []
        tempPages.push("doubleLeft");
        tempPages.push("left")
        for (var i = 0; i < tableHeader.length; i++) {
            tempHeaders.push({ "value": tableHeader[i], "code": tableHeaderCode[i] });
        }
        setTableHeaders(tempHeaders);
        fetch(process.env.REACT_APP_URL+"/data/query/" + currentPage + "/" + size + "?target=" + target + "&orderTarget=" + orderTarget + "&order=" + order + "&key="+ searchContent, {
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

    useEffect(() => {
        if (isLoading) {
            setIsLoading(false);
        }
    },[isLoading])

    const handleSearch = () => {
        var searchBox =  document.getElementById("searchBox").value;
        console.log(searchBox);
        if (target === "all" && searchBox) {
            alert("请选择搜索内容，再进行搜索")
            return;
        }
        setIsLoading(true);
        var size = window.innerHeight > 1000 ? Math.round(window.innerHeight / 120) : Math.round(window.innerHeight / 140);
        var tempPages = []
        fetch(process.env.REACT_APP_URL+"/data/query/" + currentPage + "/" + size + "?target=" + target + "&order=" + false + "&key=" + searchContent, {
            method: "GET",
            headers: {
                "token": localStorage.getItem("token")
            }
        }).then(response => {
            if (response.status === 401) {
                alert("登陆已失效，请登陆后访问");
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
            if (isLoading) {
                setIsLoading(false);
            }
        });
    }

    return (
        <div>
            <div className="relative flex basis-1/12 h-max ml-3 mb-4 mt-5">
                <div className="w-48">
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-blue-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                { target === "all" ? <span className="block truncate">请选择内容</span> : <span className="block truncate">{selected.name}</span> }
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <SelectorIcon
                                        className="w-5 h-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white z-20 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {selectItems.map((item, itemIdx) => (
                                        <Listbox.Option
                                            key={itemIdx}
                                            className={({ active }) =>
                                                `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-blue-800 bg-blue-100' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                            {({ selected }) => {
                                                if (selected) {
                                                    setTarget(item.tableHeaderCode);
                                                }
                                                return (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                            {item.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600 ">
                                                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                </div>

                <input id="searchBox" onChange={(e) => setSearchContent(e.target.value)} type="text" className="transition transform ease-in-out delay-75 w-54 h-9 mt-1 ml-4 pl-2 rounded-lg ring-1 bg-transparent ring-blue-200/75 focus:outline-none focus:ring-blue-200 focus:shadow-md  focus:shadow-sky-300/25 focus:bg-blue-50/10 focus:scale-110 " placeholder="搜索数据内容" />
                <button 
                    onClick={() => {handleSearch()}} 
                    className="transition transform delay-[25] flex items-center justify-center h-10 mt-1 ml-6 font-medium ring-1 ring-inset hover:scale-110 "
                    style={{
                        border: "none",
                        backgroundImage: "linear-gradient(#E7F1F9, #EDF5FC),linear-gradient(to bottom right, #FFFFFF, #FFFFFF, #CAD6E5)",
                        padding: "0.5px",
                        borderRadius: "20px",
                        backgroundClip: "content-box,padding-box",
                        textAlign: "left",
                        boxShadow: "8px 2px 32px 0px rgba(18,61,101,0.15), -8px -8px 20px 0px rgba(255,255,255,0.6), inset -4px -3px 40px 0px rgba(255,255,255,0.09)",
                    }} 
                >
                    <div className='mx-4'>搜索</div>
                </button>
                <button 
                className="absolute flex right-16 bg-blue-200 rounded-lg" 
                style={{
                    border: "none",
                    backgroundImage: "linear-gradient(#E7F1F9, #EDF5FC),linear-gradient(to bottom right, #FFFFFF, #FFFFFF, #CAD6E5)",
                    padding: "0.5px",
                    borderRadius: "20px",
                    backgroundClip: "content-box,padding-box",
                    textAlign: "left",
                    boxShadow: "8px 2px 32px 0px rgba(18,61,101,0.15), -8px -8px 20px 0px rgba(255,255,255,0.6), inset -4px -3px 40px 0px rgba(255,255,255,0.09)",
                }} 
                onClick={() => {window.location.reload()}}>
                    <div className='m-4 flex flex-row'>
                        <ArchiveIcon className="w-5 h-5 my-auto"/><div className="text-xl">恢复</div>
                    </div>
                </button>
            </div>
            <div style={{width:window.innerWidth-266, paddingLeft:"20px", paddingRight:"20px"}}>
                <div className='overflow-scroll small-scrollbar'>
                    <table className="border-collapse w-[1800px] overflow-y-scroll overflow-x-scroll small-scrollbar ">
                        <thead>
                            <tr className="table-head">
                                {tableHeaders.map((data, index) => {
                                    return (
                                        <th className="table-head">
                                            <div className='table-title-cell'>
                                                <button className=" mx-2"
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
                </div>
            </div>
            <div className="container w-11/12 mt-2 ml-24 pt-2 leading-loose">
                {isLoading ? (<div className="dark:text-gray-100"><LoadingAnime /></div>) :
                    pagesNav.map(nav => {
                        switch (nav) {
                            case "doubleLeft": return (<button><ChevronDoubleLeftIcon onClick={() => setCurrentPage(1)} className="w-4 h-4 " /></button>);
                            case "left": return (currentPage === 1 ? <button><ChevronLeftIcon className="w-4 h-4 mx-1 text-slate-400" /></button> : <button><ChevronLeftIcon onClick={() => setCurrentPage(currentPage - 1)} className="w-4 mx-1 " /></button>);
                            case "right": return (currentPage === totalPages ? <button><ChevronRightIcon className="w-4 h-4 mx-1 text-slate-400" /></button> : <button><ChevronRightIcon onClick={() => setCurrentPage(currentPage + 1)} className="w-4 mx-1 " /></button>);
                            case "doubleRight": return (<button><ChevronDoubleRightIcon onClick={() => setCurrentPage(totalPages)} className="w-4 h-4 " /></button>);
                            case "currentPage": return (<button className="transition transform ease-in-out delay-75 mx-3 text-blue-400 font-medium text-xl scale-150 -translate-y-1">{currentPage}</button>);
                            case "...": return (<button className="">{nav}</button>)
                            default: return (<button onClick={() => setCurrentPage(nav)} className="transition transform ease-in-out delay-75 mx-1 font-thin text-xl scale-100 ">{nav}</button>);
                        }
                    })}
                <div className="inline-block ml-8 text-xl ">共{totalPages}页</div>
            </div>
        </div>

    )
}

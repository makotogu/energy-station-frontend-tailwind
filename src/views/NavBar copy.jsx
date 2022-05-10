import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import HomeIcon from '../static/icons/HomeIcon.png';
import WatchIcon from '../static/icons/WatchIcon.png';
import TableIcon from '../static/icons/TableIcon.png';
import NodeIcon from '../static/icons/NodeIcon.png';
import { Divider } from '@mui/material';


export default function NavBar() {
    const [isCollapse, setIsCollapsed] = useState(false);
    const [navItems, setNavItems] = useState([]);
    const [nav, setNav] = useState([]);
    
    // useEffect(() => {
    //     setNavItems(Array.from(document.getElementsByClassName("nav-item")));
    //     setNav(Array.from(document.getElementsByClassName("nav")));
    // },[]);

    // useEffect (()=>{
    //     if (isCollapse) {
    //         navItems.forEach((element) => { element.classList.remove("block") });
    //         navItems.forEach((element) => { element.classList.add("hidden") });
    //         setTimeout(() => {
    //             nav.forEach((element) => { element.classList.add("sm:w-20") });
    //             nav.forEach((element) => { element.classList.remove("sm:w-44") });
    //         }, 120);
    //     } else {
    //         nav.forEach(element => { element.classList.remove("sm:w-20") });
    //         nav.forEach(element => { element.classList.add("sm:w-44") });
    //         setTimeout(() => {
    //             navItems.forEach((element) => { element.classList.add("block") });
    //             navItems.forEach((element) => { element.classList.remove("hidden") });
    //         }, 120)
    //     }
    // }, [isCollapse, nav, navItems]);
    return (
        // <div className="nav sm:w-44 " onMouseEnter={() => { setIsCollapsed(false) }} onMouseLeave={() => { setIsCollapsed(true) }}>
        <div className="nav">
            <Link to="/" className="flex flex-row items-center justify-start mb-2">
                <div className="block pt-[4px] pl-[20px]">
                    <div className="text-3xl font-[300] leading-8 dark:text-gray-50 tracking-wider dark:font-medium">能源站监控</div>
                    <div className="text-lg font-[150] leading-tight dark:text-gray-50 text-blue-600 tracking-wider dark:font-medium">&nbsp;Energy Station</div>
                </div>
            </Link>
            <Divider/>
            <Link to="/" className="nav-item-group group">
                <img src={HomeIcon} className="w-[36px] h-[36px] group-hover:animate-pulse ml-4" alt="主页"/>
                <Transition
                    show={!isCollapse}
                    enter="transition-opacity ease-linear duration-[100ms]"
                    enterFrom="transform opacity-0"
                    enterTo="transform opacity-100"
                    leave="transition-opacity ease-linear duration-[100ms]"
                    leaveFrom="transform opacity-100"
                    leaveTo="transform opacity-0"
                >
                    <div className="nav-item">主页</div>
                </Transition>
            </Link>
            <Divider />
            <Link to="/monitor" className="nav-item-group group">
                <img src={WatchIcon} className="w-[36px] h-[36px] group-hover:animate-pulse ml-4" alt="监控"/>
                <Transition
                    show={!isCollapse}
                    enter="transition-opacity ease-linear duration-[500ms]"
                    enterFrom="transform opacity-0"
                    enterTo="transform opacity-100"
                    leave="transition-opacity ease-linear duration-[100ms]"
                    leaveFrom="transform opacity-100"
                    leaveTo="transform opacity-0"
                >
                    <div className="nav-item">监控</div>
                </Transition>
            </Link>
            <Divider />
            <Link to="/table" className="nav-item-group group">
                <img src={TableIcon} className="w-[36px] h-[36px] group-hover:animate-pulse ml-4" alt="表格" />
                <Transition
                    show={!isCollapse}
                    enter="transition-opacity ease-linear duration-[100ms]"
                    enterFrom="transform opacity-0"
                    enterTo="transform opacity-100"
                    leave="transition-opacity ease-linear duration-[100ms]"
                    leaveFrom="transform opacity-100"
                    leaveTo="transform opacity-0"
                >
                    <div className="nav-item">表格</div>
                </Transition>
            </Link>
            <Divider/>
            <Link to="/node" className="nav-item-group group">
                <img src={NodeIcon} className="w-[36px] h-[36px] group-hover:animate-pulse ml-4" alt="节点" />
                <Transition
                    show={!isCollapse}
                    enter="transition-opacity ease-linear duration-[500ms]"
                    enterFrom="transform opacity-0"
                    enterTo="transform opacity-100"
                    leave="transition-opacity ease-linear duration-[100ms]"
                    leaveFrom="transform opacity-100"
                    leaveTo="transform opacity-0"
                >
                    <div className="nav-item">节点</div>
                </Transition>
            </Link>

    </div>
    )
}

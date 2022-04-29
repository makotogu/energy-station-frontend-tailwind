import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { CogIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { HomeIcon, LocationMarkerIcon, TableIcon } from '@heroicons/react/outline';
import { GpsFixedOutlined } from '@mui/icons-material';
import { Chip, Divider, Paper } from '@mui/material';


export default function NavBar() {
    const [isCollapse, setIsCollapsed] = useState(true);
    const [navItems, setNavItems] = useState([]);
    const [nav, setNav] = useState([]);
    
    useEffect(() => {
        setNavItems(Array.from(document.getElementsByClassName("nav-item")));
        setNav(Array.from(document.getElementsByClassName("nav")));
    },[]);

    useEffect (()=>{
        if (isCollapse) {
            navItems.forEach((element) => { element.classList.remove("block") });
            navItems.forEach((element) => { element.classList.add("hidden") });
            setTimeout(() => {
                nav.forEach((element) => { element.classList.add("sm:w-20") });
                nav.forEach((element) => { element.classList.remove("sm:w-44") });
            }, 120);
        } else {
            nav.forEach(element => { element.classList.remove("sm:w-20") });
            nav.forEach(element => { element.classList.add("sm:w-44") });
            setTimeout(() => {
                navItems.forEach((element) => { element.classList.add("block") });
                navItems.forEach((element) => { element.classList.remove("hidden") });
            }, 120)
        }
    }, [isCollapse, nav, navItems]);
    return (
        <div className="nav sm:w-44 " onMouseEnter={() => {setIsCollapsed(false)}} onMouseLeave={() => {setIsCollapsed(true)}}>

            <Link to="/" className="nav-item-group group">
                <HomeIcon className="nav-item-icon group-hover:animate-wiggle" />
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
            <Divider textAlign="right" >
                <div className="text-xs leading-tight">&nbsp;监控</div>
            </Divider>
            <Link to="/monitor" className="nav-item-group group">
                <CogIcon className="nav-item-icon group-hover:animate-spinSlow" />
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
            <Divider textAlign="right" >
                <div className="text-xs leading-tight">&nbsp;数据</div>
            </Divider>

            <Link to="/table" className="nav-item-group group">
                <TableIcon className="nav-item-icon group-hover:animate-wiggle" />
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
            <Link to="/node" className="nav-item-group group">
                <LocationMarkerIcon className="nav-item-icon group-hover:animate-wiggle" />
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

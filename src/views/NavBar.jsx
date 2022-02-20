import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { ChartBarIcon, CogIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import './NavBar.css'


export default function NavBar() {
    const [isCollapse, setIsCollapsed] = useState(false);
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
                nav.forEach((element) => { element.classList.add("sm:w-12") });
                nav.forEach((element) => { element.classList.remove("sm:w-36") });
            }, 120);
        } else {
            nav.forEach(element => { element.classList.remove("sm:w-12") });
            nav.forEach(element => { element.classList.add("sm:w-36") });
            setTimeout(() => {
                navItems.forEach((element) => { element.classList.add("block") });
                navItems.forEach((element) => { element.classList.remove("hidden") });
            }, 120)
        }
    }, [isCollapse, nav, navItems]);
    return (
        <div className="nav sm:w-36 " onMouseEnter={() => {setIsCollapsed(false)}} onMouseLeave={() => {setIsCollapsed(true)}}>
            <Link to="/" className="nav-item-group">
                <ChartBarIcon className="nav-item-icon" />
                <Transition
                    show={!isCollapse}
                    enter="transition-opacity ease-linear duration-[100ms]"
                    enterFrom="transform opacity-0"
                    enterTo="transform opacity-100"
                    leave="transition-opacity ease-linear duration-[100ms]"
                    leaveFrom="transform opacity-100"
                    leaveTo="transform opacity-0"
                >
                    <div className="nav-item">首页</div>
                </Transition>
            </Link>
            <Link to="/setting" className="nav-item-group">
                <CogIcon className="nav-item-icon" />
                <Transition
                    show={!isCollapse}
                    enter="transition-opacity ease-linear duration-[500ms]"
                    enterFrom="transform opacity-0"
                    enterTo="transform opacity-100"
                    leave="transition-opacity ease-linear duration-[100ms]"
                    leaveFrom="transform opacity-100"
                    leaveTo="transform opacity-0"
                >
                    <div className="nav-item">设置</div>
                </Transition>
            </Link>
    </div>
    )
}

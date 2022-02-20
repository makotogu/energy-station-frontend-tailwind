import React from 'react';
import logo from '../static/img/SHU_LOGO.svg';
import UserMenu from '../components/user-menu/UserMenu';
import { Link } from 'react-router-dom';
import DropNav from '../components/drop-nav/DropNav';

export default function Header() {
  return (
    <div className="flex flex-row relative h-16 sm:h-20 shadow-lg ">
        <div className="visible absolute left-2 top-2" >
            <Link to="/">
                <img src={logo} alt="logo" className="h-12 sm:h-16" />
            </Link>
        </div>
        <div className="hidden sm:block absolute left-20 bottom-3">
            <h1 className="text-3xl bottom-0">能源站监控</h1>
        </div>
        <div className="block sm:hidden absolute px-14 bottom-3">
            <div className="text-xl"><DropNav/></div>
        </div>
        <div className="absolute right-2 bottom-3.5 ">
            <div className="p-2 ">
                <UserMenu/>
            </div>
        </div>
    </div>
  )
}

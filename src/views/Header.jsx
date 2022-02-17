import React from 'react';
import logo from '../static/img/SHU_LOGO.svg';
import UserMenu from '../components/charts/user-menu/UserMenu';

export default function Header() {
  return (
    <div className="flex flex-row relative h-16 sm:h-20 shadow-lg ">
        <div className="visible absolute left-2 top-2" >
              <img src={logo} alt="logo" className="h-12 sm:h-16" />
        </div>
        <div className="hidden sm:block absolute left-20 bottom-3">
            <h1 className="text-3xl bottom-0">能源站监控</h1>
        </div>
        <div className="block sm:hidden absolute inset-x-48 bottom-3">
            <div className="text-xl">首页</div>
        </div>
        <div className="absolute right-2 bottom-3.5 ">
            <div className="p-2 ">
                <UserMenu/>
            </div>
        </div>
    </div>
  )
}

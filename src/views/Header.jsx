import React from 'react';
import UserMenu from '../components/user-menu/UserMenu';
import { Link } from 'react-router-dom';
import { GlobeIcon } from '@heroicons/react/outline';


export default function Header() {
  return (
      <div className="flex flex-row relative h-20 shadow-lg bg-gradient-to-r from-blue-300/25 to-blue-200/25 dark:bg-black/50">
        <div className="visible absolute left-2 top-2" >
            <Link to="/">
                <GlobeIcon className="h-16 dark:text-white animate-spinXXSlow text-blue-600 rounded-full" />
            </Link>
        </div>
        <div className="block absolute left-20 -top-1.5">
            <div className="text-5xl font-normal leading-loose dark:text-gray-50 tracking-wider dark:font-medium">能源站监控</div>
        </div>
        {/* <div className="block sm:hidden absolute px-14 bottom-3">
            <div className="text-xl"><DropNav/></div>
        </div> */}
        <div className="absolute right-2 bottom-3.5 ">
            <div className="p-2 ">
                <UserMenu/>
            </div>
        </div>
    </div>
  )
}

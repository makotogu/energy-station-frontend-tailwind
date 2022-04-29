import React, { Fragment, useEffect, useState } from 'react'; 
import { BellIcon, UserIcon } from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import { Link, useHistory } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function UserMenu() {
    const history = useHistory();
    const [showModal, setShowMoal] = useState(false);
    const handleLogout = () => {
        setTimeout(() => {setShowMoal(true)}, 50);
        setTimeout(() => {setShowMoal(false)}, 0.6*1000);
        setTimeout(() => { history.push("/login")},0.6*1000+200);
    }

    useEffect(()=> {
        fetch("http://192.168.0.105:8888/user/auth",{
            method: "GET",
            headers: {
                token: localStorage.getItem("token"),
            }
        }).then(response => {
            if (response.status === 401) {
                alert("登陆已失效，请登陆后访问");
                setTimeout(() => { history.push("/login") }, 200);
            }}).catch((error)=>{
                alert("连接错误，请稍后重试");
            })
    },[]);

    return (
        <>
            <Transition
                show={showModal}
                enter="transition-opacity ease-linear delay-[800ms] duration-[100ms]"
                enterFrom="opacity-0 "
                enterTo="opacity-100 "
                leave="transition-opacity ease-linear duration-[100ms]"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed right-5 top-32 bg-orange-100/50 px-4 py-2 rounded-sm border-l-2 border-orange-500 text-orange-700 w-40 z-10 ">
                    <BellIcon className="w-4 inline mr-4" />
                    成功退出!
                </div>
            </Transition>
            <Menu>
                <Menu.Button className="hidden sm:inline text-xl left-0 dark:text-white">欢迎您！   {localStorage.getItem("username")}</Menu.Button>
                <Menu.Button className="inline sm:hidden text-xl left-0"><UserIcon className="h-8 absolute bottom-0 right-2 text-gray-400" /></Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                        {/* <Menu.Item >
                            {({ active }) => (
                                <div
                                    className={classNames(active ? 'bg-gray-100' : '', 'flex justify-end text-base text-gray-700')}
                                >
                                    <Link to="/monitor" className='py-2 px-4'>设置</Link>
                                </div>
                            )}
                        </Menu.Item> */}
                        <Menu.Item>
                            {({ active }) => (
                                <div
                                    className={classNames(active ? 'bg-gray-100' : '', 'flex justify-end mt-2 text-base text-gray-700')}
                                >
                                    {active ? <button onClick={handleLogout} className="py-2 px-4">退出</button> : <div className="py-2 px-4">退出</div>}
                                </div>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>

  )
}

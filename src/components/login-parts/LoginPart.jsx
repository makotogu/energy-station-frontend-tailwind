import { Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTimeoutFn } from 'react-use';
import './LoginPart.css';

export default function LoginPart() {
    const history = useHistory();
    const [ , , resetErrorFlag] = useTimeoutFn(()=>{setLoginErrorFlag(false);}, 2*1000)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginErrorFlag, setLoginErrorFlag] = useState(false);

    const handleLogin = () => {
        if (username !== "" && password !== "" ) {
            fetch("http://localhost:8888/user/login",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "username": username,
                        "password": password,
                    })
                })
                .then((res) => res.json())
                .then((data) => {
                    if (data.flag) {
                        history.push("/");
                    } else {
                        setLoginErrorFlag(true);
                        resetErrorFlag();
                    }
                });
        }
    }
    return (
        <div>
            <div className="w-full h-5/6  grid grid-cols-12 grid-rows-6">
                <div className="row-start-1 row-span-1 col-start-1 col-span-4 relative">
                    <div className="absolute bottom-8 text-3xl ml-5 text-blue-900/95 font-thin">登陆:</div>
                </div>
                <div className="username-input">
                    <input
                        type="text"
                        onChange={(event) => { setUsername(event.target.value) }}
                        className="input-bottom-border peer"
                    />
                    {
                        username.length === 0 ? <div className={"input-text"}>用户名</div> : <div className={"input-text-small"}>用户名</div>
                    }
                </div>
                <div className="password-input ">
                    <input
                        type="password"
                        onChange={(event) => { setPassword(event.target.value) }}
                        className="input-bottom-border peer"
                    />
                    {
                        password.length === 0 ? <div className={"input-text"}>密码</div> : <div className={"input-text-small"}>密码</div>
                    }
                </div>
                <div className="h-16 col-start-4 col-span-6 row-start-4 row-span-1 ">
                    <button onClick={handleLogin} className="login-button">
                        <span className="text-white">登陆</span>
                    </button>
                </div>
                <div className="relative col-start-1 col-span-12 row-start-5 row-span-1">
                    <Link to="/register" className="absolute right-4 text-gray-600">没有账号？请<span className="border-b-2 text-gray-800 font-light">注册</span></Link>
                </div>
            </div>
            <Transition
                show={loginErrorFlag}
                enter="transition-opacity ease-linear duration-[100ms]"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-[100ms]"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed left-4 bottom-2 bg-red-100/50 px-4 py-2 rounded-sm border-l-2 border-red-500 text-red-700 w-4/5 ">
                    登录失败请检查用户名或密码。
                </div>
            </Transition>
        </div>
    )
}

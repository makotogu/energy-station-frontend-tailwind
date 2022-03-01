import { Transition } from '@headlessui/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useTimeoutFn } from 'react-use';
import './RegisterPart.css'

export default function RegisterPart() {
  const [, , resetErrorFlag] = useTimeoutFn(() => { setRegisterErrorFlag(false); }, 2 * 1000)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [registerErrorFlag, setRegisterErrorFlag] = useState(false);
  const handleRegister = () => {
    if (username !== "" && password !== "") {
      console.log("我要登陆了");
    } else {
      setRegisterErrorFlag(true);
      resetErrorFlag();
    }
  }
  const verifyRegistration = () => {
    return password !== repassword || password === "" || username === "" || repassword === "";
  }
  return (
    <div>
      <div className="w-full h-5/6  grid grid-cols-12 grid-rows-6">
        <div className="row-start-1 row-span-1 col-start-1 col-span-4 relative">
          <div className="absolute bottom-8 text-3xl ml-5 text-blue-900/95 font-thin">注册:</div>
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
        <div className="repassword-input">
          <input
            type="password"
            onChange={(event) => { setRepassword(event.target.value) }}
            className="input-bottom-border peer"
          />
          {
            repassword.length === 0 ? <div className={"input-text"}>再输入一次密码</div> : <div className={"input-text-small"}>密码</div>
          }
        </div>
        <div className="relative col-start-1 col-span-12 row-start-4 row-span-1">
                <Transition
                  show={password !== repassword}
                  enter="transition-opacity ease-linear duration-[100ms]"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-[100ms]"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >

                    <span className="absolute left-2 bottom-0 text-red-700 text-sm font-thin pl-2 pr-8 border-l  border-red-400">请确保两次输入的密码一致</span>

                </Transition>
        </div>
        <div className="h-16 col-start-4 col-span-6 row-start-5 row-span-1 ">
          <button onClick={handleRegister} disabled={verifyRegistration()} className="register-button">
            <span className="text-white">注册</span>
          </button>
        </div>
        <div className="relative col-start-1 col-span-12 row-start-6 row-span-1">
          <Link to="/login" className="absolute right-4 text-gray-600">已经有账号了?去<span className="border-b-2 text-gray-800 font-light">登陆</span></Link>
        </div>
      </div>
      <Transition
        show={registerErrorFlag}
        enter="transition-opacity ease-linear duration-[100ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-[100ms]"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed left-4 bottom-2 bg-red-100/50 px-4 py-2 rounded-sm border-l-2 border-red-500 text-red-700 w-4/5 ">
          注册失败，可能重名或服务断线。
        </div>
      </Transition>
    </div>
  )
}

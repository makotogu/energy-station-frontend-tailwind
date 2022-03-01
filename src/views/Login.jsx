import React from 'react'
import LoginPart from '../components/login-parts/LoginPart';
import logo from '../static/img/SHU_LOGO.svg'

export default function Login() {

  return (
    <div className="h-full">
      <div className="w-full shadow-md text-2xl text-blue-900 bg-blue-50 bg-opacity-50 pl-6 p-4 mb-4">能源站监控管理平台</div>
      <div className="h-32 flex flex-row justify-center my-8 ">
        <img src={logo} alt="logo" className="w-24" />  
      </div>
      <LoginPart />
    </div>
  )
}

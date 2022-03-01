import React from 'react'
import { Link } from 'react-router-dom';
import RegisterPart from '../components/register-part/RegisterPart'

export default function Register() {
  return (
        <div className="h-full">
            <div className="w-full shadow-md text-2xl text-blue-900 bg-blue-50 bg-opacity-50 pl-6 p-4 mb-4">能源站监控管理平台</div>
            <RegisterPart />
            <Link to="/login" className="font-light">已经有账号了？请<span className="underline">登陆</span></Link>
        </div>
  )
}

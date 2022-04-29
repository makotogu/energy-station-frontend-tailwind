import React from 'react'
import LoginAnime from '../components/anime/LoginAnime'
import ComputerLoginPart from '../components/login-parts/ComputerLoginPart'

export default function ComputerLogin() {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 w-full h-full'>
      <div className="flex align-center justify-center">
        <ComputerLoginPart />
      </div>
      <LoginAnime/>
    </div>
  )
}

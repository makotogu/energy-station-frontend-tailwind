import React from 'react'

export default function NavBar() {
  return (
    <div className="flex-col space-y-6 p-4 h-full relative">
        <div>首页</div>
        <div>设置</div>
        <div className="absolute bottom-10">折叠</div>
    </div>
  )
}

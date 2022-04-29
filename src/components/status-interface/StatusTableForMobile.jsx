import React from 'react'

export default function StatusTableForMobile() {
  return (
    <div>
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-1/4 border">接口</th>
            <th className="w-1/4 border">状态</th>
            <th className="w-1/2 border">属性</th>
          </tr>  
        </thead>
        <tbody>
          <tr>
            <td>测试接口</td>
            <td>测试状态</td>
            <td>正常，数据xxxx，属性xxxx</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

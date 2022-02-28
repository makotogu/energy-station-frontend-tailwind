import React from 'react'
import './LoginPart.css'

export default function LoginPart() {
    return (
        <div>      
            <div className="w-full h-5/6 bg-red-100 mt-20 grid grid-cols-12 grid-rows-6 gap-y-24">
                <div className="username-input">
                    <input
                        type="text"
                        onChange={(event) => { console.log(event.target.value) }}
                        className="input-bottom-border peer"
                    />
                    <div className={"input-text"}>用户名</div>
                </div>
                <div className="password-input ">
                    <input
                        type="password"
                        onChange={(event) => { console.log(event.target.value) }}
                        className="input-bottom-border peer"
                    />
                    <div className={"input-text"}>密码</div>
                </div>
            </div>
        </div>
    )
}

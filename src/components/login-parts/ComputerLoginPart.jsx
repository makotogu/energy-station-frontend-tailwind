import { Transition } from '@headlessui/react'
import { AccountCircleOutlined, KeyRounded, Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, TextField, Box, Snackbar, IconButton, Input, FormControl, InputLabel } from '@mui/material';
import anime from 'animejs';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTimeoutFn } from 'react-use';

export default function ComputerLoginPart() {
    const history = useHistory();
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, , resetLoginErrorFlag] = useTimeoutFn(() => { setLoginErrorFlag(false); }, 2 * 1000);
    const [, , resetRegisterErrorFlag] = useTimeoutFn(() => { setRegisterErrorFlag(false); }, 2 * 1000);
    const [registerErrorFlag, setRegisterErrorFlag] = useState(false);
    const [loginErrorFlag, setLoginErrorFlag] = useState(false);
    const [repassword, setRepassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showRepassword, setShowRepassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleClickShowRepassword = () => {
        setShowRepassword(!showRepassword);
    };

    const handleRegister = () => {
        if (username !== "" && password !== "") {
            fetch(process.env.REACT_APP_URL + "/user/register",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "id": username,
                        "password": password,
                    })
                })
                .then((res) => res.json())
                .then((res) => {
                    if (res.flag) {
                        var userInfo = JSON.parse(res.data.userInfo);
                        localStorage.setItem("username", userInfo.id);
                        localStorage.setItem("token", res.data.token);
                        history.push("/");
                    } else {
                        setRegisterErrorFlag(true);
                        resetRegisterErrorFlag();
                    }
                });
        }
    }

    const handleLogin = () => {
        if (username !== "" && password !== "") {
            fetch(process.env.REACT_APP_URL+"/user/login",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "id": username,
                        "password": password,
                    })
                })
                .then((res) => res.json())
                .then((res) => {
                    if (res.flag) {
                        var userInfo = JSON.parse(res.data.userInfo);
                        localStorage.setItem("username", userInfo.id);
                        localStorage.setItem("token", res.data.token);
                        history.push("/");
                    } else {
                        setLoginErrorFlag(true);
                        resetLoginErrorFlag();
                    }
                });
        }
    }
    const verifyRegistration = () => {
        return password !== repassword || password === "" || username === "" || repassword === "";
    }
    const verifyLogin = () => {
        return password === "" || username === "";
    }

    useEffect(() => {
        if (!isLogin) {
            anime({
                targets: '.float-block',
                translateX: [
                    { value: "310px", easing: 'easeInOutQuad', duration: 600 },
                    { value: "307px", easing: 'linear', duration: 100 },
                    { value: "310px", easing: 'easeInOutQuad', duration: 50 },

                ],
                loop: false,
            });
            anime({
                targets: '.form',
                opacity: [
                    { value: "0.6", easing: 'easeInOutQuad', duration: 600 },
                    { value: "1", easing: 'linear', duration: 100 },
                ],
                translateX: [
                    { value: "10px", easing: 'easeInOutQuad', duration: 600 },
                    { value: "0px", easing: 'linear', duration: 100 },
                    { value: "1px", easing: 'easeInOutQuad', duration: 50 },
                    { value: "0px", easing: 'linear', duration: 50 },
                ],
                loop: false,
            });
        } else {
            anime({
                targets: '.float-block',
                translateX: [
                    { value: "0", easing: 'easeInOutQuad', duration: 600 },
                    { value: "3px", easing: 'linear', duration: 100 },
                    { value: "0", easing: 'easeInOutQuad', duration: 50 },

                ],
                loop: false,
            });
            anime({
                targets: '.form',
                opacity: [
                    { value: "0.6", easing: 'easeInOutQuad', duration: 600 },
                    { value: "1", easing: 'linear', duration: 100 },
                ],
                translateX: [
                    { value: "-10px", easing: 'easeInOutQuad', duration: 600 },
                    { value: "0px", easing: 'linear', duration: 100 },
                    { value: "-1px", easing: 'easeInOutQuad', duration: 50 },
                    { value: "0px", easing: 'linear', duration: 50 },
                ],
                loop: false,
            });
        }
    }, [isLogin]);
    return (
        <div className="relative w-[1000px] h-[600px] mt-[180px] 2xl:mt-[200px]">
            <div className='absolute bg-sky-700/70 dark:bg-sky-700/30 h-[300px] top-[150px] w-full z-10 rounded-md shadow-md'>
                <Transition
                    show={isLogin}
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className='absolute right-0 w-[300px] h-full pt-6 pr-3'>
                        <div className='ml-[180px] text-4xl leading-loose font-extralight text-white'>Login</div>
                        <div className='ml-[90px] text-xl leading-relaxed font-light mt-1 text-gray-100'>
                            登陆后查看监控信息
                        </div>
                        <div className='absolute bottom-12 right-[110px] text-gray-50/75'>
                            没有账号吗？
                        </div>
                        <button onClick={() => { setIsLogin(false); setShowPassword(false); setShowRepassword(false); }} className="absolute bottom-10 right-[25px] shadow-sm p-2 bg-sky-200/30  rounded-lg text-white">注册账号</button>
                    </div>
                </Transition>
                <Transition
                    show={!isLogin}
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className='absolute left-10 w-[300px] h-full pt-6 pr-3'>
                        <div className='text-4xl leading-loose font-extralight text-white'>Register</div>
                        <div className='text-xl leading-relaxed font-light mt-1 text-gray-100'>
                            请注册账号，以便查看监控信息
                        </div>
                        <div className='absolute bottom-12  text-gray-50/75'>
                            已经有账号了？
                        </div>
                        <button onClick={() => { setIsLogin(true); setShowPassword(false); setShowRepassword(false); }} className="absolute bottom-10 ml-[120px] shadow-sm p-2 bg-sky-200/30  rounded-lg text-white">登陆账号</button>
                    </div>
                </Transition>
            </div>
            <div className='absolute float-block w-[550px] h-[500px] z-20 shadow-2xl ml-[50px] dark:bg-slate-300 bg-slate-200 rounded-lg'>
                {isLogin
                    ? <div className='form h-[380px]'>
                        <div className='mt-[100px]'>
                            <div className="w-[500px] mx-[90px]">
                                <AccountCircleOutlined className='mt-[15px] mr-3 mx-1 text-gray-900/80' fontSize='large' />
                                <TextField label="用户名" variant="standard" required className='w-[300px]' onChange={(event) => { setUsername(event.target.value) }} />
                            </div>
                            <div className="w-[500px] mx-[90px] mt-[30px]">
                                <KeyRounded className='mt-[15px] mr-3 mx-1 text-gray-900/80' fontSize='large' />
                                <FormControl variant="standard">
                                    <InputLabel required>密码</InputLabel>
                                    <Input
                                        label="密码"
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        className='w-[300px]'
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        } onChange={(event) => { setPassword(event.target.value) }} />
                                </FormControl>

                            </div>
                        </div>
                        <button className='absolute px-5 py-1.5 rounded-lg text-2xl text-white bg-blue-400 bottom-10 left-[130px] w-[300px] hover:bg-blue-300 disabled:bg-gray-500 disabled:text-slate-400' onClick={() => { handleLogin() }} disabled={verifyLogin()}>
                            登陆
                        </button>
                    </div>
                    : <div className='form h-[380px]'>
                        <div className='mt-[100px]'>
                            <div className="w-[500px] mx-[90px]">
                                <AccountCircleOutlined className='mt-[15px] mr-3.5 mx-1 text-gray-900/80' fontSize='large' />
                                <TextField label="用户名" variant="standard" required className='w-[300px]' onChange={(event) => { setUsername(event.target.value) }} />
                            </div>
                            <div className="w-[500px] mx-[90px] mt-[30px]">
                                <KeyRounded className='mt-[15px] mr-3 mx-1 text-gray-900/80' fontSize='large' />
                                <FormControl variant="standard">
                                    <InputLabel required>密码</InputLabel>
                                    <Input
                                        label="密码"
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        className='w-[300px]'
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        } onChange={(event) => { setPassword(event.target.value) }} />
                                </FormControl>
                            </div>
                            <div className="w-[500px] mx-[90px] mt-[32px]">
                                <KeyRounded className='mt-[15px] mr-3 mx-1 text-gray-900/80' fontSize='large' />
                                <FormControl variant="standard">
                                    <InputLabel required>再次输入密码</InputLabel>
                                    <Input
                                        label="密码"
                                        type={showRepassword ? 'text' : 'password'}
                                        required
                                        className='w-[300px]'
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowRepassword}
                                                    edge="end"
                                                >
                                                    {showRepassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        } onChange={(event) => { setRepassword(event.target.value) }} />
                                </FormControl>
                            </div>
                            <Transition
                                show={password !== repassword}
                                enter="transition ease-out duration-800"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-800"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className='text-red-700 font-extralight mx-[100px] mt-[10px]'>
                                    两次密码不一致
                                </div>
                            </Transition>
                        </div>
                        <button className='absolute px-5 py-1.5 rounded-lg text-2xl text-white bg-blue-400 bottom-10 left-[130px] w-[300px] hover:bg-blue-300 disabled:bg-gray-500 disabled:text-slate-400' onClick={() => { handleRegister() }} disabled={verifyRegistration()} >
                            注册
                        </button>
                    </div>
                }
            </div>
            <Transition
                show={loginErrorFlag}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="absolute left-4 bottom-2 bg-red-100/50 px-4 py-2 rounded-sm border-l-2 border-red-500 text-red-700 w-full  z-40">
                    登录失败请检查用户名或密码。
                </div>
            </Transition>
            <Transition
                show={registerErrorFlag}
                enter="transition-opacity ease-linear duration-[100ms]"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-[100ms]"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="absolute left-4 bottom-2 bg-red-100/50 px-4 py-2 rounded-sm border-l-2 border-red-500 text-red-700 w-4/5 ">
                    注册失败，可能重名或服务断线。
                </div>
            </Transition>
        </div>
    )
}

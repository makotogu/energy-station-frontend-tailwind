import { Dialog, Transition } from '@headlessui/react'
import { CircularProgress } from '@mui/material';
import React, { Fragment, useState } from 'react'
import { useTimeoutFn } from 'react-use';

export default function ShutdownModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [states, setStates] = useState({
        isSend: false,
        isLoaded: false,
        isResponse: false,
    })
    const [, , fakeSend] = useTimeoutFn(() => {
        setStates({
            ...states,
            isSend: true,
        })
    }, 1000);
    const [, , fakeLoaded] = useTimeoutFn(() => {
        setStates({
            ...states,
            isLoaded: true,
        })
    }, 2000);
    const [, , fakeResponse] = useTimeoutFn(() => {
        setStates({
            ...states,
            isResponse: true,
        })
    }, 3000);

    function closeModal() {
        setIsOpen(false);
        setStates({ isSend: false, isLoaded: false, isResponse: false });
    }



    function openModal() {
        setIsOpen(true);
        fakeSend();
        fakeLoaded();
        fakeResponse();
    }


    return (
        <div className="relative">
            <div className="items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="hover:animate-pulse hover:scale-105 active:scale-95 "
                    style={{
                        border: "none",
                        backgroundImage: "linear-gradient(#E7F1F9, #EDF5FC),linear-gradient(to bottom right, #FFFFFF, #FFFFFF, #CAD6E5)",
                        padding: "0.5px",
                        borderRadius: "10px",
                        backgroundClip: "content-box,padding-box",
                        textAlign: "left",
                        boxShadow: "8px 2px 32px 0px rgba(18,61,101,0.15), -8px -8px 20px 0px rgba(255,255,255,0.6), inset -4px -3px 40px 0px rgba(255,255,255,0.09)",
                    }}
                >
                    <div
                        className='mx-6 my-3 font-[350] text-[#7C97AA] text-xl' 
                        style={{
                            fontSize: Math.round(window.outerWidth / 110),
                        }}>
                        关闭服务器
                    </div>
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-20 overflow-y-auto bg-gray-800/70  " 
                        onClose={closeModal}
                    >
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true"
                            >
                                &#8203;
                            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="inline-block min-w-[560px] w-min h-min p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-slate-100 shadow-xl rounded-2xl">
                                    <Dialog.Title
                                        className="text-2xl font-light leading-6 text-gray-900"
                                    >
                                        发送关机请求
                                    </Dialog.Title>
                                    <div className='flex flex-row justify-center'>
                                        {states.isSend ? <ReplyDisplay /> : null}
                                    </div>

                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
            </Transition>
        </div>
    )


    function ReplyDisplay() {
        function createData(name, total, used, free, shared, buff, available) {
            return { name, total, used, free, shared, buff, available };
        }
        const total = 2 * Math.round(3 * Math.random()+1) * 1024 * 1024 * 1024;
        const used = Math.round(Math.round(2 * Math.random() + 7)/10 * total);
        const free = Math.round((total - used) / 4);
        const shared = Math.round(Math.random() * 1000);
        const buff = total - free;
        const available = buff - free;

        const getShutdownTime = () => {
            var currentTime = new Date(new Date().getTime() + 10 * 60 * 1000);
            var year = currentTime.getFullYear();
            var month = currentTime.getMonth() + 1;
            var day = currentTime.getDate();
            var hour = currentTime.getHours();
            var minute = currentTime.getMinutes();
            var second = currentTime.getSeconds();
            return "sever@root:~ Shutdown scheduled for " + year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + " CST, use 'shutdown -c' to cancel.";
        }

        const rows = [
            createData('mem:', total, used, free, shared, buff, available),
            createData('swap:', 0, 0, 0, "", "", ""),
        ];


        return (
            <div
                className='flex mt-10 mb-20 w-min min-w-[800px] py-3 justify-start bg-white border-4 cursor-text'
            >
                {
                    !states.isLoaded
                        ?
                        <CircularProgress />
                        :
                        !states.isResponse
                            ? 
                            <div>
                                <div className='text-xl text-left text-purple-600/90 ml-4'>～: shutdown -h 10</div>
                                <CircularProgress />
                            </div>
                            :
                            <div className='relative '>
                                <div className='text-xl font-light text-purple-600/90 ml-4'>～: shutdown -h 10</div>
                                {
                                    <div className='text-xl font-light text-gray-500 ml-4'>
                                        {getShutdownTime()}
                                    </div>
                                }
                            </div>
                }
            </div>
        )
    }
}




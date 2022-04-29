import { Dialog, Transition } from '@headlessui/react'
import { MailIcon, MailOpenIcon } from '@heroicons/react/outline'
import { Backdrop, CircularProgress } from '@mui/material';
import React, { Fragment, useState } from 'react'
import { useEffect } from 'react';

export default function QueryModel() {
    let [isOpen, setIsOpen] = useState(false);
    let [states, setStates] = useState({
        isSend: false,
        isLoaded: true,
        isResponse: false,
    })

    function ReplyDisplay() {
        return (
            <div className='flex mt-10 mb-20 justify-center'>
                {
                    states.isLoaded
                        ? <CircularProgress />
                        : <div>jhlkjlfhaksufhl</div>
                }
            </div>
        )
    }

    function closeModal() {
        setIsOpen(false);
        setStates({isSend: false, isLoaded: true, isResponse: false});
    }

    function openModal() {
        setIsOpen(true);
    }

    const handleSend = () => {
        setStates({ isSend: true, isLoaded: true, isResponse: false });        
    }

    useEffect(() => {
        if (states.isSend) {
            setTimeout(() => {
                setStates({ ...states, isLoaded: false });
            }, 6000)
        }
    }, [states.isSend, states.isLoaded])

    return (
        <div className="relative">
            <div className="items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="px-4 py-2 text-sm font-medium text-gray-800 bg-emerald-300 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    查询指令
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Backdrop
                    sx={{ color: "#fff"}}
                    open={isOpen}
                >
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
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
                                <div className="inline-block w-[560px] h-min p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <Dialog.Title
                                        className="text-2xl font-light leading-6 text-gray-900"
                                    >
                                        请输入查询相关指令
                                    </Dialog.Title>
                                    <div className="mt-[30px] flex">
                                        <input className="h-10 p-2 border-b-2 focus:outline-none" placeholder="输入想查询的内容信息" />
                                        <div className="ml-4">
                                            <button
                                                type="button"
                                                disabled={states.isSend}
                                                className="group relative inline-flex px-3 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                onClick={() => { handleSend() }}
                                            >
                                                <MailIcon className="absolute transition ease-linear delay-75 w-7 h-7 mr-2  group-hover:opacity-0" />
                                                <MailOpenIcon className="absolute transition transform ease-linear delay-75 w-7 h-7 mr-2 opacity-0 group-hover:opacity-100" />
                                                <div className="static ml-8 text-lg" >发送</div>
                                            </button>
                                        </div>
                                    </div>
                                    {states.isSend ? <ReplyDisplay /> : null}

                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Backdrop>
            </Transition>
        </div>
    )
}

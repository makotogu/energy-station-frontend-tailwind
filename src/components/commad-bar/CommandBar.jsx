import React from 'react';
import QueryModel from './modal/QueryModal';
import ShutdownCancelModal from './modal/ShutdownCancelModal';
import ShutdownModal from './modal/ShutdownModal';

export default function CommandBar() {


    return (
        <div className='w-full h-full overflow-y-scroll no-scrollbar'>
            <div className="">
                <div className="mt-4 ml-6 mb-1 h-[40px]">
                    <div 
                        className="text-[#3E5769] font-[350] leading-10" 
                    style={{
                        fontSize: (window.innerHeight-100) / 40,
                    }}>命令下发</div>
                </div>
                <div className="flex flex-wrap basis-full mt-1 pl-8">
                    <div className='mt-3 mx-2'>
                        <QueryModel />
                    </div>
                    <div className='mt-3 mx-2'>
                        <ShutdownModal />
                    </div>
                    <div className='mt-3 mx-2'>
                        <ShutdownCancelModal />
                    </div>
                </div>
            </div>
        </div>
    )
}

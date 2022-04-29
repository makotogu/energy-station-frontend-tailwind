import React from 'react'
import ExampleModal from './modal/ExampleModal'
import QueryModel from './modal/QueryModal'

export default function CommandBar() {


    return (
        <div>
            <div className="flex flex-wrap space-x-4">
                <div className="flex basis-full space-x-3 mt-4 ml-6 mb-2 ">
                    <div className="text-2xl font-thin leading-10">命令下发</div>
                </div>
                <div className="flex basis-full space-x-6 mb-2 pl-8">
                    <QueryModel />
                    <ExampleModal />
                </div>
            </div>
        </div>
    )
}

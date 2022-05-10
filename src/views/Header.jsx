import React from 'react';
import { Avatar, Divider, Stack } from '@mui/material';


export default function Header() {
    return (
        <div className={"absolute h-20 mb-1 right-0 w-[" + window.outerWidth - 256 + "px]"}>
            <div
                className="fixed right-4 top-4 "
                style={{
                    border: "none",
                    backgroundImage: "linear-gradient(#E7F1F9, #EDF5FC),linear-gradient(to bottom right, #FFFFFF, #FFFFFF, #CAD6E5)",
                    padding: "0.5px",
                    borderRadius: "20px",
                    backgroundClip: "content-box,padding-box",
                    textAlign: "left",
                    boxShadow: "8px 2px 32px 0px rgba(18,61,101,0.15), -8px -8px 20px 0px rgba(255,255,255,0.6), inset -4px -3px 40px 0px rgba(255,255,255,0.09)",
                }}
            >
                <Stack direction="row" spacing="0.5rem" sx={{marginX:"12px", marginY:"8px"}} divider={<Divider orientation="vertical" flexItem />}>
                    <Avatar style={{ backgroundImage: "linear-gradient(to bottom right, #FFA061, #F7B500" }} >{localStorage.getItem("username") === null ? "G" : localStorage.getItem("username")[0] }</Avatar>
                    <div className="inline-block text-[#3E5769] text-2xl pt-[4px]">
                        {localStorage.getItem("username") === null ? "Guest" : localStorage.getItem("username")}
                    </div>
                </Stack>
            </div>
        </div>
    )
}

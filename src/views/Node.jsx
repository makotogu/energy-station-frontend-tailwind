import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import { Button, MenuItem, Menu } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import NodeCharts from '../components/charts/node/NodeCharts';

export default function Node() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [states, setStates] = React.useState({
        selected: null,
    })
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        setStates({ selected: event.currentTarget.innerText });
        setAnchorEl(null);
    };

    return (
        <div className='h-full w-full'>
            {/* 结点选择 */}
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : null}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : null}
                onClick={handleClick}
                sx={{
                    fontSize: '24px',
                    marginTop: '5px',
                    fontWeight: '300',
                    lineHeight: '1.8',
                }}
            >
                {states.selected ? states.selected : "选择能源站地点"}
                <KeyboardArrowDownOutlined />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>张江高科技园区</MenuItem>
                <MenuItem onClick={handleClose}>上海森兰外高桥</MenuItem>
                <MenuItem onClick={handleClose}>新虹桥国际医疗中心</MenuItem>
            </Menu>
            {states.selected === "张江高科技园区" ? <NodeCharts station={"ZHANG_JIANG"}/> : null}
            {states.selected === "上海森兰外高桥" ? <NodeCharts station={"WAI_GAO_QIAO"}/> : null}
            {states.selected === "新虹桥国际医疗中心" ? <NodeCharts station={"XIN_HONG_QIAO"}/> : null}
            {states.selected === null ? <NodeCharts station={"ZHANG_JIANG"}/> : null}
        </div>
    )
}

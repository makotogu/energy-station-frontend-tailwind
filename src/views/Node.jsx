import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import { Button, MenuItem, Menu } from '@mui/material'
import React from 'react'
import ChartCard from '../components/charts/ChartCard';

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
        setStates({...states, selected: event.target.innerText});
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
                { states.selected ? states.selected : "节点选择" }
                <KeyboardArrowDownOutlined/>
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
                <MenuItem onClick={handleClose}>节点-1</MenuItem>
                <MenuItem onClick={handleClose}>节点-2</MenuItem>
                <MenuItem onClick={handleClose}>节点-3</MenuItem>
            </Menu>
            {/* 结点展示内容 */}
            <ChartCard typeData={"temp"} className="w-96 h-96"></ChartCard>    
        </div>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import HomeIcon from '../static/icons/HomeIcon.png';
import WatchIcon from '../static/icons/WatchIcon.png';
import TableIcon from '../static/icons/TableIcon.png';
import NodeIcon from '../static/icons/NodeIcon.png';
import { Collapse, Divider, Tooltip } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';


export default function NavBar() {
    const [state, setState] = React.useState(
        {
            isMonitorExpand: false,
        }
    )

    return (
        <div className="nav">
            <Link to="/" className="flex flex-row items-center justify-start mb-2">
                <div className="block pt-[4px] pl-[20px]">
                    <div className="text-3xl font-[300] leading-8  tracking-wider ">能源站监控</div>
                    <div className="text-lg font-[150] leading-tight 0 text-blue-600 tracking-wider ">&nbsp;Energy Station</div>
                </div>
            </Link>
            <Divider />
            <Link to="/" className="nav-item-group group">
                <img src={HomeIcon} className="w-[36px] h-[36px] group-hover:animate-pulse ml-4" alt="主页" />
                <div className="nav-item">主页</div>
            </Link>
            <Divider />
            <div className='flex flex-row items-center'>
                <Link to="/monitor?node=ZHANG_JIANG" className="nav-item-group group">
                    <img src={WatchIcon} className="w-[36px] h-[36px] group-hover:animate-pulse ml-4" alt="监控" />
                    <div className="nav-item">节点监控</div>
                </Link>
                <button onClick={() => { setState({ ...state, isMonitorExpand: !state.isMonitorExpand }) }}>
                    {state.isMonitorExpand ? <ExpandMore sx={{ width: "36px", height: "36px" }} /> : <ExpandLess sx={{ width: "36px", height:"36px" }} />}
                </button>
            </div>
            <Collapse in={state.isMonitorExpand}>
                <Divider />
                <div className='flex flex-col'>
                    <Link to="/monitor?node=ZHANG_JIANG"  className="nav-sub">
                        <Tooltip title="张江高科技园区新能源技术有限公司" placement="right">
                            <div>张江高科技园区</div>
                        </Tooltip>
                    </Link>
                    <Divider orientation='horizon' flexItem />
                    <Link to="/monitor?node=WAI_GAO_QIAO" className="nav-sub">
                        <Tooltip title="上海森兰外高桥能源服务有限公司" placement="right">
                            <div>上海森兰外高桥</div>
                        </Tooltip>
                    </Link>
                    <Divider orientation='horizon' flexItem />
                    <Link to="/monitor?node=XIN_HONG_QIAO" className="nav-sub">
                        <Tooltip title="新虹桥国际医学中心能源站" placement="right">
                            <div>新虹桥国际医学中心</div>
                        </Tooltip>
                    </Link>
                </div>
            </Collapse>
            <Divider />
            <Link to="/table" className="nav-item-group group">
                <img src={TableIcon} className="w-[36px] h-[36px] group-hover:animate-pulse ml-4" alt="表格" />
                <div className="nav-item">表格详情</div>
            </Link>
            <Divider />
            <Link to="/node" className="nav-item-group group">
                <img src={NodeIcon} className="w-[36px] h-[36px] group-hover:animate-pulse ml-4" alt="节点" />
                <div className="nav-item">节点图例</div>
            </Link>

        </div>
    )
}

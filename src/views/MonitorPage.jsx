import React from 'react'
import { useLocation } from 'react-router-dom';
import NodeWaiGaoQiaoCanvas from '../components/structure/nodes/NodeWaiGaoQiaoCanvas';
import NodeXinHongQiaoCanvas from '../components/structure/nodes/NodeXinHongQiaoCanvas';
import NodeZhangJiangCanvas from '../components/structure/nodes/NodeZhangJiangCanvas';

export default function MonitorPage() {
  const query = new URLSearchParams(useLocation().search);
  const node = query.get('node');
  const [selectNode, setSelectNode] = React.useState({
    type: 'ZHANG_JIANG',
  });

  React.useEffect(() => {
    if (typeof(node) !== 'null') {
      setSelectNode({
        ...selectNode, type: node,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node]);
  return (
    <div className='flex flex-row '>
      <div className="overscroll-contain">
        {
          {
            'ZHANG_JIANG': <NodeZhangJiangCanvas />,
            'WAI_GAO_QIAO': <NodeWaiGaoQiaoCanvas />,
            'XIN_HONG_QIAO': <NodeXinHongQiaoCanvas />
          } [selectNode.type]
        }
      </div>
    </div>
    
  )
}

import React,{useEffect} from 'react';
import { Row, Col } from 'antd';
import { NavLink,useOutletContext } from 'react-router-dom';
import EllipsisMiddle from '../../../../../api/EllipsisMiddle';
export default function Main() {
  const address = useOutletContext<string>();
  useEffect(()=>{
    console.log(address);
  },[])
  return (
    <div className="main">
      <Row style={{ display: 'flex', justifyContent: "center" }}>
        <Col style={{ fontSize: "16px", fontWeight: 700, color: '#566873', marginRight: "5px" }}>
          {EllipsisMiddle({suffixCount:5,children:address})}
        </Col>
        <Col >
          <i style={{ verticalAlign: "middle", cursor: "pointer" }} className='iconfont icon-copy-template'></i>
        </Col>
      </Row>
      <Row className='blockList'>
        <NavLink to="decrypt">
          <Col className='block'>
            <i className='iconfont icon-jiesuo'></i>
            <p>decrypt</p>
          </Col>
        </NavLink>
        <NavLink to='verify'>
          <Col className='block'>
            <i className='iconfont icon-ico'></i>
            <p>Verify</p>
          </Col>
        </NavLink>
        <NavLink to='sign'>
          <Col className='block'>
            <i className='iconfont icon-liebiaoxingshi'></i>
            <p>Sign</p>
          </Col>
        </NavLink>
      </Row>
    </div>
  )
}

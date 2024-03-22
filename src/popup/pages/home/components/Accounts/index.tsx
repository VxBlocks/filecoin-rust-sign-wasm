import React from 'react'
import { Row, Col, Button } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
export default function Accounts() {
  return (
    <div className='accounts_container'>
      <Row className='title'>
        <Col span={2} style={{ lineHeight: '51px' }}>
          <NavLink to='/home'>
            <i className='iconfont icon-chexiao'></i>
          </NavLink>
        </Col>
        <Col span={20}>
          <h2>Accounts</h2>
        </Col>
      </Row>
      <div className="account">
        <Row className='address' style={{padding:'20px',border:"1px solid rgb(160 182 195)",borderRadius:"5px"}}>
          <Col span={20} style={{textAlign:"left"}}>0x953d...454f</Col>
          <Col span={4}><i style={{cursor:"pointer"}} className='iconfont icon-copy-template'></i></Col>
        </Row>
        <Button type="primary">Export Private Key</Button>
        <Button type="primary">Create new Account</Button>
        <Button type="primary">Import Private Key</Button>
      </div>
    </div>
  )
}

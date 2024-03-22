import React from 'react';
import { Row, Col } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';


export default function Setting() {
  const navigate = useNavigate()
  return (
    <div className='setting_container'>

      <h2>Wallet Settings</h2>
      {/* 菜单项 */}
      <div className='menu'>
        {/* 列表 */}
        <div className='item'>
          <NavLink to={'/home/accounts'}>
            <Row>
              <Col span={2}><i style={{ fontSize: "16px", color: "rgb(160 182 195 / 1)" }} className='iconfont icon-wode'></i></Col>
              <Col span={5} style={{ fontWeight: 600 }}>Accounts</Col>
              <Col span={15} style={{ textAlign: "right", color: "rgb(160 182 195 / 1)" }}>0x953d...454f</Col>
              <Col span={2}><i style={{ fontSize: "12px", color: "rgb(160 182 195 / 1)" }} className='iconfont icon-xiayibu'></i></Col>
            </Row>
          </NavLink>
        </div>
        {/* 其他 */}
      </div>

    </div>
  )
}

import React, { useState } from 'react';
import { Form, Space, Input, Button, Row, Col } from 'antd';
import { NavLink,useNavigate } from 'react-router-dom';
export default function Sign() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [visible, setVisibale] = useState(false);
  const [textValue, setTextValue] = useState("");
  const onFinish = () => {
  }
  return (
    <div className='sign_container'>
      <Row className='title'>
        <Col span={2} style={{lineHeight:'51px'}}>
          <NavLink to='/home'>
            <i className='iconfont icon-chexiao'></i>
          </NavLink>
        </Col>
        <Col span={20}> 
          <h2>Sign</h2>
        </Col>
      </Row>
      <Form
        onFinish={onFinish}
        form={form}
        layout="vertical"
      >
        <Form.Item label={<span style={{ color: "#1f6493", fontSize: "16px" }}>message:</span>} name="record">
          <Input.TextArea id="record" maxLength={120} rows={6} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" style={{ margin: "0 auto", background: "#0284ad" }} htmlType="submit">
            Confirm
          </Button>
        </Form.Item>
      </Form>
      <Row>
        <Col span={22}>
          <Input.TextArea value={textValue} rows={6} />
        </Col>
        <Col span={2} style={{ lineHeight: "8" }}>
          <i onClick={() => {
            
          }} style={{ verticalAlign: "middle", cursor: "pointer" }} className="iconfont icon-copy-template"></i>
        </Col>
      </Row>
    </div>
  )
}

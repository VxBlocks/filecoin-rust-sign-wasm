import React,{useEffect} from 'react';
import {useLocation,useNavigate} from 'react-router-dom';
import { Input, Button, Form,message } from 'antd';
import './relogin.less';
export default function ReLogin() {
  const {state:{pwd}} = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    console.log("relogin");
  },[])

  const onFinish = (value: { password: any; }) => {
    if(value.password !== pwd){
      error('password wrong!');
    }else{
      navigate("/home");
    }
  }
  // 密码错误提示
  const error = (arg: string)=>{
    message.error(arg);
  }
  return (
    <div className='relogin-container'>
      <div className="main">
        <div className="header">
          <img src="/images/favicon1.png" alt="" />
        </div>
        <h3>HELLO THERE</h3>
        <h1>Welcome Back</h1>
        <Form
          layout='vertical'
          onFinish={onFinish}
          style={{
            display:'flex',
            flexFlow:'column nowrap',
            justifyContent:'space-between'
          }}
        >
          <Form.Item
            label="Enter Password"
            name='password'
            rules={[
              { required: true, message: '请输入密码' }
            ]}
            style={{
              marginBottom:'150px'
            }}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
           style={{
            textAlign:'center'
          }}
          >
            <Button type='primary' htmlType='submit' style={{ width: '100%',margin:'10px auto' }}>Unlock Wallet</Button>
            <a className="forget" >Forgot password</a>
          </Form.Item>
        </Form>

      </div>
    </div>
  )
}

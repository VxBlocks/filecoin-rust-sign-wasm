import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Form,message } from 'antd';
import AleoTools from '../../../utils/AleoTools';
import "./import.less"
const {loadAccount} = AleoTools;
export default function Import() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = ()=>{
    form
    .validateFields()
    .then(values => {
      const account = loadAccount(values.private);
      if(account){
        // navigate('/home');
        navigate('/create',{state:account});
      }
    })
    .catch(info => {
      message.error('Validate Failed,The data is incorrect');
    });
  }

  return (<div className='import_container padding'>
      <h3>WALLET SETUP</h3>
      <h1>Import an Existing Wallet</h1>
      <Form
        onFinish={onFinish}
        layout='vertical'
        form={form}
      >
        <Form.Item  name='private' label="Enter Private Key" rules={[{ required: true, message: "Please input your key" }]} style={{ flexGrow: 4 }}>
          <Input.TextArea placeholder='Please enter privateKey' />
        </Form.Item>
        <Form.Item style={{ flexGrow: 1, alignSelf: 'center',width:"100%" }}>
          <Button  type="primary" htmlType="submit" style={{ background: '#2C85AF',width:"100%" }}>
          Continue
          </Button>
        </Form.Item>
      </Form>
    </div>)
}

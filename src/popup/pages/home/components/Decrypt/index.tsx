import React, { useState, useEffect, useRef } from "react";
import { Form, Space, Input, Button, Row, Col, message } from "antd";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import AleoTools from "../../../../../utils/AleoTools";

const { decryptRecord } = AleoTools;

export default function Decrypt() {
	const navigate = useNavigate();
	const { state } = useLocation();
	const [form] = Form.useForm();
	const [visible, setVisibale] = useState(false);
	const [textValue, setTextValue] = useState("");
	const [viewKey, setViewKey] = useState("");
	const formRef = useRef<any>();

	useEffect(() => {
		chrome.storage.local.get(["account"], function (res) {
			setViewKey(res.account.viewKey);
		});
		const form1 = formRef.current;
		if (form1 && state) {
			setVisibale(false);
			form1.setFieldsValue({
				record: state,
			});
		}
	}, [state]);
	// confirm
	const onFinish = () => {
		form
			.validateFields()
			.then(values => {
        console.log(viewKey);
				const res = decryptRecord(values.record, viewKey);
				console.log(res);
				if (res) {
					setVisibale(true);
					setTextValue(res);
				} else {
					message.error("Validate Failed,The data is incorrect");
				}
			})
			.catch(info => {
				message.error("Validate Failed,The data is incorrect");
			});
	};
	return (
		<div className="decrypt_container">
			<Row className="title">
				<Col span={2} style={{ lineHeight: "51px" }}>
					<NavLink to="/home">
						<i className="iconfont icon-chexiao"></i>
					</NavLink>
				</Col>
				<Col span={20}>
					<h2>Decrypt</h2>
				</Col>
			</Row>
			<Form ref={formRef} onFinish={onFinish} form={form} layout="vertical">
				<Form.Item label={<span style={{ color: "#1f6493", fontSize: "16px" }}>Record:</span>} name="record">
					<Input.TextArea disabled id="record" maxLength={120} rows={6} />
				</Form.Item>
				<Form.Item wrapperCol={{ span: 24 }}>
					<Button type="primary" style={{ margin: "0 auto", background: "#0284ad" }} htmlType="submit">
						Confirm
					</Button>
				</Form.Item>
			</Form>
			<Row>
				<Col span={22}>
					<Input.TextArea style={{ display: visible ? "block" : "none" }} value={textValue} rows={6} />
				</Col>
				<Col span={2} style={{ lineHeight: "8" }}>
					<i
						onClick={() => {}}
						style={{ verticalAlign: "middle", cursor: "pointer" }}
						className="iconfont icon-copy-template"></i>
				</Col>
			</Row>
		</div>
	);
}

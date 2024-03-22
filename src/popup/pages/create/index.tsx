import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Input, Form, Checkbox } from "antd";
import "./create.less";

import {AleoAccount} from "../../../model";


export default function Create() {
	const passReg = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$");
	const navigate = useNavigate();
	const { state } = useLocation();
	const onFinish = (value: { confirm: any }) => {
		const pwd = value.confirm;
		/* global chrome */
		if (state) {
      console.log(state);
			// const address = account.address;
			// const viewKey = account.viewKey;
			// const privateKey = account.privateKey;
			// chrome.storage.local.set({ address });
			// chrome.storage.local.set({ viewKey });
			chrome.storage.local.set({ account:state });
		}
		chrome.storage.local.set({ pwd }, function () {
			console.log("密码设置成功：", pwd);
		});
		navigate("/home");
	};
	return (
		<div className="create-container">
			<div className="heard">
				<h3>CREATE WALLET</h3>
				<h1>Create Password For This Wallet</h1>
			</div>
			<Form name="create" layout="vertical" onFinish={onFinish}>
				<Form.Item
					label="Create Password"
					name="password"
					rules={[{ required: true, message: "应包含8-18位的字母数字", pattern: passReg }]}>
					<Input.Password />
				</Form.Item>
				<Form.Item
					label="Confirm Password"
					name="confirm"
					rules={[
						{
							required: true,
							message: "密码不一致",
						},
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue("password") === value) {
									return Promise.resolve();
								}
								return Promise.reject(new Error("你所输入的两个密码不匹配"));
							},
						}),
					]}>
					<Input.Password />
				</Form.Item>
				<Form.Item
					name="remember"
					valuePropName="checked"
					rules={[
						{
							validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error("应该接收协议！"))),
						},
					]}>
					<Checkbox>我阅读并同意服务条款和隐私政策。</Checkbox>
				</Form.Item>
				<Form.Item style={{ margin: "30px 0 0 0" }}>
					<Button type="primary" htmlType="submit" style={{ background: "#2c85af" }}>
						Create Wallet
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

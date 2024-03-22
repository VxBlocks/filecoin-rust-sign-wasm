import React, { useState, useEffect } from "react";
import { Button, Input, Form, Row, Col } from "antd";
import { Outlet, useNavigate, useParams, useLocation } from "react-router-dom";
import AleoTools from '../../../utils/AleoTools';
import "./home.less";
export default function Home() {
	const navigate = useNavigate();
  const [address,setAddress] = useState();
	const [open, setOpen] = useState(false);

	useEffect(() => {
    chrome.storage.local.get(['account'], function (res) {
      if (res.account) {
        setAddress(res.account.address);
      }else{
        const account = AleoTools.createAccount();
        chrome.storage.local.set({ account });
      }
    });
		// 使用长连接
		let port = chrome.runtime.connect({
			name: "popup-name",
		});

		// 使用postMs 发送信息
		port.postMessage("给 background 传递信息~");

		// 接收信息
		port.onMessage.addListener(msg => {
			console.log(msg);
			if (msg.record) {
				navigate("/home/decrypt", { state: msg.record });
			}
		});
	}, []);

	const handler = () => {
		if (!open) {
			navigate("/home/setting");
		} else {
			navigate("/home");
		}
		setOpen(!open);
	};
	return (
		<div className="home_container">
			<div className="header">
				<Row style={{ display: "flex", justifyContent: "space-between" }}>
					<Col>
						<img style={{ width: 25, height: 25 }} src="images/favicon1.png" alt="" />
					</Col>
					<Col onClick={handler}>
						<i style={{ fontSize: "25px", cursor: "pointer" }} className="iconfont icon-caidan"></i>
					</Col>
				</Row>
			</div>
			<Outlet context={address} />
		</div>
	);
}

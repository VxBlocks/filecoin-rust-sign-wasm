import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./recovery.less";
export default function Recovery() {
	const navigate = useNavigate();
	return (
		<div className="recovery-container">
			<div className="logo">
				<h1>Wallet Created Successfully!</h1>
				<h2>RECOVERY PHRASE</h2>
			</div>
			<div className="main">
				<div className="card">
					<p className="rcy">scissors attend obvious behave bread gorilla budget volcano catch race story social</p>
					<span>
						复制 <i></i>
					</span>
				</div>
				<p>Your recovery phrase makes it easy to back up and restore your account.</p>
				<p>WARNING</p>
				<p>Never disclose your secret recovery phrase. Anyone can take over your account with it.</p>
			</div>

			<div className="btn">
				<Button type="primary" onClick={() => navigate("/wallet")}>
					Open Sui Wallet
				</Button>
			</div>
		</div>
	);
}

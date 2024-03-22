import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Card } from "antd";
import "./login.less";
export default function Login() {
	const navigate = useNavigate();
	useEffect(() => {
		/*global chrome*/
		chrome.storage.local.get(["pwd"], function (res) {
			if (res.pwd) {
				navigate("/relogin", { state: { pwd: res.pwd } });
			}
		});
		console.log("login");
	}, []);
	return (
		<div className="login_container padding">
			<h1>New to Aleo Wallet?</h1>
			<Card className="card">
				<h2>Yes,let's create one!</h2>
				<p>This creates a new wallet.</p>
				<Button
					type="primary"
					onClick={() => {
						navigate("/create");
					}}>
					Create New Wallet
				</Button>
			</Card>
			<Card className="card">
				<h2>No, I already have one</h2>
				<p>Import your existing wallet by private key.</p>
				<Button
					type="primary"
					onClick={() => {
						navigate("/import");
					}}>
					Import an Existing Wallet
				</Button>
			</Card>
		</div>
	);
}

import Home from "../pages/home";
import Login from "../pages/login";
import Import from "../pages/import";
import Main from "../pages/home/components/Main";
import Decrypt from "../pages/home/components/Decrypt";
import Verify from "../pages/home/components/Verify";
import Sign from "../pages/home/components/Sign";
import Setting from "../pages/home/components/Setting";
import Accounts from "../pages/home/components/Accounts";
import Create from "../pages/create";
import Recovery from "../pages/recovery";
import ReLogin from "../pages/relogin";
import { Navigate, RouteObject } from "react-router-dom";
import React from "react";

const routes: RouteObject[] = [
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/import",
		element: <Import />,
	},
	{
		path: "/create",
		element: <Create />,
	},
  {
		path: "/create",
		element: <Create />,
	},
  {
		path: "/recovery",
		element: <Recovery />,
	},
  {
		path: "/relogin",
		element: <ReLogin />,
	},
	{
		path: "/home",
		element: <Home />,
		children: [
			{
				index: true,
				element: <Main />,
			},
			{
				path: "decrypt",
				element: <Decrypt />,
			},
			{
				path: "verify",
				element: <Verify />,
			},
			{
				path: "sign",
				element: <Sign />,
			},
			{
				path: "setting",
				element: <Setting />,
			},
			{
				path: "accounts",
				element: <Accounts />,
			},
		],
	},
	{
		path: "*",
		element: <Navigate to="/login" />,
	},
];

export default routes;

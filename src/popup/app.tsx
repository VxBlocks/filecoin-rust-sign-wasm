import React, { useEffect, useRef, useState } from "react";
import { PrivateKey } from "@aleohq/wasm";
import "./popup.less";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import fileCoinSigner from "../fil-signer";

export const App: React.FC = () => {

  const [mne,setmne] = useState("")

  useEffect(() =>{
    fileCoinSigner().then((e)=>{
      setmne(e.generateMnemonic(12))
    })
      
  },[])

  const element = useRoutes(routes);
  return <div className="app">{mne}</div>;
  // return <div className="app">{element}</div>;
};

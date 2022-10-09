import React from "react";
import { Route, Routes, HashRouter } from 'react-router-dom';
import styles from './styles/header.module.css';
import { useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Hunt from "./pages/Hunt";

import {handleConnectWallet} from './wallet/walletUtils';



function App() {
  const [account, setAccount] = useState(undefined);
  const [web3modal, setWeb3modal] = useState();
  const [provider, setProvider] = useState();
  const [providerexp, setProviderexp] = useState();
  const [walletConnection, setWalletConnection] = useState(undefined);
  return (
    <div>
      <div className={styles.header}>

      {account ?
              <button class="grey" onClick={async ()=>{
                await web3modal.clearCachedProvider();
                setAccount(undefined);
                setProvider();
              }}>{account}</button>
              :
                  <button class="grey" onClick={
                () => {
                handleConnectWallet({
                  setAccount,
                  setWeb3modal,
                  setProvider,
                  setProviderexp,
                  setWalletConnection
                })
                }}>CONNECT WALLET</button>
              }

      </div>
      <div>
        <div>
          <HashRouter basename="/">
            <Routes>
              <Route path="/" element={<Home />}/>
            </Routes>
            <Routes>
              <Route path="/hunt" element={<Hunt />}/>
            </Routes>
            <Routes>
              <Route path="/leaderboard" element={<Leaderboard />}/>
            </Routes>
          </HashRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
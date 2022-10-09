import React, { useEffect, useState } from "react";
import { Route, Routes, HashRouter } from 'react-router-dom';
import styles from './styles/header.module.css';

import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Hunt from "./pages/Hunt";

import {handleConnectWallet} from './wallet/walletUtils';
import { useAccount, useSignMessage } from 'wagmi';
import { authenticate, generateChallenge, getPublications } from './utils';


function App() {
  const [account, setAccount] = useState(undefined);
  const [web3modal, setWeb3modal] = useState();
  const [provider, setProvider] = useState();
  const [providerexp, setProviderexp] = useState();
  const [walletConnection, setWalletConnection] = useState(undefined);
  const { signMessageAsync } = useSignMessage();
  const [signedIn, setSignedIn] = useState(false);

  const signIn = async () => {
    try {
      if (account == null){
        return alert('Please connect your wallet first');
      }
      const challenge = await generateChallenge(account);
      const signature = await signMessageAsync({ message: challenge });
      const accessToken = await authenticate(account, signature);
      console.log({ accessToken });
      window.sessionStorage.setItem('accessToken', accessToken);
      setSignedIn(true);
    } catch (error) {
      console.error(error);
      alert('Error signing in');
    }
  };

  return (
    <div className="o-hidden">
      <div className="row pt-3" style={{backgroundColor: "#391C00"}}>
        <div className="col-6 d-flex justify-content-center">
          {account ?
            <button className="btn-browngold"
              onClick={async ()=>{
                await web3modal.clearCachedProvider();
                setAccount(undefined);
                setProvider();
              }}>
                <p className="px-2">
                  {account.slice(0, 12).concat('...')}
                </p>
            </button>
          :
            <button className="btn-browngold"
            style={{maxWidth: "160px"}}
              onClick={ () => {
                handleConnectWallet({
                setAccount,
                setWeb3modal,
                setProvider,
                setProviderexp,
                setWalletConnection
            })}}>
              <p className="px-2">
                CONNECT WALLET
              </p>
            </button>
          }
        </div>
        <div className="col-6 d-flex justify-content-center">
          {!signedIn && (
            <button className="btn-browngold"
            style={{maxWidth: "160px"}} onClick={signIn}>
              <p className="px-2 text-uppercase">
                Login with Lens
              </p>
            </button>
          )}
        </div>
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

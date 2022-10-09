import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import Web3 from "web3"
import { ethers } from "ethers" ;

import { handleAuth  } from './walletConnect';

const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, 
      options: {
        rpc: {
          80001: "https://polygon-mumbai.gateway.pokt.network/v1/lb/91c63def03646e605e45d6d0"
          },
      }
    }
  };

const web3modal = new Web3Modal(
    {
        network : "mumbai",
        theme : "dark",
        cacheProvider : true,
        providerOptions
    } 
);

export const handleConnectWallet = async function connectWallet({setAccount,setWeb3modal,setProvider, setProviderexp,setWalletConnection}) {
    var provider = await web3modal.connect()

    await provider.enable();
    var web3 = new Web3(provider)
    const acc = await web3.eth.getAccounts(); 

    var provider2 =  new ethers.providers.Web3Provider(provider);

    
    handleAuth(web3,provider2);
    setWalletConnection(web3);
    setAccount(acc[0]);
    setWeb3modal(web3modal); 
    setProvider(provider);
    setProviderexp(provider);
};
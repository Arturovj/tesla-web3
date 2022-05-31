
import React, { useState, useEffect } from "react";
import LoginNft from "../../LoginNft/LoginNft";
// import "./Nft.css"
import Web3 from "web3"
import MintNft from "./MintNft/MintNft";
import HomeNft from "./HomeNft/HomeNft";



export default function Nft() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [provider, setProvider] = useState(window.ethereum);
  const [chainId, setChainId] = useState(null);
  const [web3, setWeb3] = useState(null);

  const NETWORKS = {
    1: "Ethereum Main Network",
    3: "Ropsten Test Network",
    4: "Rinkeby Test Network",
    5: "Goerli Test Network",
    42: "Kovan Test Network",
  };

  const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const chainId = await web3.eth.getChainId();
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask!");
    } else if (accounts[0] !== currentAccount) {
      setProvider(provider);
      setWeb3(web3);
      setChainId(chainId);
      setCurrentAccount(accounts[0]);
      setIsConnected(true);
    }
  };

  useEffect(() => {
    const handleAccountsChanged = async (accounts) => {
      const web3Accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
        onLogout();
      } else if (accounts[0] !== currentAccount) {
        setCurrentAccount(accounts[0]);
      }
    };

    const handleChainChanged = async (chainId) => {
      const web3ChainId = await web3.eth.getChainId();
      setChainId(web3ChainId);
    };

    if (isConnected) {
      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
    }

    return () => {
      if (isConnected) {
        provider.removeListener("accountsChanged", handleAccountsChanged);
        provider.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, [isConnected]);

  const onLogout = () => {
    setIsConnected(false);
    setCurrentAccount(null);
  };

  const getCurrentNetwork = (chainId) => {
    return NETWORKS[chainId];
  };

  return (
    <>
      <div className="nft-container">
        <h1 className="nft-title">WEB3</h1>
        

          <div>
              {!isConnected && <LoginNft onLogin={onLogin} onLogout={onLogout}/>}
          </div>

          <div>
              {isConnected && <HomeNft currentAccount={currentAccount}
            currentNetwork={getCurrentNetwork(chainId)} />}
          </div>
        <MintNft></MintNft>
      </div>
    </>
  );
}


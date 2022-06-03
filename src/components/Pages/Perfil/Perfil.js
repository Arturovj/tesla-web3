import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase/credenciales";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Web3 from "web3"


import getPaymentByUID from "../../../functions/getPaymentsByUID";
import { useUserContext } from "../../../contexts/userContext";
import PerfilCanvas from "../../Perfil/PerfilRobot";
import './Perfil.css'
import LoginNft from "../../LoginNft/LoginNft";
import HomeNft from "../NFT/HomeNft/HomeNft";
// import LoginNft from "../../LoginNft/LoginNft";

export default function Perfil() {
  const { user } = useUserContext();
  const [payments, setPayments] = useState([]);
  let navigate = useNavigate();
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

  useEffect(() => {
    async function getPayments() {
      if (!user) return;
      const payments = await getPaymentByUID(user.uid);
      setPayments(payments);
    }
    getPayments();
  }, [user]);

  function logout() {
    signOut(auth);
    toast.info('See you soon!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
        setTimeout(() => {
            navigate("/");
          }, 2000);
  }

  return(
      
    <>
    <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    
     <div className="profile-container">
    
    
    {user ?  (<div>
        <div>Profile</div>
        <div>Welcome {user.email} - {user.uid}</div>
        <div>
              {!isConnected && <LoginNft onLogin={onLogin} onLogout={onLogout}/>}
          </div>

          <div>
              {isConnected && <HomeNft currentAccount={currentAccount}
            currentNetwork={getCurrentNetwork(chainId)} />}
          </div>
        {/* <div><LoginNft/></div> */}

        {/* {payments.length > 0 && payments.map((payment )=>{payment.amount/100})} */}
       <div className="canvas"> <PerfilCanvas/> </div>
        <button onClick={logout}>Cerrar Sesión</button>
        </div> ):( "LOGIN PLEASE")}
        </div>
      
    </>
  );
}











 


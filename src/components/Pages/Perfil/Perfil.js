import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase/credenciales";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import brand from "./brand.png";

import Web3 from "web3";

import getPaymentByUID from "../../../functions/getPaymentsByUID";
import { useUserContext } from "../../../contexts/userContext";

import "./Perfil.css";
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
    toast.info("See you soon!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
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
        {user ? (
          <div>
            <div class="" id="">
              <div class="padding">
                <div class="row container d-flex justify-content-center">
                  <div class="col-xl-6 col-md-12 profile-container">
                    <div class="card user-card-full">
                      <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                          <div class="card-block text-center text-white">
                            <div class="m-b-25">
                              <img
                                src={brand}
                                class="img-radius"
                                alt="User-Profile-Image"
                              />
                            </div>
                            <h6 class="f-w-600">{user.uid}</h6>
                            <p>Client</p>
                            <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                          </div>
                        </div>
                        <div class="col-sm-8">
                          <div class="card-block">
                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                              Information
                            </h6>
                            <div class="row">
                              <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Email</p>
                                <h6 class="text-muted f-w-400">{user.email}</h6>
                              </div>
                              <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Phone</p>
                                <h6 class="text-muted f-w-400">98979989898</h6>
                              </div>
                            </div>
                            <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                              Metamask Account
                            </h6>
                            <div class="row">
                              <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Account</p>
                                <h6 class="text-muted f-w-400">
                                  <div>
                                    {!isConnected && (
                                      <LoginNft
                                        onLogin={onLogin}
                                        onLogout={onLogout}
                                      />
                                    )}
                                  </div>
                                  <div>
                                    {isConnected && (
                                      <HomeNft
                                        currentAccount={currentAccount}
                                        currentNetwork={getCurrentNetwork(
                                          chainId
                                        )}
                                      />
                                    )}
                                  </div>
                                </h6>
                              </div>
                              <div class="col-sm-6">
                                <p class="m-b-10 f-w-600"></p>
                                <h6 class="text-muted f-w-400"></h6>
                              </div>
                            </div>
                            <ul class="social-link list-unstyled m-t-40 m-b-10">
                              <li>
                                <a
                                  href="#!"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="facebook"
                                  data-abc="true"
                                >
                                  <i
                                    class="mdi mdi-facebook feather icon-facebook facebook"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="twitter"
                                  data-abc="true"
                                >
                                  <i
                                    class="mdi mdi-twitter feather icon-twitter twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title=""
                                  data-original-title="instagram"
                                  data-abc="true"
                                >
                                  <i
                                    class="mdi mdi-instagram feather icon-instagram instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* <div><LoginNft/></div> */}

                {/* {payments.length > 0 && payments.map((payment )=>{payment.amount/100})} */}
                <div className="canvas"> </div>
                <button onClick={logout}>Disconnect</button>
              </div>
            </div>
          </div>
        ) : (
          "LOGIN PLEASE"
        )}
      </div>
    </>
  );
}

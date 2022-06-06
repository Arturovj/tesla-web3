import React from "react";
import { useWeb3React } from "@web3-react/core";
import useTeslas from "../../../../solidity/frontend/hooks/useTeslas";
// import "./index.scss";
// import toast from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTruncatedAddress from "../../../../solidity/frontend/hooks/useTruncatedAddress";
import eth from './etereo1.png';
import './MintNft.css'

const MintNft = () => {
  const teslas = useTeslas();
  const { active, account } = useWeb3React();

  const truncatedAddress = useTruncatedAddress(account)

  const Mint = () => {
    console.log(teslas);
    const upc = teslas.methods
      .mint()
      .send({
        from: account,
      })
      .on("transactionHash", () => {
        // toast.success(`Minting your Car... Transaction:${truncatedAddress}`);
        toast.success(`Minting your Car... Transaction:${truncatedAddress}`, {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          }); 
      })
      .on("receipt", () => {
        toast.success(`Your car has been minted... Transaction:${truncatedAddress}`, {
          position: "top-center",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          }); 
      })
      .on("error", (error) => {
        toast(`An ${error.message} ocurred`);
      });
  };



  return (
    <>

<ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />


    <div className="modal-nft-button">
  
    </div>
      <div className="song-nft-container">
      
        <div className="button-nft">
        <button className="button-mint-jvliah" style={{ cursor:'pointer'}} onClick={() => Mint()}><img className="eth-button" src={eth} ></img> MINT TESLA</button>
        
        </div>
        
      
        
        {/* <div className="mint-button">
        <button className="button-mint-jvliah" onClick={() => Mint()}>MINT </button>
        </div>
        <div className="mint-button">
        <button className="button-mint-dualipa" onClick={() => Mint()}>MINT </button>
        </div> */}
        
      </div>
     

     
      
    </>
  );
};

export default MintNft;
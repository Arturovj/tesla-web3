import React from "react";
import { useWeb3React } from "@web3-react/core";
import useTeslas from "../../../../solidity/frontend/hooks/useTeslas";
// import "./index.scss";
import toast from "react-hot-toast";
import useTruncatedAddress from "../../../../solidity/frontend/hooks/useTruncatedAddress";

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
        toast.success(`Minting your Car... Transaction:${truncatedAddress}`);
      })
      .on("receipt", () => {
        toast.success(`Your Car has been Minted`);
      })
      .on("error", (error) => {
        toast(`An ${error.message} ocurred`);
      });
  };



  return (
    <>
    <div className="modal-nft-button">
  
    </div>
      <div className="song-nft-container">
      
        <div className="card jvliah animated">
        <button className="button-mint-jvliah" style={{ cursor:'pointer'}} onClick={() => Mint()}>MINT TESLA</button>
        
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
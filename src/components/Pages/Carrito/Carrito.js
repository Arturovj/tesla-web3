import React from "react";
import { useNavigate } from "react-router-dom";
import { useCarritoContext } from "../../../contexts/carritoContext";
import { useUserContext } from "../../../contexts/userContext";
import createCheckoutSession from "../../../functions/createCheckoutSession";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Carrito.css";
import PaymentForm from "../../CreditCard/CreditCard";
import { motion } from "framer-motion/dist/framer-motion";
import MintNft from "../NFT/MintNft/MintNft";
import euro from './euro.png'

export default function Carrito() {
  const { carrito } = useCarritoContext();
  const { user } = useUserContext();
  let navigate = useNavigate();

  console.log(carrito);

  function isAuthenticated() {
    if (user && carrito.length >= 1) {
      createCheckoutSession(user.uid, carrito);
      toast.success("Redirecting!", {
        position: "top-center",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (user && carrito.length < 1){
        navigate("/shop")
    }

    if (!user) {
      console.log("you have to login");
      navigate("/login");
    }
  }

  return (
    <motion.div  initial={{ opacity : 0 }}
    animate={{ opacity : 1}}
    exit={{ opacity : 0}}>
    <div>
      <ToastContainer
        position="top-center"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />{" "}
      <div className="cart">
        <div>
        {carrito.map((producto) => (
          <div className="items">
            <img className="product-img" src={producto.images[0]} alt={producto.name} />
            <p>{producto.name}</p>
          </div>
        ))}
        </div>
        <div>
        <PaymentForm/>
        <button onClick={isAuthenticated}>
         <img className="euro-button" src={euro}></img> BUY TESLA NOW	
        </button>
       <MintNft/> 
        </div>
      </div>
    </div>
    </motion.div>
  );
}

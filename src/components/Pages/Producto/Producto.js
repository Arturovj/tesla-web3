import React, { useState, useEffect } from "react";
import getProductById from "../../../functions/getProductById";
import { useCarritoContext } from "../../../contexts/carritoContext";
import { useUserContext } from "../../../contexts/userContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import createCheckoutSession from "../../../functions/createCheckoutSession";
import './Producto.css'

export default function Producto() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const { carrito, setCarrito } = useCarritoContext();
  const { user } = useUserContext();
  let navigate = useNavigate();



  useEffect(() => {
    async function getProductInfo() {
      const product = await getProductById(id);
      setProductInfo(product);
    }
    getProductInfo();
  }, [id]);

  function addToCart() {
    setCarrito([...carrito, productInfo]);
    navigate("/carrito")
  }

  function isAuthenticated(){
      if(user){
          addToCart()
          createCheckoutSession(user.uid, carrito)
      }
      if (!user){
           navigate("/login")
      }

  }
  console.log(user)
  return (
    <>
    <div className="producto-container">
      <div>
        Product: {productInfo?.name}
       
      </div>
      <div> <img src={productInfo?.images[0]} alt={productInfo?.name} /></div>

      <button onClick={addToCart}>Add to Cart</button>

      <button onClick={isAuthenticated}>Buy Now</button>
        <Link to="/carrito">
      <button>Cart</button>
      </Link>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import getProductById from "../../../functions/getProductById";
import { useCarritoContext } from "../../../contexts/carritoContext";
import { useUserContext } from "../../../contexts/userContext";
import { Link, Navigate } from "react-router-dom";

export default function Producto() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const { carrito, setCarrito } = useCarritoContext();
  const { user } = useUserContext();



  useEffect(() => {
    async function getProductInfo() {
      const product = await getProductById(id);
      setProductInfo(product);
    }
    getProductInfo();
  }, [id]);

  function addToCart() {
    setCarrito([...carrito, productInfo]);
  }

  function isAuthenticated(){
      if(user){
                // te dejo comprar
      }
      if (!user){
            return <Navigate to="/login" />
      }

  }
  console.log(user)
  return (
    <>
      <div>
        Producto: {productInfo?.name}
        <img src={productInfo?.images[0]} alt={productInfo?.name} />
      </div>

      <button onClick={addToCart}>Añadir a carrito</button>

      <button onClick={isAuthenticated}>Comprar AHORA</button>
        <Link to="/carrito">
      <button>Carrito</button>
      </Link>
    </>
  );
}

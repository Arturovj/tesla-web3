import React, { useState, useEffect } from "react";
import getProductById from "../../../functions/getProductById";
import { useCarritoContext } from "../../../contexts/carritoContext";
import { useUserContext } from "../../../contexts/userContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import createCheckoutSession from "../../../functions/createCheckoutSession";
import "./Producto.css";
import { motion } from "framer-motion/dist/framer-motion";
import HashLoader from "react-spinners/HashLoader";

export default function Producto() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const { carrito, setCarrito } = useCarritoContext();
  const { user } = useUserContext();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  useEffect(() => {
    async function getProductInfo() {
      const product = await getProductById(id);
      setProductInfo(product);
    }
    getProductInfo();
  }, [id]);

  function addToCart() {
    setCarrito([...carrito, productInfo]);
    navigate("/cart");
  }

  function isAuthenticated() {
    if (user) {
      addToCart();
      createCheckoutSession(user.uid, carrito);
    }
    if (!user) {
      navigate("/login");
    }
  }
  console.log(user);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {loading ? (
          <div className="loader">
            <HashLoader color="red" size={100} />
          </div>
        ) : (
          <div className="producto-container">
            <div>Product: {productInfo?.name}</div>
            <div>
              {" "}
              <img className="product-img" src={productInfo?.images[0]} alt={productInfo?.name} />
            </div>

            <button onClick={addToCart}>Add to Cart</button>

            <button onClick={isAuthenticated}>Buy Now</button>
            <Link to="/cart">
              <button>Cart</button>
            </Link>
          </div>
        )}
      </motion.div>
    </>
  );
}

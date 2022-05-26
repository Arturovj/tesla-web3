import React, { useEffect, useState } from "react";
import getActiveProducts from "../../../functions/getActiveProducts";
import ItemCard from "../../ItemCard/ItemCard";
import './Shop.css'
import { motion } from "framer-motion/dist/framer-motion";
import HashLoader from "react-spinners/HashLoader";

export default function Shop() {
  const [productos, setProductos] = useState(null);


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  useEffect(() => {
    async function getProducts() {
      const products = await getActiveProducts();
      setProductos(products);
    }
    getProducts();
  }, []);



  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
      <div className="shop">
      {loading ? <div className="loader"><HashLoader
      color="red"
      size={100}
      
      /></div>   :
      
      <div>
      <ul>
        {productos ? productos.map((p) => <li style={{color:"white"}} key={p.id}>

        <ItemCard product={p} />

        </li>) : null}
      </ul>
    </div>
    
      
      }
      </div>
    
    </motion.div>
  );
}

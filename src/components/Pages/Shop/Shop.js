import React, { useEffect, useState } from "react";
import getActiveProducts from "../../../functions/getActiveProducts";
import ItemCard from "../../ItemCard/ItemCard";
import { motion } from "framer-motion/dist/framer-motion";

export default function Shop() {
  const [productos, setProductos] = useState(null);

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
    <div>
      <ul>
        {productos ? productos.map((p) => <li key={p.id}>

        <ItemCard product={p} />

        </li>) : null}
      </ul>
    </div>
    </motion.div>
  );
}

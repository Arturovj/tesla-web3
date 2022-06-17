import React, { useEffect, useState } from "react";
import getActiveProducts from "../../../functions/getActiveProducts";
import ItemCard from "../../ItemCard/ItemCard";
import "./Shop.css";
import { motion } from "framer-motion/dist/framer-motion";
import HashLoader from "react-spinners/HashLoader";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    duration: 5,
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

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
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration : 0.3}}
      exit={{ opacity: 0 }}
    >
   
      <div className="shop">
        {loading ? (
          <div className="loader">
            <HashLoader color="red" size={100} />
          </div>
        ) : (
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            variants={imageAnimate}
          >
          <div>
            <motion.ul variants={container} initial="hidden" animate="show">
              {productos
                ? productos.map((p) => (
                    <motion.li
                      variants={item}
                      style={{ color: "white" }}
                      key={p.id}
                    >
                      <ItemCard product={p} />
                    </motion.li>
                  ))
                : null}
            </motion.ul>
          </div>
          </motion.div>
        )}
      </div>
      </motion.div>
    </>
  );
}
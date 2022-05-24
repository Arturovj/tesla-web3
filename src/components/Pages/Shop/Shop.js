import React, { useEffect, useState } from "react";
import getActiveProducts from "../../../functions/getActiveProducts";
import ItemCard from "../../ItemCard/ItemCard";

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
    <div>
      <ul>
        {productos ? productos.map((p) => <li key={p.id}>

        <ItemCard product={p} />

        </li>) : null}
      </ul>
    </div>
  );
}

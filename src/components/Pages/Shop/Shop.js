import React, { useState } from 'react'
import getActiveProducts from '../../../functions/getActiveProducts';



export default function Shop() {
    const [productos, setProductos] = useState(null);
    getActiveProducts();
  return (
    <div>Shop</div>
  )
}

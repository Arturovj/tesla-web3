import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import getProductById from '../../../functions/getProductById'

export default function Producto() {
    const { id } = useParams()
    const [productInfo, setProductInfo] = useState(null);

useEffect(() => {
    async function getProductInfo(){
        const product = await getProductById(id);
        setProductInfo(product)
    }
    getProductInfo()
}, [id])

  return (
    <div>Producto: {productInfo?.name}</div>
  )
}

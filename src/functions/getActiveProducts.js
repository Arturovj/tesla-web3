import { db } from "../firebase/credenciales";

import {collection, getDocs } from "firebase/firestore";

export default async function (){
    const collectionRef = collection(db, "products");
    const snaps = await getDocs(collectionRef);
    const productos = [];
    snaps.forEach((doc) => {
        productos.push(doc.data())
    });
  console.log(productos)
}
import React from 'react'
import { useNavigate } from "react-router-dom";
import { useCarritoContext } from '../../../contexts/carritoContext'
import { useUserContext } from '../../../contexts/userContext';
import createCheckoutSession from '../../../functions/createCheckoutSession';

export default function Carrito() {
    const { carrito } = useCarritoContext();
    const { user } = useUserContext()
    let navigate = useNavigate();

    console.log(carrito)

    function isAuthenticated(){
        if(user){
            createCheckoutSession(user.uid, carrito)
        }
        if (!user){
                console.log("you have to login")
                navigate("/login");
        }
    }

  return (

    <div>
        Tu Carrito:
        {carrito.map((producto) => (
        <p>{producto.name}</p>
    ))}

            <button onClick={isAuthenticated}>BUY</button>

        </div>
  )
}

import React from 'react'
import { Navigate } from 'react-router-dom';
import { useCarritoContext } from '../../../contexts/carritoContext'
import { useUserContext } from '../../../contexts/userContext';

export default function Carrito() {
    const { carrito } = useCarritoContext();
    const { user } = useUserContext()


    function isAuthenticated(){
        if(user){
                 console.log("comprar")
        }
        if (!user){
                console.log("you have to login")
                return <Navigate to="/login" replace />;
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

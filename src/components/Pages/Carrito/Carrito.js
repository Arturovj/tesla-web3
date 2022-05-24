import React from 'react'
import { useCarritoContext } from '../../../contexts/carritoContext'
import { useUserContext } from '../../../contexts/userContext';

export default function Carrito() {
    const { carrito } = useCarritoContext();
    const { user, setUser } = useUserContext()

    function isAuthenticated(){
        if(user){
                 console.log("comprar")
        }
        if (!user){
              //redireccion a login
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

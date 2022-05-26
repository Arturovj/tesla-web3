import React from 'react'
import { useNavigate } from "react-router-dom";
import { useCarritoContext } from '../../../contexts/carritoContext'
import { useUserContext } from '../../../contexts/userContext';
import createCheckoutSession from '../../../functions/createCheckoutSession';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Carrito() {
    const { carrito } = useCarritoContext();
    const { user } = useUserContext()
    let navigate = useNavigate();

    console.log(carrito)

    function isAuthenticated(){
        if(user){
            createCheckoutSession(user.uid, carrito)
            toast.success('Redirecting!', {
                position: "top-center",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        if (!user){
                console.log("you have to login")
                navigate("/login");
        }
    }

  return (

    <div>
        <ToastContainer
position="top-center"
autoClose={7000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
        Tu Carrito:
        {carrito.map((producto) => (
            <div>
                <img src={producto.images[0]} alt={producto.name} />
        <p>{producto.name}</p>
        </div>
        
    ))}

            <button onClick={isAuthenticated}>BUY</button>

        </div>
  )
}

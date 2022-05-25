import React from 'react'
import { auth } from "../../../firebase/credenciales";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Perfil() {
    let navigate = useNavigate();


    function logout() {
        signOut(auth);
        navigate('/')
    }
  return (<>
    <div>Perfil</div>


    <button onClick={logout}>Cerrar Sesión</button>
    </>
  )
}

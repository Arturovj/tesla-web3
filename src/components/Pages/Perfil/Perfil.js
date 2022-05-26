import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase/credenciales";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import getPaymentByUID from "../../../functions/getPaymentsByUID";
import { useUserContext } from "../../../contexts/userContext";

export default function Perfil() {
  const { user } = useUserContext();
  const [payments, setPayments] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function getPayments() {
      if (!user) return;
      const payments = await getPaymentByUID(user.uid);
      setPayments(payments);
    }
    getPayments();
  }, [user]);

  function logout() {
    signOut(auth);
    navigate("/");
  }

  return(
      
    <>{user ?  (<div>
        <div>Perfil</div>
        <div>Welcome {user.email} - {user.uid}</div>

        {/* {payments.length > 0 && payments.map((payment )=>{payment.amount/100})} */}
  
        <button onClick={logout}>Cerrar Sesión</button>
        </div> ):( "LOGIN PLEASE")}
      
    </>
  );
}

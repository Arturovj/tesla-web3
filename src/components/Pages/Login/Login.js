import React from "react";
import loginEmail from "../../../functions/loginEmail";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import createCheckoutSession from "../../../functions/createCheckoutSession";
import { useCarritoContext } from "../../../contexts/carritoContext";
import { useUserContext } from "../../../contexts/userContext";


export default function Login() {
    const { carrito } = useCarritoContext()
    const { user, setUser } = useUserContext()


  let navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginEmail(email, password);
    createCheckoutSession(user.uid, carrito)
    navigate("/perfil");
  }

  return (
    <>
    <div className="body">
     <div className="main">
  <input type="checkbox" id="chk" aria-hidden="true" />

  <div className="signup">
    <form>
      <label for="chk" aria-hidden="true">
        Sign up
      </label>
      <input type="text" name="txt" placeholder="User name" required="" />
      <input type="email" name="email" placeholder="Email" required="" />
      <input type="password" name="pswd" placeholder="Password" required="" />
      <button>Sign up</button>
    </form>
  </div>

  <div className="login">
    <form onSubmit={(e) => login(e)}>
      <label for="chk" aria-hidden="true">
        Login
      </label>
      <input type="text" name="email" placeholder="example@example.com"></input>
      <input type="password" name="password" placeholder="password"></input>
      <button>Login</button>
    </form>
  </div>
</div>;
</div>
</>
  );
}



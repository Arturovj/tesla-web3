import React from "react";
import loginEmail from "../../../functions/loginEmail";
import { useNavigate } from 'react-router-dom';

export default function Login() {

    let navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginEmail(email, password);
    navigate('/perfil')
  }

  return (
    <>
      <div>Login</div>
      <form onSubmit={(e) => login(e)}>
        <input
          type="text"
          name="email"
          placeholder="example@example.com"
        ></input>
        <input type="password" name="password" placeholder="password"></input>
        <button>Login</button>
      </form>
    </>
  );
}

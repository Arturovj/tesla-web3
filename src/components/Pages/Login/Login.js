import React, { useState } from "react";
import loginEmail from "../../../functions/loginEmail";
import registerEmail from "../../../functions/registerEmail";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import createCheckoutSession from "../../../functions/createCheckoutSession";
import { useCarritoContext } from "../../../contexts/carritoContext";
import { useUserContext } from "../../../contexts/userContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function Login() {
  const { carrito } = useCarritoContext();
  const { user, setUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    try {
      await loginEmail(email, password);
      toast.success('Redirecting!', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
      
              setTimeout(() => {
                  navigate("/perfil");
                }, 2000);
    } catch (err) {
      setError(err.message);
      toast.error('Auth/password not valid', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

      
    }
  };

  // function login(e) {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   loginEmail(email, password);

  //   toast.success('Redirecting!', {
  //       position: "top-center",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       });

  //       setTimeout(() => {
  //           navigate("/perfil");
  //         }, 2000);

  //   // createCheckoutSession(user.uid, carrito)
  // }

  function register(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    registerEmail(email, password);
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="body">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            {error && <p className="error"></p>}
            <form onSubmit={handleSubmit}>
              <label for="chk" aria-hidden="true">
                Login
              </label>
              <input
                type="text"
                name="email"
                placeholder="example@example.com"
              />
              <input type="password" name="password" placeholder="password" />
              <button>Login</button>
              <div className="reset">
              <Link  to="/reset">Reset Password</Link>
              </div>
              
            </form>
          </div>

          <div className="login">
            <form onSubmit={(e) => register(e)}>
              <label for="chk" aria-hidden="true">
                Sign up
              </label>
              <input
                type="text"
                name="email"
                placeholder="example@example.com"
              ></input>
              <input
                type="password"
                name="password"
                placeholder="password"
              ></input>
              <button>Sign Up</button>
            </form>
          </div>
        </div>
        ;
      </div>
    </>
  );
}

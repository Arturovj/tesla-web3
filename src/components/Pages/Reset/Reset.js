import React from "react";
import { useUserContext } from "../../../contexts/userContext";
import resetPassword from "../../../functions/resetPassword";
import { ToastContainer } from "react-toastify";

export default function Reset() {
  const { user, setUser } = useUserContext();


    function reset(e) { 
        e.preventDefault();
        const email = e.target.email.value;
        resetPassword(email);
        
    toast.success('Sending a ResetPassword Email!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

        setTimeout(() => {
            navigate("/login");
          }, 2000);
        

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

          <div className="login">
            <form onSubmit={(e) => reset(e)}>
              <label for="chk" aria-hidden="true">
                Reset Password
              </label>
              <input
                type="text"
                name="email"
                placeholder="example@example.com"
              ></input>
              <button>Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

import { auth } from "../firebase/credenciales";
import {sendPasswordResetEmail} from "firebase/auth";


async function resetPassword(email) {
    const result = await sendPasswordResetEmail(auth, email, {url: 'http://localhost:3000/login'});
    console.log(result);
    return result;
}

export default resetPassword
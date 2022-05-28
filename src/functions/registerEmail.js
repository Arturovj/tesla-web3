import { auth } from "../firebase/credenciales";
import { createUserWithEmailAndPassword } from "firebase/auth";

async function registerEmail(email, password) {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
    return result;
}

export default registerEmail
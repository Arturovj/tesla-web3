import { db } from "../firebase/credenciales";
import { collection, getDocs} from "firebase/firestore"

async function getPaymentByUID(uid) {
    const collectionRef = collection(db, `customers/${uid}/payments`);
    const snaps = await getDocs( collectionRef );
    const payments = snaps.docs.map((snap => snap.data()))
    return payments;
}

export default getPaymentByUID
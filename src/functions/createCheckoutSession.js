import { db } from "../firebase/credenciales";
import { collection, doc, addDoc, onSnapshot } from "firebase/firestore";

async function createCheckoutSession(uid, cart) {
    const collectionRef = collection (db, `customers/${uid}/checkout_sessions`);
    const { id } = await addDoc(collectionRef, {
        mode: "payment",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
        collect_shipping_address: true,
        line_items:cart.map(item=> {
            return{
                quantity:1,
                price:item.priceId,
            }
        })
    });

   const cancelarStreaming = onSnapshot(doc(db, `customers/${uid}/checkout_sessions/${id}`),
    
    (snapshot) => {
        let url = snapshot.data().url;
        console.log("url desde snapshot", url);
        if(url){
            cancelarStreaming();
            window.location.href = url;
        }
    }
    
    )
}

export default createCheckoutSession
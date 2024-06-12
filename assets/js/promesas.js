import {db} from "./firebase.js"
import {addDoc, collection} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

export const registrarSolicitud = async(registro)=>{
    const referencia = await addDoc (collection(db,"registros"),registro)
}
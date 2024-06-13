import {db} from "./firebase.js";
import {addDoc, collection, getDocs} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const registrarSolicitud = async(registro)=>{
    const referencia = await addDoc (collection(db,"registros"),registro)
}
export const datos = async()=>{
    const ref= collection(db,"registros");
    const qSnap = await getDocs(ref);
    let lista = []
    qSnap.forEach((doc)=>{
        console.log(doc.data());
        lista.push({...doc.data(),id:doc.id})
    });
    console.log(lista);
    return lista;
}
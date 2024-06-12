import { registrarSolicitud } from "./promesas.js";
window.addEventListene("load",()=>{
    document.getElementById("registrarU").addEventListener("click",registrar)    
})
const registrar = ()=>{
    let elementNombre=document.getElementById("nombre"); 
    let elementApellido=document.getElementById("apellido"); 
    let elementEdad=document.getElementById("edad"); 
    let elementTelefono=document.getElementById("telefono"); 
    let elementCorreo=document.getElementById("correo"); 
    let elementUbicacion=document.getElementById("ubicacion"); 
    let elementSi=document.getElementById("si"); 
    let elementNo=document.getElementById("no"); 
    let elementComentario=document.getElementById("comentario");
    
    let valnombre= elementNombre.value;
    let valapellido= elementApellido.value;
    let valedad= elementEdad.value;
    let valtelefono= elementTelefono.value;
    let valcorreo= elementCorreo.value;
    let valubicacion= elementUbicacion.value;
    let valsi= elementSi.value;
    let valno= elementNo.value;
    let valcomentario= elementComentario.value;

    let solicitud = {
        nombre:valnombre,
        apellido:valapellido,
        edad:valedad,
        telefono:valtelefono,
        correo:valcorreo,
        ubicacion:valubicacion,
        comentario:valcomentario
    }


    
}

function validarcampo(  ){
    campovacio("nombre");
    campovacio("apellido");
    campovacio("edad");
    campovacio("telefono");
    campovacio("correo");

}

function campovacio(vacio){
    let campo = document.getElementById(vacio);
    console.log(campo);
    let campovalor = campo.value;
    console.log(campovalor);
    let parrafo = document.getElementById("p"+vacio);
    if(campovalor.trim()==""){
        console.log("El campo se encuentra vacio")
        campo.style.borderColor = "red";
        parrafo.style.display = "block";
    }
    else{
        console.log("Se encuentran datos en el campo")
        campo.style.borderColor = "green";
        parrafo.style.display = "none";
    }

}


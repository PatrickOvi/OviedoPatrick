import { registrarSolicitud, datos} from "./promesas.js";
window.addEventListener("load",()=>{
    document.getElementById("registrarU").addEventListener("click",registrar, validarcampo);
    mostrardatos();
    document.getElementById("btnfondo").addEventListener("click",cambiarFondo); 
//    document.getElementById("btnfuente").addEventListener("click",cambiarFuente);   
})

//La const registrar envia los datos de la solicitud al "registrarSolicitud" que se encuentra en el 
//firebase.js para enviarlo a la base de datos
const registrar = ()=>{
    let elementNombre=document.getElementById("nombre"); 
    let elementApellido=document.getElementById("apellido"); 
    let elementEdad=document.getElementById("edad"); 
    let elementTelefono=document.getElementById("telefono"); 
    let elementCorreo=document.getElementById("correo"); 
    let elementUbicacion=document.getElementById("ubicacion"); 
    let elementRadio=document.getElementById("radio"); 
    let elementComentario=document.getElementById("comentario");
    
    let valnombre= elementNombre.value;
    let valapellido= elementApellido.value;
    let valedad= elementEdad.value;
    let valtelefono= elementTelefono.value;
    let valcorreo= elementCorreo.value;
    let valubicacion= elementUbicacion.value;
    let valradio= elementRadio.value;
    let valcomentario= elementComentario.value;

    let solicitud = {
        nombre:valnombre,
        apellido:valapellido,
        edad:valedad,
        telefono:valtelefono,
        correo:valcorreo,
        ubicacion:valubicacion,
        jugado:valradio,
        comentario:valcomentario
    }

    registrarSolicitud(solicitud).then(()=>{
        alert("La solicitud se a enviado");
        cargardatos()
    }).catch((error)=>{
        console.log(error);
    });

    
}

//La const validarcampo tal como lo dice valida si estan correctamente los campos del formulario 
// utilizando funciones como la funcion de validar campovacio para revisar si el campo esta con algun dato o no 
// y si no lo esta informarle al usuario que llene el campo
const validarcampo = ()=>{
    campovacio("nombre");
    campovacio("apellido");
    campovacio("edad");
    campovacio("telefono");
    campovacio("correo");

}

//Con este const puedo mostrar los datos almacenados en la base de datos en una tabla 
const mostrardatos = ()=>{
    datos().then((usuarios)=>{
        console.log(usuarios)
        let cuerpo = ""
        usuarios.forEach((r)=>{
            cuerpo += "<tr>"
            cuerpo += "<td>"+r.nombre+"</td>"
            cuerpo += "<td>"+r.apellido+"</td>"
            cuerpo += "<td>"+r.edad+"</td>"
            cuerpo += "<td>"+r.telefono+"</td>"
            cuerpo += "<td>"+r.correo+"</td>"
            cuerpo += "<td>"+r.ubicacion+"</td>"
            cuerpo += "<td>"+r.radio+"</td>"
            cuerpo += "<td>"+r.comentario+"</td>"
            cuerpo += "</tr>";
        })
        document.getElementById("tabla").innerHTML = cuerpo;

        usuarios.forEach((r)=>{
            let elemento = document.getElementById(r.id);
            elemento.addEventListener("click",()=>{
                document.getElementById("nombre").value = r.nombre;
                document.getElementById("apellido").value = r.apellido;
                document.getElementById("edad").value = r.edad;
                document.getElementById("telefono").value = r.telefono;
                document.getElementById("correo").value = r.correo;
                document.getElementById("ubicacion").value = r.ubicacion;
                document.getElementById("radio").value = r.radio;
                document.getElementById("comentario").value = r.comentario;
            });
        })
    })
}

// esta funcion revisa si el campo se encuentra con algun dato o no
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

//Esta funcion cambia el color del fondo de la pagina 
function cambiarFondo(){
    let eBody = document.body;
    let fondo = eBody.style.backgroundColor;
    let eH1 = document.getElementsByClassName("titulo");
    let inputs = document.getElementsByTagName("input");
    console.log(inputs)

    if(fondo == "black"){
        eBody.style.backgroundColor = "#EB0029";
        for (let index = 0; index < eH1.length; index++) {
            const element = eH1[index];
            element.style.color = "#EB0029";
        }

        for (let index = 0; index < inputs.length; index++) {
            const element = inputs[index];
            element.style.borderColor = "#EB0029";
        }
    }else{
        eBody.style.backgroundColor = "black";
        for (let index = 0; index < eH1.length; index++) {
            const element = eH1[index];
            element.style.color = "black";
        }

        
        for (let index = 0; index < inputs.length; index++) {
            const element = inputs[index];
            element.style.borderColor = "black";
        }
    }
    
}

//esta funcion cambia el tamaño de la fuente
//function cambiarFuente(){
//    let zoom = document.getElementsByClassName("zFuente");
//   for (let x= 0; x < zoom.lenght; x++){
//    let zoom = zoom[x];    
//    let tamaño = parseFloat(window.getComputedStyle(zoom).fontSize);
//    let nuevoT = tamaño * 1.2;
//    zoom.style.fontSize = nuevoT + "px";}
//}
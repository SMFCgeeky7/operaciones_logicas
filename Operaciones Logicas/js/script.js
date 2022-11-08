let lista = [];

function btn_registrar(){

    let nombre = document.getElementById("inpNombre").value;
    let apellido = document.getElementById("inpApellido").value;
    let telefono = document.getElementById("inpTelefono").value;

    document.getElementById("inpNombre").value = "";
    document.getElementById("inpApellido").value = "";
    document.getElementById("inpTelefono").value = "";

    if (nombre === ""){
       document.getElementById("lblNombre").style.color = "red";
       document.getElementById("inpNombre").style.color = "red";
       alert("Ingresa tu nombre porfavor.");
       return;
    }
    if (apellido === ""){
       document.getElementById("lblApellido").style.color = "red";
       document.getElementById("inpApellido").style.color = "red";
       alert("Ingresa tu apellido porfavor.");
       return;
    }
    if(telefono === ""){
       document.getElementById("lblTelefono").style.color = "red";
       document.getElementById("inpTelefono").style.color = "red";
       alert("Ingresa tu telefono porfavor.");
       return;
    }

    objJson = {
        "nombre": nombre,
        "apellido": apellido,
        "telefono": telefono,
    }

    lista.push(objJson);

    let contador = 0;
    let html = "";
    while (contador < lista.length) {
        console.log(lista[contador]);
        html = html + `<h4 id="lblOutput">
        ${lista[contador].nombre + " " + lista[contador].apellido + " " + lista[contador].telefono}</h4>`
    
        contador = contador + 1;
    }

    document.getElementById("div_lista").innerHTML = html;
    console.log("- - -");

}

function btn_buscar(){
    let nombreB = document.getElementById("inp_buscar").value;
    alert(nombreB);
    let contador = 0;

    while(contador < lista.length){
        if(lista[contador].nombre === nombreB){
            alert("Lo encontré.");
        }else{
            alert("No lo encontré.");
        }
        contador = contador + 1;
    }

}
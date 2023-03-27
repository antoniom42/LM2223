function  validar()  {
    /*Variables necesarias*/
    var  nombre = document.getElementById("nombre").value;
    var  apellido = document.getElementById("apellido").value;
    var  mail = document.getElementById("mail").value;
    var telef = document.getElementById("telef").value;
    var municipio = document.getElementById("municipio").value;
    var cp = document.getElementById("cp").value;
    var direccion = document.getElementById("direccion").value;
    var numtarj = document.getElementById("numtarj").value;
    var caducidad = document.getElementById("caducidad").value;
    var cvv = document.getElementById("cvv").value;
    var validmail =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var dig=/^[0-9]+$/;
    var validvisa=/^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
    var validmastercard=/^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;

    /*Datos del comprador*/
    if (nombre=="") {
        document.getElementById("vnombre").innerHTML= "Este campo es obligatorio";
    } else {
        document.getElementById("vnombre").innerHTML= "";
    }

    if (apellido=="") {
        document.getElementById("vapellido").innerHTML= "Este campo es obligatorio";
    } else {
        document.getElementById("vapellido").innerHTML= "";
    }

    if (mail=="") {
        document.getElementById("vmail").innerHTML= "Este campo es obligatorio";
    } else  if (validmail.test(mail)){
        document.getElementById("vmail").innerHTML= ""; 
        } else {
            document.getElementById("vmail").innerHTML= "El formato no es válido";
        }

    if (telef=="") {
        document.getElementById("vtelef").innerHTML= "";
    } else {
        if (telef.length!=9){
            document.getElementById("vtelef").innerHTML= "El formato no es válido";
        } else { if (dig.test(telef)) {
                    document.getElementById("vtelef").innerHTML= "";
        } else {  document.getElementById("vtelef").innerHTML= "Este campo solo admite dígitos";
            }
        }
    }

    /*Dirección de envío*/
    if (municipio=="") {
        document.getElementById("vmunicipio").innerHTML= "Este campo es obligatorio";
    } else {
        document.getElementById("vmunicipio").innerHTML= "";
    }

    if (cp=="") {
        document.getElementById("vcp").innerHTML= "Este campo es obligatorio";
    } else {
        if (cp.length!=5){
            document.getElementById("vcp").innerHTML= "El formato no es válido";
        } else { if (dig.test(cp)) {
                    document.getElementById("vcp").innerHTML= "";
        } else {  document.getElementById("vcp").innerHTML= "Este campo solo admite dígitos";
            }
        }
    }

    if (direccion=="") {
        document.getElementById("vdireccion").innerHTML= "Este campo es obligatorio";
    } else {
        document.getElementById("vdireccion").innerHTML= "";
    }

    /*Datos de pago*/
    let tarj = document.querySelector('input[name="tarj"]:checked');
    if(tarj) {
        document.getElementById('vtarj').innerHTML = "";
    } else {
        document.getElementById('vtarj').innerHTML = "Selecciona el tipo de tarjeta";
    }

    if (tarj==visa) {
        if (numtarj=="") {
            document.getElementById("vnumtarj").innerHTML= "Este campo es obligatorio";
            document.getElementById("vcaducidad").innerHTML= "Este campo es obligatorio";
            document.getElementById("vcvv").innerHTML= "Este campo es obligatorio";
        } else if (validvisa.test(numtarj)){
            document.getElementById("vnumtarj").innerHTML= "";
        } else {
            document.getElementById("vnumtarj").innerHTML= "El formato no es válido";
        }
    }
    if (tarj==mastercard) {
        if (numtarj=="") {
            document.getElementById("vnumtarj").innerHTML= "Este campo es obligatorio";
            document.getElementById("vcaducidad").innerHTML= "Este campo es obligatorio";
            document.getElementById("vcvv").innerHTML= "Este campo es obligatorio";
        } else if (validmastercard.test(numtarj)){
            document.getElementById("vnumtarj").innerHTML= "";
        } else {
            document.getElementById("vnumtarj").innerHTML= "El formato no es válido";
        }
    }
}
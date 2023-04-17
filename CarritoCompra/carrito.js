function sumar(a){
    b=parseInt(document.getElementById(a).innerHTML);
    b++;
    document.getElementById(a).innerHTML=b;
}

function restar(a){
    b=parseInt(document.getElementById(a).innerHTML);
    b--;
    if(b<0){
        b=0;
    }
    document.getElementById(a).innerHTML=b;
}

/* function carrito() {
    document.getElementById("menucarrito").style.display= 'block';
}*/
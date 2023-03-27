var carro = [
    {id:0, titulo:'teclado', precio:34.90, uds:0, img:'0.png'},
    {id:1, titulo:'raton', precio:109.89, uds:0, img:'1.png'},
    {id:2, titulo:'monitor', precio:228.60, uds:0, img:'2.png'},
    {id:3, titulo:'disco', precio:28.99, uds:0, img:'3.png'},
    {id:4, titulo:'iphone', precio:1289.00, uds:0, img:'4.png'},
    {id:5, titulo:'altavoz', precio:119.99, uds:0, img:'5.png'},

]

    function sumar(a){
    let producto=carro[a];
    producto['uds']++;
    carro[a]=producto;
    document.getElementById('id'+a).innerHTML=producto['uds'];
    localStorage.setItem('carro', JSON.stringify(carro));
    refrescar();
}

function restar(a){
    let producto=carro[a];
    if(producto['uds']>0){
        producto['uds']--;
        carro[a]=producto;
    }
    document.getElementById('id'+a).innerHTML=producto['uds'];
    localStorage.setItem('carro', JSON.stringify(carro));
    refrescar();
}

function carrito(){
    var menu=document.getElementById('menucarrito');
    /*var producto=document.getElementById('producto');*/
    if(menu.style.left=='-35.5%'){
        menu.style.left='0%';
    }
    else{
        menu.style.left='-35.5%';
    }

}

function refrescar(){
    let listaCompra=document.getElementById('lista')
    listaCompra.innerHTML='';
    let total=0;

    for(let i=0;i<carro.length;i++){
        
        let producto=carro[i];
        if(producto['uds']>0){
            let nodo=document.createElement('div');
            let img=document.createElement('img');
            let span1=document.createElement('span');
            let span2=document.createElement('span');
            img.src=i+'.png';
            span1.innerHTML=' '+producto['precio'].toFixed(2)+'€ ';
            span2.innerHTML=' '+producto['uds'];
            document.getElementById('id'+i).innerHTML=producto['uds'];
            nodo.appendChild(img);
            nodo.appendChild(span1);
            nodo.appendChild(span2);
            listaCompra.appendChild(nodo);
            total=total+producto['uds']*producto['precio'];
        }
    }
    document.getElementById('total').innerHTML = 'Total: ' + total.toFixed(2)+'€';
}
function iniciar(){
    let almacenado=localStorage.getItem('carro');
        if(almacenado!=null){
            almacenado=JSON.parse(almacenado);
            carro=almacenado;

            refrescar();
    }
}
function comprar() {
    window.location.assign("formulariocarro.html");
}


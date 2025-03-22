function consultarPrecio(){
   
    let elementoFruta = document.getElementById("numeroFruta")
    let fruta = elementoFruta.value;
    let Precio = elementoPrecio.value;

    switch (Precio) {
        case "1":
        alert("el precio de la fruta:"+ elementoFruta.textContent + " es:" + "$15")
        break;
        case "2":
            alert("el precio de la fruta:"+ elementoFruta.textContent + " es:"+ "$20")
            break;
        case "3":
            alert("el precio de la fruta:"+ elementoFruta.textContent + " es:"+ "$25")
            break;
}
}

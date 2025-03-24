function consultarPrecio(){
   
    let elementoFruta = document.getElementById("numeroFruta")
    let fruta = elementoFruta.value;
    let Precio = elementoPrecio.value;

    switch (fruta) {
        case "1":
            elementoFruta.textContent = "$15"
        break;
        case "2":
            elementoFruta.textContent= "$20"
            break;
        case "3":
            elementoFruta.textContent = "$25"
            break;
}
alert("el precio de la fruta es: " + elementoFruta.textContent)
}

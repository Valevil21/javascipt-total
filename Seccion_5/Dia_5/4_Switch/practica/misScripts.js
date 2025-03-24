function consultarPrecio(){
   
    let elementoFruta = document.getElementById("numeroFruta")
    let fruta = elementoFruta.value;
    let Precio = elementoPrecio.value;

<<<<<<< HEAD
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
=======
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
>>>>>>> 367091a552e2f18fce605db60f0f1642132755cb
}

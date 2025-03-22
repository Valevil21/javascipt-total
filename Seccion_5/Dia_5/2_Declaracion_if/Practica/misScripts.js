function evaluarParametro(){

    let elementoCantidad = document.getElementById("valorParametro")
    let elementoRespuesta = document.getElementById("respuesta")

    if(elementoCantidad < 1 ){
       elementoRespuesta.textContent = alert("hola mundo")
    }
}
function mostrarResultado(valor) {
    document.getElementById("resultado").value = valor;
}

function calcular(operacion) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        mostrarResultado("Error");
        return;
    }

    switch (operacion) {
        case '+': resultado = num1 + num2; break;
        case '-': resultado = num1 - num2; break;
        case '*': resultado = num1 * num2; break;
        case '/': resultado = num2 !== 0 ? num1 / num2 : "Error"; break;
    }
    mostrarResultado(resultado);
}

function raiz() {
    let num1 = parseFloat(document.getElementById("num1").value);
    mostrarResultado(num1 >= 0 ? Math.sqrt(num1) : "Error");
}

function potencia() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    mostrarResultado(Math.pow(num1, num2));
}

function absoluto() {
    let num1 = parseFloat(document.getElementById("num1").value);
    mostrarResultado(Math.abs(num1));
}

function numeroAleatorio() {
    mostrarResultado(Math.random().toFixed(4));
}

function redondearCercano(){
    const elementoContenido = document.getElementById("resultado");
    const textoActual = elementoContenido.textContent;
    const num1 = Number(textoActual);
    const resultado = Math.round(num1);
    elementoContenido.textContent = resultado || textoActual;
    
}
  

function redondearArriba(){
  const elementoContenido = document.getElementById("resultado");
    const textoActual = elementoContenido.textContent;
    const num1 = Number(textoActual);
    const resultado = Math.floor(num1);
    elementoContenido.textContent = resultado || textoActual;
    
}



function redondearAbajo(){
  const elementoContenido = document.getElementById("resultado");
    const textoActual = elementoContenido.textContent;
    const num1 = Number(textoActual);
    const resultado = Math.ceil(num1);
    elementoContenido.textContent = resultado || textoActual;
    
}

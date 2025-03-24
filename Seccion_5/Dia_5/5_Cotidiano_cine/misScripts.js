function recomendarPelicula(genero){
    let edad = document.getElementById("edad").value;
    let elementoRecomendacion = document.getElementById("recomendacion");
    let pelicula =  "";

    
    
   
    edad = parseInt(edad);

    switch (genero) {
        case 'drama':
            if(edad<13){
                pelicula =  "Casablanca"}
               else if(edad >= 13 && edad <= 15){
                       pelicula = "The Shawshank Redemption"}
               else if(edad >= 16){ pelicula = "Taxi Driver"}  
            
            break;

        case 'comedia':
            if(edad<13){
                pelicula =  "Back to the Future"}
               else if(edad >= 13 && edad <= 15){
                       pelicula = "The Truman Show"}
               else if(edad >= 16){ pelicula = "The Wolf of Wall Street"}
               
  
            break;

        case 'musical':
            if(edad<13){
                pelicula =  "La La Land"}
               else if(edad >= 13 && edad <= 15){
                       pelicula = "Les Misérables"}
               else if(edad >= 16){ pelicula = "The Rocky Horror Picture Show"}
               
            break;

        case 'crimen':
            if(edad<13){
                pelicula =  "No hay opciones"}
               else if(edad >= 13 && edad <= 15){
                       pelicula = "El Secreto de sus Ojos"}
               else if(edad >= 16){ pelicula = "The Godfather"}
            break;
}
 elementoRecomendacion.textContent = pelicula;
}

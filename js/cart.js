//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let articles = [];
document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch (
    "https://japdevdep.github.io/ecommerce-api/cart/987.json"
    );
    articles = (await response.json()).articles;
    console.log(articles)
    
});


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let articles = [];
document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch (
    "https://japdevdep.github.io/ecommerce-api/cart/987.json"
    );
    articles = (await response.json()).articles;
    
    mostrarArticles(articles)
    
});
  const mostrarArticles = articles => {
    console.log(articles)
    articles.forEach(article =>{
      console.log(article)
      document.getElementById("imagen").innerHTML = article.src;
      document.getElementById("nombre").innerHTML = article.name;
      document.getElementById("cant").innerHTML = article.count;
      document.getElementById("moneda").innerHTML = article.currency;
      document.getElementById("precio").innerHTML = article.unitCost;
      document.getElementById("subt").innerHTML = article.unitCost * article.count;

      
      
    })};





    /*let cantidad = article.count.value
    const sumar = () => {
      articles.forEach(article =>{
    cantidad == article.count.value++;
    })

document.addEventListener("DOMContentLoaded", function (e) {
  document.getElementById("suma").addEventListener("click", sumar);})};*/



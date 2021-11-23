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

<<<<<<< Updated upstream
=======
  const mostrarArticles = articles => {
    console.log(articles)
    articles.forEach(article =>{
      console.log(article)
      document.getElementById("imagen").innerHTML = `<img src="` + article.src + `" alt="Imagen del articulo">
      `;
      document.getElementById("nombre").innerHTML = article.name;
      document.getElementById("cant").value = article.count;
      document.getElementById("moneda").innerHTML = article.currency;
      document.getElementById("precio").innerHTML = article.unitCost;
      document.getElementById("subt").innerHTML = article.unitCost * document.getElementById("cant").value;
      
var cant = document.getElementById('cant');

var updatesubt = function () {
      document.getElementById("subt").innerHTML = article.unitCost * cant.value;    
};

var costoEnvio = function (){
  if(document.getElementById('standard').checked){
    document.getElementById('envio').innerHTML = +document.getElementById("subt").innerHTML * 5 / 100;
  }
  if(document.getElementById('express').checked){
    document.getElementById('envio').innerHTML = +document.getElementById("subt").innerHTML * 7 / 100;
  }
  if(document.getElementById('premium').checked){
    document.getElementById('envio').innerHTML = +document.getElementById("subt").innerHTML * 15 / 100;
  }
};

var updatetotal = function(){
      document.getElementById('total').innerHTML = +document.getElementById("subt").innerHTML + +document.getElementById("envio").innerHTML ;    
  };

    window.onload = function() {
        costoEnvio();
        updatetotal();
}();
    cant.addEventListener('input', function () {
        updatesubt();
        costoEnvio();
        updatetotal();
        
});
    $(document).ready(function(){
  $('input[type=radio]').click(function(){
    costoEnvio();
    updatetotal();
});
});

});
  
};










const expresiones = {
  calle: /^[a-zA-Z0-9À-ÿ\s]{2,30}$/,
  nPuerta: /^\d{1,14}$/,
  apto: /^\d{1,14}$/,
  esq: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  pais: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  nTarjeta: /(([0-9]{4}\s){3}[0-9]{4})$/,
  nameLname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  vencimineto: /^\d{2}\/\d{2}$/,
  codSeg: /^\d{3}$/,
  ci: /^\d{1,10}$/,
  nCuenta: /^\d{1,15}$/,
};



const validarprim = () => {
if(!expresiones.calle.test(document.getElementById("adress").value)){
  alert("El nombre de la calle debe contener números y/o letras!");
}
if(!expresiones.nPuerta.test(document.getElementById("number").value)){
  alert("El número de puerta debe contener números!");
}
if(!expresiones.apto.test(document.getElementById("ap").value)){
  alert("El número de apartamento debe contener números!");
}
if(!expresiones.esq.test(document.getElementById("esq").value)){
  alert("El nombre de la calle debe contener números y/o letras!");
}
if(!expresiones.ciudad.test(document.getElementById("ciud").value)){
  alert("El nombre de la ciudad debe contener letras!");
}
if(!expresiones.pais.test(document.getElementById("pais").value)){
  alert("El nombre del país debe contener letras!");
}


};


const validarformpago = () => {
if(document.getElementById('credito').checked){
if(!expresiones.nTarjeta.test(document.getElementById("num").value)){
  alert("El numero de tarjeta debe contener 16 números!");
}
if(!expresiones.nameLname.test(document.getElementById("nombreyap").value)){
  alert("Nombre y Apellido debe contener letras!");
}
if(!expresiones.vencimineto.test(document.getElementById("fechav").value)){
  alert("Fecha de vencimiento debe tener el siguiente formato: 01/01");
}
if(!expresiones.codSeg.test(document.getElementById("codigo").value)){
  alert("El código verificador debe contener 3 números!");
}
if(!expresiones.ci.test(document.getElementById("ci").value)){
  alert("Ingrese su número de documento correctamente!");
}
else{
  alert("Su compra ha sido realizada con éxito");
}


}
if(document.getElementById('transferencia').checked){
  if(!expresiones.nCuenta.test(document.getElementById("cuentab").value)){
    alert("La casilla de número de cuenta debe contener solamente números!");
  }
  else{
    alert("Su compra ha sido realizada con éxito");
  }
}
};

document.getElementById("confirmar").addEventListener("click", function() {
  validarprim();
  validarformpago();
});
>>>>>>> Stashed changes

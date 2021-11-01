const Submit = () => {

const txtusuario = document.getElementById("usuario"); 
const txtpassword = document.getElementById("pwd"); 
const usuario = txtusuario.value;
const password = txtpassword.value;
if (usuario && password) { 
    txtusuario.value=="usuario";
     txtpassword.value=="password";
localStorage.setItem("usuario", usuario);
window.location.href ="index.html";
} 
else{
alert("Ingrese usuario y contraseña correspondientes");
}
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("submit").addEventListener("click", Submit);

});
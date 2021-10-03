const Submit = () => {

const txtemail = document.getElementById("email"); 
const txtpassword = document.getElementById("pwd"); 
const email = txtemail.value;
const password = txtpassword.value;
if (email && password) { 
    txtemail.value=="email";
     txtpassword.value=="password";
localStorage.setItem("email", email);
window.location.href ="index.html";
} 
else{
alert("Ingrese email y contraseña correspondientes");
}
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("submit").addEventListener("click", Submit);

});
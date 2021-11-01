"use strict";

const obj = {};
const GuardarObj = () => {

const txtFname = document.getElementById("fname"); 
const txtSname = document.getElementById("sname"); 
const txtLname = document.getElementById("lname");
const txtSlname = document.getElementById("slname");
const txtDateofbirth = document.getElementById("dateofbirth");
const txtEmail = document.getElementById("email");
const txtPhone = document.getElementById("phone");

const pnombre = txtFname.value;
const snombre = txtSname.value;
const apellido = txtLname.value;
const sapellido = txtSlname.value;
const fecha = txtDateofbirth.value;
const correo = txtEmail.value;
const tel = txtPhone.value;

obj.pname = pnombre;
obj.sname = snombre;
obj.ape = apellido;
obj.sape = sapellido;
obj.date = fecha;
obj.correo = correo;
obj.cel = tel;

txtFname.value = "";
txtSname.value = "";
txtLname.value = "";
txtSlname.value = "";
txtDateofbirth.value = "";
txtEmail.value = "";
txtPhone.value = "";


localStorage.setItem("pn", JSON.stringify(obj.pname));
localStorage.setItem("sn", JSON.stringify(obj.sname));
localStorage.setItem("ape", JSON.stringify(obj.ape));
localStorage.setItem("sape", JSON.stringify(obj.sape));
localStorage.setItem("date", JSON.stringify(obj.date));
localStorage.setItem("mail", JSON.stringify(obj.correo));
localStorage.setItem("phone", JSON.stringify(obj.cel));
localStorage.setItem("data", JSON.stringify(obj));
console.log("La data ahora es"+(localStorage.getItem("data")));
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
document.getElementById("guardar").addEventListener("click", GuardarObj);

document.getElementById("nombre").innerHTML = localStorage.getItem("pn");
document.getElementById("snombre").innerHTML = localStorage.getItem("sn");
document.getElementById("papellido").innerHTML = localStorage.getItem("ape");
document.getElementById("sapellido").innerHTML = localStorage.getItem("sape");
document.getElementById("fecha").innerHTML = localStorage.getItem("date");
document.getElementById("mail").innerHTML = localStorage.getItem("mail");
document.getElementById("tel").innerHTML = localStorage.getItem("phone");

});



/* JSON.stringify() es para crear un JSON string de un objeto o un array.  localStorage.setItem("data", JSON.stringify(obj)); */

/*document.getElementById("nombre").innerHTML = JSON.stringify(localStorage.getItem(obj[''])); */
/*
const datos = [];
const GuardarDatos = () => {

const txtFname = document.getElementById("fname"); 
const txtSname = document.getElementById("sname"); 
const txtLname = document.getElementById("lname");
const txtSlname = document.getElementById("slname");
const txtDateofbirth = document.getElementById("dateofbirth");
const txtEmail = document.getElementById("email");
const txtPhone = document.getElementById("phone");

const pnombre = txtFname.value;
const snombre = txtSname.value;
const apellido = txtLname.value;
const sapellido = txtSlname.value;
const fecha = txtDateofbirth.value;
const correo = txtEmail.value;
const tel = txtPhone.value;

datos.pname = pnombre;
datos.sname = snombre;
datos.ape = apellido;
datos.sape = sapellido;
datos.date = fecha;
datos.mail = correo;
datos.cel = tel;

localStorage.setItem("datos", JSON.stringify(datos));
console.log(JSON.parse(localStorage.getItem("datos")));
}
document.getElementById("nombre").innerHTML =  JSON.stringify(datos.pname);
document.getElementById("snombre").innerHTML =  JSON.stringify(datos.sname);
document.getElementById("papellido").innerHTML =  JSON.stringify(datos.ape);
document.getElementById("sapellido").innerHTML =  JSON.stringify(datos.sape);
document.getElementById("fecha").innerHTML =  JSON.stringify(datos.date);
document.getElementById("email").innerHTML =  JSON.stringify(datos.mail);
document.getElementById("tel").innerHTML =  JSON.stringify(datos.cel);*/
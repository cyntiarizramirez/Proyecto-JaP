const showList = (productos) =>{
    const lista = document.createElement("ul");
    for (let producto of productos){
        const li_producto = document.createElement("li");
    }
    lista.appendChild(li_producto);
    document.body.appendChild(lista);
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultProductos){
        if (resultProductos.status === "ok"){
            showList(resultProductos.data);
            console.log({
                productos: resultProductos.data,
            });
        }

    })

});
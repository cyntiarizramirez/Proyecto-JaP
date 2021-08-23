const showList = (productos) =>{
    const lista = document.createElement("ul");
    for (let producto of productos){
        const li_producto = document.createElement("li");
        li_producto.appendChild(
        document.createTextNode(`${producto.name}`)
        );
        const informacion = document.createElement("ul");
        const li_informacion = document.createElement("li");
        li_informacion.appendChild(
            document.createTextNode(`${producto.description}`)
        );
        li
        lista.appendChild(li_producto);
        informacion.appendChild(li_informacion);
    }
    document.body.appendChild(lista);
};

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultProducts){
        if (resultProducts.status === "ok"){
            showList(resultProducts.data);
            console.log({
                productos: resultProducts.data,
            });
        }

    })

});
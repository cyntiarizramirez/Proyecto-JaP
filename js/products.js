const showList = (productos) =>{
    const lista = document.createElement("ul");
    for (let producto of productos){

        const img = document.createElement("img");
            img.src = producto.imgSrc;
                lista.appendChild(img);

        const li_producto = document.createElement("li");
            li_producto.appendChild(document.createTextNode(`${producto.name}`));
                lista.appendChild(li_producto);

        const li_description = document.createElement("ul");
            li_description.appendChild(document.createTextNode(`${producto.description}`));
                li_producto.appendChild(li_description);

        
        const li_cost = document.createElement("li");
            li_cost.appendChild(document.createTextNode(` ${producto.currency} ${producto.cost}`));
                li_description.appendChild(li_cost);

        const li_soldCount = document.createElement("li");
            li_soldCount.appendChild(document.createTextNode(`${producto.soldCount}`));
                    li_description.appendChild(li_soldCount);

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
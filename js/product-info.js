var product = {};
var currentcommentsArray = [];

function showrelacionados(array){
    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let relacionados = array[i];
        htmlContentToAppend += `
        <a href="product-info.html"> ` + relacionados + `</a>
        `
        document.getElementById("relatedProducts").innerHTML = htmlContentToAppend;
    }
}

function showcomments(currentcommentsArray){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentcommentsArray.length; i++){
        let comment = currentcommentsArray[i];

        htmlContentToAppend += `
        
        <div class="row">
                <div class="d-flex justify-content-between align-items-center">
                    <div  <p class="text1">`+ comment.score +` <span class="fa fa-star checked"></span></p></div>
                    <div class="user d-flex flex-row align-items-center">  <span><small class="font-weight-bold text-primary">` + comment.user + `</small> <small class="font-weight-bold">` + comment.description + ` </small></span> </div> <small align-right>  ` + comment.dateTime + ` </small>
            </div>
            </div>
        `
        document.getElementById("commentlist").innerHTML = htmlContentToAppend;
    }
}
function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("name");
            let productDescriptionHTML = document.getElementById("description");
            let productCostHTML = document.getElementById("cost");
            let productCurrencyHTML = document.getElementById("productCurrency");
            let productsoldCountHTML = document.getElementById("soldCount")
            let productCategoryHTML= document.getElementById("category");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.cost;
            productCurrencyHTML.innerHTML = product.currency;
            productsoldCountHTML.innerHTML = product.soldCount;
            productCategoryHTML.innerHTML = product.category;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
            showrelacionados(product.relatedProducts);
        }
    });
});



document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultcomments){
        if (resultcomments.status === "ok"){
            showcomments(resultcomments.data);

            console.log({
                productos: resultcomments.data,
            });
        }
    });
});

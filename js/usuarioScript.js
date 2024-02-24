const productsContentDiv = document.querySelector("#productsContentDiv");
const urlAPI = "http://localhost:8080/api/v1/products"

const xhr = new XMLHttpRequest();
xhr.open("GET", urlAPI + "/");
xhr.responseType = "json";
xhr.send();

xhr.onload = function() {
    xhr.response.forEach(el => {
        const newProduct = document.createElement("div");
        newProduct.className =  "class=col mb-5";
        productsContentDiv.appendChild(newProduct).innerHTML = `<div class="card h-100">
                                                                    <!-- Product image-->
                                                                    <div class="card-body p-3 d-flex align-items-center" style="height:225px">
                                                                        <img class="card-img-top" src="${el.imageURL}" alt="${el.subcategory}" style="max-height: 200px"/>
                                                                    </div>
                                                                    <!-- Product details-->
                                                                    <div class="card-body p-4">
                                                                        <div class="text-center">
                                                                            <!-- Product name-->
                                                                            <h5>${el.name}</h4>
                                                                            <h6 class="fw-bolder">${el.brand}</h6>
                                                                            <!-- Product price-->
                                                                            ${el.price} USD
                                                                            <br><br>
                                                                            <p>${el.description}</p>
                                                                        </div>
                                                                    </div>
                                                                    <!-- Product actions-->
                                                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Ver mas +</a></div>
                                                                    </div>
                                                                </div>`
    });
}
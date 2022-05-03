"use strict";
(() => {
    class Shop {
        constructor() {
            this.productsDiv = document.getElementById("products_list");
            this.getAllProducts();
            this.DOMEvents();
        }
        getAllProducts() {
            this.ajaxCall("productsController", { action: "getListProducts" });
        }
        ajaxCall(url, data) {
            $.ajax({
                type: "POST",
                url: url,
                data: data,
            }).done((resp) => {
                switch (data.action) {
                    case "getListProducts":
                        this.responseGetListProducts(resp);
                        break;
                }
            });
        }
        responseGetListProducts(resp) {
            let htmlstring = "";
            resp.forEach(d => {
                htmlstring += `<div class="card" style="width: 18rem;">
                <img src="public/img/shopcart.png" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">${d.Name}</h5>
                  <p class="card-text">Precio: ${d.Price}</p>
                  <button class="btn btn-outline-info">Comprar</button>
                </div>
              </div>`;
            });
            this.productsDiv.innerHTML = htmlstring;
        }
        DOMEvents() {
        }
    }
    const S = new Shop();
})();

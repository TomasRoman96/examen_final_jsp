"use strict";
(() => {
    class Shop {
        constructor() {
            var _a;
            this.productsDiv = document.getElementById("products_list");
            this.userName = (_a = document.getElementById("up")) === null || _a === void 0 ? void 0 : _a.getAttribute("data-u");
            this.arrayProductsShop = [];
            this.arrayProducts = {};
            this.getAllProducts();
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
                    case "addToCart":
                        this.responseAddToCart(resp);
                        break;
                }
            });
        }
        responseGetListProducts(resp) {
            console.log(resp);
            this.arrayProducts = resp;
            let htmlstring = "";
            resp.forEach((d) => {
                htmlstring += `<div class="card" style="width: 18rem;">
                <img src="public/img/shopcart.png" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">${d.Name}</h5>
                  <p class="card-text">Precio: ${d.Price}</p>
                  <button class="btn btn-outline-info btn-buy" data-count=${d.ID}>Comprar</button>
                </div>
              </div>`;
            });
            this.productsDiv.innerHTML = htmlstring;
            this.DOMEvents();
        }
        responseAddToCart(resp) {
            console.log(resp);
        }
        DOMEvents() {
            let Shop = this;
            $(".btn-buy").on("click", function () {
                let id = $(this).attr("data-count");
                Shop.arrayProductsShop.push(id);
                console.log(Shop.arrayProducts);
                console.log(Shop.arrayProductsShop);
                console.log(id);
                if (Shop.userName === "NU") {
                    alertify.error("No se puede comprar si no ha iniciado sesion");
                }
                else {
                    Shop.ajaxCall("productsController", { action: "addToCart", id: id });
                }
            });
        }
    }
    const S = new Shop();
})();

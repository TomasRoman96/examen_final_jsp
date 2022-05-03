(() => {
    class Shop {

        private productsDiv: HTMLInputElement;

        constructor() {
            this.productsDiv = <HTMLInputElement>document.getElementById("products_list");
            this.getAllProducts();
            this.DOMEvents();
        }

        public getAllProducts() {
            this.ajaxCall("productsController", { action: "getListProducts" });
        }

        public ajaxCall(url: string, data: any): void {
            $.ajax({
                type: "POST",
                url: url,
                data: data,
            }).done((resp: any) => {
                switch (data.action) {
                    case "getListProducts":
                        this.responseGetListProducts(resp);
                        break;
                }
            });
        }

        public responseGetListProducts(resp: any):void {
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

        DOMEvents(): void {

        }
    }
    const S = new Shop();
})();
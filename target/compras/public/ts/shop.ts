(() => {
    class Shop {

        private productsDiv: HTMLInputElement;
        private cartButton: HTMLInputElement | any;
        private userName: HTMLInputElement | any;
        private arrayProductsShop: number[];
        private arrayProducts: {};

        constructor() {
            this.productsDiv = <HTMLInputElement>document.getElementById("products_list");
            this.userName = document.getElementById("up")?.getAttribute("data-u");
            this.arrayProductsShop = [];
            this.arrayProducts = {};
            this.getAllProducts();
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
                    case "addToCart":
                        this.responseAddToCart(resp);
                        break;
                }
            });
        }

        public responseGetListProducts(resp: any):void {
            console.log(resp);
            this.arrayProducts = resp;
            let htmlstring = "";
            resp.forEach((d:any) => {
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

        public responseAddToCart(resp: any):void{
            console.log(resp);
        }

        DOMEvents(): void {
            let Shop = this;
            $(".btn-buy").on("click",function(){
            let id: any = $(this).attr("data-count");
            Shop.arrayProductsShop.push(id);
            console.log(Shop.arrayProducts);
            console.log(Shop.arrayProductsShop);
            console.log(id);
            if( Shop.userName === "NU"){
                alertify.error("No se puede comprar si no ha iniciado sesion");
            }
            else{
                Shop.ajaxCall("productsController",{action:"addToCart",id: id});
            }});
        }
    }
    const S = new Shop();
})();
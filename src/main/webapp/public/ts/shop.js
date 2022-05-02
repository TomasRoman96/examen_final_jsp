const GLOB = {
    products_div: document.getElementById("products_list")
};

const getAllProducts = () =>{
    ajaxCall("productsController",{action: "getListProducts"});
}

const ajaxCall = (url, data) => {
    $.ajax({
      type: "POST",
      url: url,
      data: data,
    }).done((resp) => {
      switch (data.action) {
        case "getListProducts":
            ajaxRespGetListProducts(resp);
          break;
      }
    });
  };


const ajaxRespGetListProducts = (resp) =>{
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
    GLOB.products_div.innerHTML = htmlstring;
}

getAllProducts();
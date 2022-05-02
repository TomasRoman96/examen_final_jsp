const GLOB = {
  userName: $("#w-username").attr("data-id") 
};

const dataTableCustomize = {
  language: {
    paginate: {
      first: "Primero",
      last: "Ultimo",
      next: "Siguiente",
      previous: "Anterior",
    },
    decimal: "",
    emptyTable: "No hay información",
    info: "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
    infoEmpty: "Mostrando 0 to 0 of 0 Entradas",
    infoFiltered: "(Filtrado de _MAX_ total entradas)",
    infoPostFix: "",
    thousands: ",",
    lengthMenu: "Mostrar _MENU_ Entradas",
    loadingRecords: "Cargando...",
    processing: "Procesando...",
    search: "Buscar:",
    zeroRecords: "Sin resultados encontrados",
  },
};

const getOrders = () => {
  ajaxCall("productsController", {
    action: "getOrders",
    username: GLOB.userName
  });
};

const ajaxCall = (url, data) => {
  $.ajax({
    type: "POST",
    url: url,
    data: data,
  }).done((resp) => {
    switch (data.action) {
      case "getOrders":
        ajaxRespgetOrders(resp);
        break;
    }
  });
};

getOrders();

const ajaxRespgetOrders = (resp) => {
  dataTableBuilder(
    resp,
    "#orders",
    dataTableCustomize.language,
    [
      {
        data: "ID",
      },
      {
        data: "TotalPrice",
      },
      {
        data: "State",
      },
      {
        render: () => {
          return `<div class="container-fluid d-flex"><button type="button"class="btn btn-outline-info view-order-details">Ver Detalle</button></div>`;
        },
      },
    ]
  );
};

const dataTableBuilder = (resp, tableId, language, columns) => {
  $(tableId).DataTable().clear().destroy();
  $(tableId).DataTable({
    language: language,
    data: resp,
    pageLength: 20,
    columns: columns,
  });
  dataTableBuilderEventsClick(tableId,".view-order-details","view_order_details");
};

const dataTableBuilderEventsClick = (tableId,HTMLId,action) =>{
  $(`${tableId} tbody`).on("click", HTMLId, () => {
    switch(action){
      case "view_order_details":
      {
        let orderId = $(HTMLId).closest("tr").find("td:eq(0)").text();
        viewOrderDetails(orderId);
        break;
      }
    }
  });
}

const viewOrderDetails = (orderId) =>{
  $.redirect("orden.jsp", {orderid: orderId}, "POST");
}

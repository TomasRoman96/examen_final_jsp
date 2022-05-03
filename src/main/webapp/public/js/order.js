const GLOB = {
    orderId: $("#w-orderid").attr("data-id") 
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
  
  const getOrderInfo = () => {
    ajaxCall("productsController", {
      action: "getOrderInfo",
      orderId: GLOB.orderId
    });
  };
  
  const ajaxCall = (url, data) => {
    $.ajax({
      type: "POST",
      url: url,
      data: data,
    }).done((resp) => {
      console.log(resp);
      switch (data.action) {
        case "getOrderInfo":
          ajaxRespgetOrderInfo(resp);
          break;
      }
    });
  };
  
  getOrderInfo();
  
  const ajaxRespgetOrderInfo = (resp) => {
    dataTableBuilder(
      resp,
      "#order_info",
      dataTableCustomize.language,
      [
        {
          data: "Name",
        },
        {
          data: "Quantity",
        },
        {
            data: "TotalPrice",
        }
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
  };
  
  
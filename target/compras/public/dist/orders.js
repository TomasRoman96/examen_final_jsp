"use strict";
(() => {
    class Order {
        constructor() {
            var _a;
            this.dataTableCustomize = {
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
            this.orderId = (_a = document.getElementById("w-orderid")) === null || _a === void 0 ? void 0 : _a.getAttribute("data-id");
            this.getOrderInfo();
            this.DOMEvents();
        }
        getOrderInfo() {
            this.ajaxCall("productsController", {
                action: "getOrderInfo",
                orderId: this.orderId
            });
        }
        ;
        ajaxCall(url, data) {
            $.ajax({
                type: "POST",
                url: url,
                data: data,
            }).done((resp) => {
                console.log(resp);
                switch (data.action) {
                    case "getOrderInfo":
                        this.responseGetOrderInfo(resp);
                        break;
                }
            });
        }
        ;
        responseGetOrderInfo(resp) {
            this.dataTableBuilder(resp, "#order_info", this.dataTableCustomize.language, [
                {
                    data: "Name",
                },
                {
                    data: "Quantity",
                },
                {
                    data: "TotalPrice",
                }
            ]);
        }
        ;
        dataTableBuilder(resp, tableId, language, columns) {
            $(tableId).DataTable().clear().destroy();
            $(tableId).DataTable({
                language: language,
                data: resp,
                pageLength: 20,
                columns: columns,
            });
        }
        ;
        DOMEvents() {
        }
    }
    const O = new Order();
})();

"use strict";
(() => {
    class Dashboard {
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
            this.userName = (_a = document.getElementById("w-username")) === null || _a === void 0 ? void 0 : _a.getAttribute("data-id");
            this.getOrders();
            this.DOMEvents();
        }
        getOrders() {
            console.log(this.userName);
            this.ajaxCall("productsController", {
                action: "getOrders",
                username: this.userName
            });
        }
        ;
        ajaxCall(url, data) {
            $.ajax({
                type: "POST",
                url: url,
                data: data,
            }).done((resp) => {
                switch (data.action) {
                    case "getOrders":
                        this.responseGetOrders(resp);
                        break;
                }
            });
        }
        ;
        responseGetOrders(resp) {
            this.dataTableBuilder(resp, "#orders", this.dataTableCustomize.language, [
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
            ]);
        }
        dataTableBuilder(resp, tableId, language, columns) {
            $(tableId).DataTable().clear().destroy();
            $(tableId).DataTable({
                language: language,
                data: resp,
                pageLength: 20,
                columns: columns,
            });
            this.dataTableBuilderEventsClick(tableId, ".view-order-details", "view_order_details");
        }
        ;
        dataTableBuilderEventsClick(tableId, HTMLId, action) {
            $(`${tableId} tbody`).off("click");
            $(`${tableId} tbody`).on("click", HTMLId, () => {
                switch (action) {
                    case "view_order_details":
                        {
                            let orderId = $(HTMLId).closest("tr").find("td:eq(0)").text();
                            this.viewOrderDetails(orderId);
                            break;
                        }
                }
            });
        }
        viewOrderDetails(orderId) {
            $.redirect("orden.jsp", { orderid: orderId }, "POST");
        }
        DOMEvents() {
        }
    }
    const D = new Dashboard();
})();

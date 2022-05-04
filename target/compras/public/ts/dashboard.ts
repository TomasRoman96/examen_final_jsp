(() => {
    class Dashboard {
        userName: HTMLInputElement | any;
        dataTableCustomize = {
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
        constructor() {
            this.userName = document.getElementById("w-username")?.getAttribute("data-id");
            this.getOrders();
            this.DOMEvents();
        }

        public getOrders(): void {
            console.log(this.userName);
            this.ajaxCall("productsController", {
                action: "getOrders",
                username: this.userName
            });
        };

        public ajaxCall(url: string, data: any): void {
            $.ajax({
                type: "POST",
                url: url,
                data: data,
            }).done((resp: any) => {
                switch (data.action) {
                    case "getOrders":
                        this.responseGetOrders(resp);
                        break;
                }
            });
        };

        public responseGetOrders(resp: any) {
            this.dataTableBuilder(
                resp,
                "#orders",
                this.dataTableCustomize.language,
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
        }

        public dataTableBuilder(resp: any, tableId: string, language: any, columns: any): void {
            $(tableId).DataTable().clear().destroy();
            $(tableId).DataTable({
                language: language,
                data: resp,
                pageLength: 20,
                columns: columns,
            });
            this.dataTableBuilderEventsClick(tableId, ".view-order-details", "view_order_details");
        };

        public dataTableBuilderEventsClick(tableId: string, HTMLId: string, action: string): void {
            $(`${tableId} tbody`).off("click");
            $(`${tableId} tbody`).on("click", HTMLId, () => {
                switch (action) {
                    case "view_order_details":
                        {
                            let orderId: string = $(HTMLId).closest("tr").find("td:eq(0)").text();
                            this.viewOrderDetails(orderId);
                            break;
                        }
                }
            });
        }

        public viewOrderDetails(orderId: string): void {
            $.redirect("orden.jsp", { orderid: orderId }, "POST");
        }

        DOMEvents():void {
        }
    }

    const D = new Dashboard();
})();
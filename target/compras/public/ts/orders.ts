(() => {
    class Order {
        private orderId: HTMLInputElement;
        private dataTableCustomize = {
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
            this.orderId = $("#w-orderid").attr("data-id");
            this.getOrderInfo();
            this.DOMEvents();
        }

        public getOrderInfo(): void {
            this.ajaxCall("productsController", {
                action: "getOrderInfo",
                orderId: this.orderId.value
            });
        };

        public ajaxCall(url: string, data: any): void {
            $.ajax({
                type: "POST",
                url: url,
                data: data,
            }).done((resp: any) => {
                console.log(resp);
                switch (data.action) {
                    case "getOrderInfo":
                        this.responseGetOrderInfo(resp);
                        break;
                }
            });
        };

        public responseGetOrderInfo(resp: any): void {
            dataTableBuilder(
                resp,
                "#order_info",
                this.dataTableCustomize.language,
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

        public dataTableBuilder(resp: any, tableId: string, language: any, columns: any): void {
            $(tableId).DataTable().clear().destroy();
            $(tableId).DataTable({
                language: language,
                data: resp,
                pageLength: 20,
                columns: columns,
            });
        };

        DOMEvents(): void {
        }
    }
})();
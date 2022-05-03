"use strict";
(() => {
    class Register {
        constructor() {
            this.responseRegister = (resp) => {
                resp != "success" ? (alertify.error('No se ha logrado crear el usuario, intente nuevamente.')) :
                    (alertify.success('Se ha creado su cuenta, sera redireccionado a la pagina de login.'), setTimeout(() => { location.href = 'login.jsp'; }, 3000));
            };
            this.registerButton = document.getElementById("register-button");
            this.inputName = document.getElementById("name");
            this.inputUsername = document.getElementById("username");
            this.inputPassword = document.getElementById("password");
            this.DOMEvents();
        }
        saveUser() {
            this.ajaxCall("usersController", {
                action: "register",
                name: this.inputName.value,
                username: this.inputUsername.value,
                password: this.inputPassword.value,
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
                    case "register":
                        this.responseRegister(resp);
                        break;
                }
            });
        }
        ;
        DOMEvents() {
            this.registerButton.addEventListener("click", () => { this.saveUser(); });
        }
    }
    const R = new Register();
})();

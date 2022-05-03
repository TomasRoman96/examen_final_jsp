"use strict";
(() => {
    class Login {
        constructor() {
            this.loginButton = document.getElementById("login-button");
            this.inputUsername = document.getElementById("username");
            this.inputPassword = document.getElementById("password");
            this.DOMEvents();
        }
        login() {
            this.ajaxCall("usersController", {
                action: "login",
                username: this.inputUsername.value,
                password: this.inputPassword.value,
            });
        }
        ajaxCall(url, data) {
            $.ajax({
                type: "POST",
                url: url,
                data: data,
            }).done((resp) => {
                switch (data.action) {
                    case "login":
                        this.responseLogin(resp);
                        break;
                }
            });
        }
        responseLogin(resp) {
            console.log(resp);
            resp != "OK" ? (alertify.error(`${resp}`)) :
                (alertify.success('Ha iniciado sesion, sera redireccionado al panel de usuario.'), setTimeout(() => { location.href = 'dashboard.jsp'; }, 3000));
        }
        DOMEvents() {
            this.loginButton.addEventListener("click", () => { this.login(); });
        }
    }
    const L = new Login();
})();

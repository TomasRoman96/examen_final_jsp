(() => {

    class Login {

        loginButton: HTMLInputElement;
        inputUsername: HTMLInputElement;
        inputPassword: HTMLInputElement;

        constructor() {
            this.loginButton = <HTMLInputElement>document.getElementById("login-button");
            this.inputUsername = <HTMLInputElement>document.getElementById("username");
            this.inputPassword = <HTMLInputElement>document.getElementById("password");
            this.DOMEvents();
        }

        public login() {
            this.ajaxCall("usersController", {
                action: "login",
                username: this.inputUsername.value,
                password: this.inputPassword.value,
            });
        }

        public ajaxCall(url: string, data: any): void {
            $.ajax({
                type: "POST",
                url: url,
                data: data,
            }).done((resp: any) => {
                switch (data.action) {
                    case "login":
                        this.responseLogin(resp);
                        break;
                }
            });
        }

        public responseLogin(resp: any):void {
            console.log(resp);
            resp != "OK" ? (alertify.error(`${resp}`)) :
                (alertify.success('Ha iniciado sesion, sera redireccionado al panel de usuario.'), setTimeout(() => { location.href = 'dashboard.jsp'; }, 3000))
        }

        DOMEvents(): void {
            this.loginButton.addEventListener("click", () => { this.login() });
        }

    }

    const L = new Login();

})();
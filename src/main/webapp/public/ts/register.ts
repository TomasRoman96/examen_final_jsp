(()=>{
    class Register{

        private registerButton: HTMLInputElement;
        private inputName: HTMLInputElement;
        private inputUsername: HTMLInputElement;
        private inputPassword: HTMLInputElement;

        constructor(){
            this.registerButton = <HTMLInputElement>document.getElementById("register-button");
            this.inputName = <HTMLInputElement>document.getElementById("name");
            this.inputUsername = <HTMLInputElement>document.getElementById("username");
            this.inputPassword = <HTMLInputElement>document.getElementById("password");
            this.DOMEvents();
        }

        public saveUser():void{
            this.ajaxCall("usersController", {
              action: "register",
              name: this.inputName.value,
              username: this.inputUsername.value,
              password: this.inputPassword.value,
            });
          };

        public ajaxCall(url:string, data:any):void{
            $.ajax({
              type: "POST",
              url: url,
              data: data,
            }).done((resp:any) => {
              switch (data.action) {
                case "register":
                    this.responseRegister(resp);
                  break;
              }
            });
          };

        public responseRegister = (resp:any):void =>{
            resp != "success" ? (alertify.error('No se ha logrado crear el usuario, intente nuevamente.')) : 
            (alertify.success('Se ha creado su cuenta, sera redireccionado a la pagina de login.'),setTimeout(() => {location.href = 'login.jsp';}, 3000))
        }

        DOMEvents():void {
            this.registerButton.addEventListener("click", ()=>{this.saveUser();});
        }
    }

    const R = new Register();
})();

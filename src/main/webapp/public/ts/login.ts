class Login
{
    private loginButton: HTMLInputElement;
    private inputUsername: HTMLInputElement;
    private inputPassword: HTMLInputElement;

    constructor()
    {
        this.loginButton = <HTMLInputElement>document.getElementById("login-button");
        this.inputUsername = <HTMLInputElement>document.getElementById("username");
        this.inputPassword = <HTMLInputElement>document.getElementById("password");
    }

}
const GLOB = {
    login_button: document.getElementById("login-button"),
    input_username: document.getElementById("username"),
    input_password: document.getElementById("password"),
  };
  
  const login = () => {
    ajaxCall("usersController", {
      action: "login",
      username: GLOB.input_username.value,
      password: GLOB.input_password.value,
    });
  };
  
  const ajaxCall = (url, data) => {
    $.ajax({
      type: "POST",
      url: url,
      data: data,
    }).done((resp) => {
      switch (data.action) {
        case "login":
            ajaxRespLogin(resp);
          break;
      }
    });
  };
  
  const ajaxRespLogin = (resp) =>{
      console.log(resp);
      resp != "OK" ? (alertify.error(`${resp}`)) : 
      (alertify.success('Ha iniciado sesion, sera redireccionado al panel de usuario.'),setTimeout(() => {location.href = 'dashboard.jsp';}, 3000))
  }
  
  GLOB.login_button.addEventListener("click", login);
  
const GLOB = {
  register_button: document.getElementById("register-button"),
  input_name: document.getElementById("name"),
  input_username: document.getElementById("username"),
  input_password: document.getElementById("password"),
};

const saveUser = () => {
  ajaxCall("usersController", {
    action: "register",
    name: GLOB.input_name.value,
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
      case "register":
          ajaxRespRegister(resp);
        break;
    }
  });
};

const ajaxRespRegister = (resp) =>{
    resp != "success" ? (alertify.error('No se ha logrado crear el usuario, intente nuevamente.')) : 
    (alertify.success('Se ha creado su cuenta, sera redireccionado a la pagina de login.'),setTimeout(() => {location.href = 'login.jsp';}, 3000))
}

GLOB.register_button.addEventListener("click", saveUser);

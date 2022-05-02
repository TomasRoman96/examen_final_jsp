<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="public/css/style.css">
    <link rel="stylesheet" href="public/lib/bootstrap/bootstrap.css">
    <link rel="stylesheet" href="public/lib/alertify/css/alertify.css">
    <script src = "public/lib/jquery/jquery.js"></script>
    <script src = "public/lib/bootstrap/popper.min.js"></script>
    <script src = "public/lib/bootstrap/bootstrap.js"></script>
    <script src = "public/lib/alertify/alertify.js"></script>
</head>
<body>
  <section id = "register-form">
    <br>
    <h1 class="display-1 text-center">Registrar Cuenta en Web Shop</h1>
    <br>
      <div class = "container d-flex justify-content-center">
        <div class="form-container"
          <form>
            <div class="mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="name" autocomplete="off" aria-describedby="name">
              </div>
              <div class="mb-3">
                <label for="userame" class="form-label">Usuario</label>
                <input type="text" class="form-control" id="username" autocomplete="off" aria-describedby="username">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="password">
              </div>
              <br>  
              <div class="d-grid gap-2">
                  <button class="btn btn-outline-info " id = "register-button">Crear una cuenta</button>
                </div>
            </form>
            </div>
            </div>
  </section>
  <script src = "public/js/register.js"></script>
</body>
</html>
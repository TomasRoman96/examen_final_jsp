<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Shop - Menu de Compras</title>
    <link rel="stylesheet" href="public/css/style.css">
    <link rel="stylesheet" href="public/lib/bootstrap/bootstrap.css">
    <script src = "public/lib/jquery/jquery.js"></script>
    <script src = "public/lib/bootstrap/popper.min.js"></script>
    <script src = "public/lib/bootstrap/bootstrap.js"></script>
</head>
<body>
    <section id = "navbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">Web Shop</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                </ul>
                <div class="d-flex">
                  <a href = "login.jsp"><button class="btn btn-outline-info">Iniciar Sesion</button></a>
                </form>
              </div>
            </div>
          </nav>
    </section>
    <br>
    <div class="container">
        <h1 class="display-3 text-center">Nuestros Productos</h1>
        <br>
        <div class="d-flex justify-content-center flex-wrap" id="products_list">

        </div>
    </div>

    <script src = "public/js/shop.js"></script>

</body>
</html>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<%
if (session != null) {
   if (session.getAttribute("User") == null) {
    response.sendRedirect("index.jsp");
   }
}
%>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Shop - Panel Usuario</title>
    <link rel="stylesheet" href="public/css/style.css">
    <link rel="stylesheet" href="public/lib/bootstrap/bootstrap.css">
    <link rel="stylesheet" href="public/lib/alertify/css/alertify.css">
    <link rel="stylesheet" href="public/lib/datatable/jquery.dataTables.min.css">
    <script src = "public/lib/jquery/jquery.js"></script>
    <script src = "public/lib/bootstrap/popper.min.js"></script>
    <script src = "public/lib/bootstrap/bootstrap.js"></script>
    <script src = "public/lib/alertify/alertify.js"></script>
    <script src = "public/lib/datatable/jquery.dataTables.min.js"></script>
    <script src = "public/lib/jquery.redirect/jquery.redirect.js"></script>
</head>
<body>
    <section id = "navbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="index.jsp">Web Shop - Panel de Usuario</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    </li>
                  </ul>
                <div class="d-flex">
                  <button class="btn btn-outline-danger">Cerrar Sesion</button>
                </form>
              </div>
            </div>
          </nav>
    </section>
    <br>
    <section id = "table_orders">
        <div class="container table_orders">
            <h1 class="display-3 text-center" id = "w-username" data-id = <%out.print(session.getAttribute("User"));%>>Bienvenido <%out.print(session.getAttribute("User"));%> </h1>
            <br>
            <table id="orders" class="table-responsive">
            <thead>
                <tr>
                    <th>ID DE ORDEN</th>
                    <th>TOTAL PAGADO</th>
                    <th>ESTADO</th>
                    <th>ACCION</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </div>
    </section>

    <script src = "public/js/dashboard.js"></script>

</body>
</html>
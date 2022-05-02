package controllers;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import models.queries.*;
import models.objects.*;
import models.procedures.*;

@WebServlet(name = "usersController", urlPatterns = {"/usersController"})

public class usersController extends HttpServlet{
    usersQueries UQ = new usersQueries();
    validateForms VF = new validateForms();

    public String insertUser(User U){
        String respQuery = UQ.insertNewUser(U);
        return respQuery;
    }

    public ArrayList<User> login(User U){
        ArrayList<User> respQuery = UQ.login(U);
        return respQuery;
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        User U = new User();
        switch(req.getParameter("action")){
            case "register":
            U.setName(req.getParameter("name").toUpperCase());
            U.setUserName(req.getParameter("username").toUpperCase());
            U.setPassword(req.getParameter("password").toUpperCase());
            String respQuery = insertUser(U);
            out.print(respQuery);
            out.flush();
            break;
            case "login":
            String response = "Usuario no encontrado";
            U.setUserName(req.getParameter("username"));
            U.setPassword(req.getParameter("password"));
            ArrayList<User> respQueryLogin = login(U);
            if(respQueryLogin.size() > 0){
                response = VF.validateLogin(respQueryLogin,U,req);
            }
            out.print(response);
            out.flush();
            break;
        }
        
    }
}

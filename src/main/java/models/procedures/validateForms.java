package models.procedures;
import java.util.ArrayList;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import models.objects.User;

public class validateForms {

    public String validateLogin(ArrayList<User> array, User U, HttpServletRequest req){
        String response = "";
        if(U.getUserName().toString().trim() == ""){
            response = "Valores invalidos en Nombre de usuario";
        }

        else if(U.getPassword().toString().trim() == ""){
            response = "Valores invalidos en Contraseña";
        }

        else if(!array.get(0).getUserName().equals(U.getUserName())){

            response = "Nombre Incorrecto";
        }
        else if(!array.get(0).getPassword().equals(U.getPassword())){
            response = "Contraseña incorrectos";
        }

        else{
            response = "OK";
            HttpSession session = req.getSession(true);
            session.setAttribute("User", U.getUserName());
            session.setMaxInactiveInterval(500);
        }
    
        return response;
    }
}

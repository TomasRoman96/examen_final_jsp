package models.procedures;
import java.util.ArrayList;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

public class shop {

    public String addToCart(HttpServletRequest req, String id){
        HttpSession session = req.getSession(true);
        ArrayList<String> productList = (ArrayList<String>) session.getAttribute("shop");
        productList.add(id);
        return "Producto Agregado a la Lista";
    }
}

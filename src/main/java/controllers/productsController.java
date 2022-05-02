package controllers;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.print.DocFlavor.STRING;

import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import models.queries.*;
import models.objects.*;

@WebServlet(name = "productsController", urlPatterns = {"/productsController"})

public class productsController extends HttpServlet{
    productsQueries PQ = new productsQueries();

    public ArrayList<Products> getProductsFromDB(){
        ArrayList<Products> AR = PQ.getProductsFromBD();
        return AR;
    }

    public ArrayList<Order> getOrders(String Username){
        ArrayList<Order> AO = PQ.getOrders(Username);
        return AO;
    }

    public ArrayList<Order> getOrderInfo(String ID){
        ArrayList<Order> AO = PQ.getOrderInfo(ID);
        return AO;
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        switch(req.getParameter("action")){
            case "getListProducts":
            ArrayList<Products> ArrayQuery = getProductsFromDB();
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            out.print(new Gson().toJson(ArrayQuery));
            out.flush();
            break;
            case "getOrders":
            ArrayList<Order> ArrayOrders = getOrders(req.getParameter("username").toString());
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            out.print(new Gson().toJson(ArrayOrders));
            out.flush();
            break;
            case "getOrderInfo":
            ArrayList<Order> ArrayOrderInfo = getOrderInfo(req.getParameter("orderId").toString());
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            out.print(new Gson().toJson(ArrayOrderInfo));
            out.flush();
            break;
        }
        
    }
}

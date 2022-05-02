package models.queries;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import config.*;
import models.objects.*;

public class productsQueries extends DBConnect {

    public ArrayList<Products> getProductsFromBD() {
        ArrayList<Products> data = new ArrayList<Products>();
        try {
            String sql = "call getAllProducts()";
            PreparedStatement statement = getConnect().prepareStatement(sql);
            ResultSet resultSet = statement.executeQuery(sql);
            while (resultSet.next()) {
                Products P = new Products();
                P.setID(resultSet.getInt("ID"));
                P.setName(resultSet.getString("NAME"));
                P.setPrice(resultSet.getInt("PRICE"));
                data.add(P);
            }
            statement.close();
            resultSet.close();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                getConnect().close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return data;
    }

    public ArrayList<Order> getOrders(String Username) {
        ArrayList<Order> data = new ArrayList<Order>();
        try {
            String sql = "call getUserOrders(?)";
            PreparedStatement statement = getConnect().prepareStatement(sql);
            statement.setString(1, Username);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                Order OR = new Order();
                OR.setID(resultSet.getString("ID"));
                OR.setTotalPrice(resultSet.getInt("TOTAL_PRICE"));
                OR.setState(resultSet.getString("STATE"));
                data.add(OR);
            }
            statement.close();
            resultSet.close();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                getConnect().close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return data;
    }

    public ArrayList<Order> getOrderInfo(String ID) {
        ArrayList<Order> data = new ArrayList<Order>();
        try {
            String sql = "call getOrderInfo(?)";
            PreparedStatement statement = getConnect().prepareStatement(sql);
            statement.setString(1, ID);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                Order OR = new Order();
                OR.setName(resultSet.getString("NAME"));
                OR.setTotalPrice(resultSet.getInt("PRICE"));
                OR.setQuantity(resultSet.getInt("QUANTITY"));
                data.add(OR);
            }
            statement.close();
            resultSet.close();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                getConnect().close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return data;
    }

}

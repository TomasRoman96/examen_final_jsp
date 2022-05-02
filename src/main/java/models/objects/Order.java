package models.objects;

public class Order {
    private String ID;
    private int UserId;
    private int TotalPrice;
    private int Quantity;
    private String State;
    private String Name;


    public String getID() {
        return ID;
    }

    public void setID(String id) {
        ID = id;
    }

    public int getUserId() {
        return UserId;
    }

    public void setUserId(int UI) {
        UserId = UI;
    }

    public int getTotalPrice() {
        return TotalPrice;
    }

    public void setTotalPrice(int P) {
        TotalPrice = P;
    }

    public String getState() {
        return State;
    }

    public void setState(String ST) {
        State = ST;
    }

    public int getQuantity() {
        return Quantity;
    }

    public void setQuantity(int Q) {
        Quantity = Q;
    }

    public String getName() {
        return Name;
    }

    public void setName(String NM) {
        Name = NM;
    }
    
}

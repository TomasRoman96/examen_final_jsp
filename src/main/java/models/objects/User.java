package models.objects;

public class User {
    private int ID;
    private String Name;
    private String UserName;
    private String Password;

    public int getID() {
        return ID;
    }

    public void setID(int id) {
        ID = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String N) {
        Name = N;
    }

    public String getUserName() {
        return UserName;
    }

    public void setUserName(String US) {
        UserName = US;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String P) {
        Password = P;
    }

}

package wshhyh;

import java.util.Date;

public class People{
    int id;
    String name;
    Date birthday;

    @Override
    public String toString() {
        return "People{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", birthday=" + birthday +
                '}';
    }
}

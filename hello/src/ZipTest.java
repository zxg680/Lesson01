import java.io.FileOutputStream;
import java.io.ObjectOutputStream;

/**
 * Created by Administrator on 2017/4/22.
 */
public class ZipTest {
    public void wiriteObject() throws Exception {
        Employee harry = new Employee("Harry",22);
        ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("employee.dat"));
        out.writeObject(harry);
    }
}

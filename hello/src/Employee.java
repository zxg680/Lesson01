import java.io.Serializable;
import java.util.Random;

/**
 * Created by Administrator on 2017/3/16.
 */
public class Employee implements Serializable {
    private static int nextId;

    private int id;
    private String name = "";
    private double salary;

    static {
        Random generator = new Random();
        nextId = generator.nextInt(10000);
        System.out.println(" run static ");
    }

    {
        id = nextId;
        nextId++;
        System.out.println(" run ++ ");
    }

    public Employee(String n, double s){
        name =n;
        salary = s;
        System.out.println(" run e(2) ");
    }
    public Employee(double s){

        this("Employ #" + nextId, s);
        System.out.println(" run e(1) ");
    }

    public Employee(){
        System.out.println(" run e() ");
    }

    public String getName(){
        return name;
    }
    public double getSalary(){
        return salary;
    }
    public int getId(){
        return id;
    }
}

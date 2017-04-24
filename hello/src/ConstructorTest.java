import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import java.util.zip.ZipOutputStream;

/**
 * Created by Administrator on 2017/3/16.
 */
public class ConstructorTest {
    public static void main(String[] args) {
        Employee[] staff = new Employee[3];

        staff[0] = new Employee("Harry", 4000);
        staff[1] = new Employee(60000);
        staff[2] = new Employee();

        for (Employee e : staff) {
            System.out.println("name= " + e.getName() +
                    ", id=" + e.getId() +
                    ", salary=" + e.getSalary() + " ");
        }


    }
    public void testZip() throws Exception{
        String fileName="@c:\\aa.txt";
        ZipInputStream zin = new ZipInputStream(new FileInputStream(fileName));
        ZipEntry entry;
        while((entry = zin.getNextEntry()) != null) {
            //analyze entry;
            //read the content of zin
            zin.closeEntry();
        }
        zin.close();
        //
        Scanner in = new Scanner(zin);
        while(in.hasNextLine()){
            //do something with in.nextLine();
        }
    }
    public void creatNewFile() throws Exception{
        FileOutputStream fout = new FileOutputStream("test.zip");
        ZipOutputStream zout = new ZipOutputStream(fout);
        //for all files
        {
            ZipEntry ze = new ZipEntry("fileName");
            zout.putNextEntry(ze);
            //send data to zout
            zout.closeEntry();
        }
        zout.close();
    }
    public void testPattern(String inputString){
        Pattern pattern = Pattern.compile("patternString");
        pattern = Pattern.compile("patternString", Pattern.CASE_INSENSITIVE + Pattern.UNICODE_CASE);
        Matcher matcher = pattern.matcher(inputString);
        if(matcher.matches()){
            //匹配成功
        }
    }
}

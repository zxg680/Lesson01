import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.zip.CRC32;

/**
 * Created by Administrator on 2017/4/22.
 */
public class FindDirectories {
    public static void main(String[] args){
        if(args.length == 0) {
            args = new String[] {".."};
        }
        try {
            File pathName = new File(args[0]);
            String[] fileNames = pathName.list();

            //enumerate all files in the directory
            for(int i=0; i < fileNames.length; i++) {
                File f=new File(pathName.getPath(), fileNames[i]);
                if(f.isDirectory()){
                    System.out.println(f.getCanonicalPath());
                    main(new String[]{ f.getPath()});
                }
            }
        }catch (IOException e){
            e.printStackTrace();
        }

    }
    //FilenameFilter class
    public class ExtensionFilter implements FilenameFilter {
        private String extension;
        public ExtensionFilter(String ext){
            extension = "." + ext;
        }
        @Override
        public boolean accept(File dir, String name) {
            return name.endsWith(extension);
        }
    }
    private void testMethod(){
        CRC32 crc32 = new CRC32();

        crc32.update('c');
        long checksum = crc32.getValue();
    }
}

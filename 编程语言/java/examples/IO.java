import java.io.*;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

class IOTest {

    public static void main(String[] args) throws IOException {
        fileIO();
    }

    public static void fileIO() throws IOException {
        File testfile = new File("testTmp");
        try (OutputStream os = new FileOutputStream(testfile); InputStream is = new FileInputStream(testfile);) {
            os.write("asdasd".getBytes("utf-8"));
            byte[] buf = new byte[10];
            int len = is.read(buf);
            System.out.println("read length:" + len);
            System.out.println("read content:" + new String(buf, Charset.forName("utf-8")));
            Files.delete(Paths.get("testTmp"));
        }
    }

    public static void filterStream() throws IOException {

    }
}
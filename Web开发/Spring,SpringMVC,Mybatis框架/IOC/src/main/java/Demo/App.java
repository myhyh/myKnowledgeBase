package Demo;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public final class App {

    public static void main(String[] args) {
        ApplicationContext ctx=new ClassPathXmlApplicationContext("SpringContext.xml");
        Foo f=(Foo)ctx.getBean("f1");
        System.out.println(f);
    }
}

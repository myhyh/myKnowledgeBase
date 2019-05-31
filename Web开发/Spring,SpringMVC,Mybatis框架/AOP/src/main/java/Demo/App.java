package Demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public final class App {
    public static void main(String[] args) {
        ApplicationContext context=new ClassPathXmlApplicationContext("SpringContext.xml");
        RealWorker worker=(RealWorker)context.getBean("worker");
        worker.func();
    }
}

package wshhyh;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.io.IOException;

public class App 
{
    public static void main( String[] args ) throws IOException {
        ApplicationContext ctx=new ClassPathXmlApplicationContext("applicationContext.xml");

        //整合Spring后
        SqlSessionFactory sqlSessionFactory=ctx.getBean("sqlSessionFactory",SqlSessionFactory.class);
//      整合Spring前
//        String resource = "mybatis.xml";
//        InputStream inputStream = Resources.getResourceAsStream(resource);
//        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        SqlSession s= sqlSessionFactory.openSession();
        PeopleMapper pm=s.getMapper(PeopleMapper.class);
        People p=pm.selectPeople(1);
        System.out.println(p);
    }
}



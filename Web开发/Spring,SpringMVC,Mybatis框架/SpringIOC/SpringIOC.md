SpringIOC实际上就是一个BeanFactory,一个Container,它需要从外界读取一个对象依赖关系树,按照依赖关系自底向上的构建系统中的所有Bean,然后拼装成整个系统


依赖关系树的存在形式
* xml文件(applicationContext.xml)
* 注解(@Component 表示bean,@Autowired 表示关系,等等)
* java配置类( @Configuration, @Bean, @Import, @DependsOn,...)
* groovy配置文件


读取时创建对应的ApplicationContext即可

```java
//XML
ApplicationContext context = new ClassPathXmlApplicationContext("services.xml", "daos.xml");
//Groovy
ApplicationContext context = new GenericGroovyApplicationContext("services.groovy", "daos.groovy");

//通用型
GenericApplicationContext context = new GenericApplicationContext();
new XmlBeanDefinitionReader(context).loadBeanDefinitions("services.xml", "daos.xml");
context.refresh();
new GroovyBeanDefinitionReader(context).loadBeanDefinitions("services.groovy", "daos.groovy");
context.refresh();
```

可以指定多个文件来配置容器,比如
```java
ApplicationContext context = new ClassPathXmlApplicationContext("services.xml", "daos.xml");
```

就可以把不同用途的bean分类整理

最后加载时不想使用多个xml,也可以用一个总xml,import所有的分xml

```xml
<beans>
    <import resource="services.xml"/>
    <import resource="resources/messageSource.xml"/>
    <import resource="/resources/themeSource.xml"/>

    <bean id="bean1" class="..."/>
    <bean id="bean2" class="..."/>
</beans>
```

读进配置之后,就得到了一系列Bean的定义BeanDefinition

其中包含
* bean在容器中的name
* 初始化相关内容
  * 类全名
  * 构造函数参数
  * 类属性
* 类自身行为相关的配置
  * scope
  * 生命周期回调(初始化方法,销毁方法)
* 其他
  * autowire
  * 懒惰加载


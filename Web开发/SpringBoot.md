# SpringBoot
SpringBoot是Spring全家桶的一套固定解决方案,对常用的组件进行了适配,一定程度上将Spring家族的开发进行了标准化,这样虽然缺失了一些灵活性,但是方便多了,因为已经预先配置了大量框架的默认配置,无需手动编写大量配置文件

其他的库都以Spring插件的形式引入依赖,例如org.mybatis.spring.boot

配置以注解形式为主,而配置文件形式的只剩下了application.properties或者application.yml,一个文件里存放所有集成进来的框架的配置

并且,SpringBoot更提倡Restful的开发方式,前后端更加分离

SpringBoot有一个Web初始项目生成器Spring Initializr http://start.spring.io/ ,可以选择需要添加的组件,创建一个初始的maven项目,这个生成器的主要作用是添加对应的依赖,开发人员很难记住那些长的不行的名字

SpringBoot的另一大优势是,集成了Tomcat服务器,不再需要手工部署,减少了部署版本不匹配导致的疑难杂症,直接运行mvn package 生成jar包,然后用java -jar运行之即可



# 遇到的坑

## 测试post请求时的401错误
原因是Spring security组件进行后台登录验证,阻止了访问,把依赖中的spring security去除即可

另外 Spring session 依赖于 spring security ,去除spring security后若仍使用Spring session则报错
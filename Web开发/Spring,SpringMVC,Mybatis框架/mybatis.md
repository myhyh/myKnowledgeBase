mybatis是orm框架,干的事情就是查数据库,然后把查询结果塞到对象里交给你,下面是一些概念,具体使用见例子

查数据库需要先连接数据库,然后把sql语句给数据库,收到数据库返回的结果后,一个个把结果填到对象里

把连接数据库url,用户名,密码等,放进mybatis的配置文件里,SqlSessionFactoryBuilder通过读取配置文件建立SqlSessionFactory,可以通过调用SqlSessionFactory.openSession()获取数据库连接,配置文件见例子里的src/main/resources/mybatis.xml

然后就是sql语句,通过DAO对象调用增删改查,DAO在mybatis里叫mapper,mapper的配置文件是单独存放的,路径需要在mybatis的配置文件里登记,mybatis启动时就会加载这些mapper,然后关于mapper自身的信息就是增删改查的方法名以及返回的对象类型,还有sql语句,配置文件见src/main/resources/mappers/PeopleMapper.xml

和spring的整合,其实就是把SqlSessionFactory变成一个springBean,交给spring去管理生命周期,接受一个dataSource参数指定数据库参数和一个mapperLocations指定mapper配置文件的路径
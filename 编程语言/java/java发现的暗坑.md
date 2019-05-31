- 数组没有重写equals,所以仍然继承的Object的equals,比较内存地址
- java的返回值不能像C++一样是const,函数也不能是const,所以无法优雅的实现一个对象的内部不可变部分view,比如ArrayList的部分view就非得实现一个sublist类才行

```java
public class JJJ{
    static class T{
        int t;
    }
    T inner=new T();
    public static void main(String[] args){
        JJJ j=new JJJ();
        T t=j.getT();
        t.t++;      //完全可以修改
    }

    public final T getT(){  //这里的final指的是子类不可重写,而不代表返回的T不可修改
        return inner;
    }
}
```

- implement的接口方法不重写,编译时竟然不报错,运行时给我来个AbstractMethodError,气死我了...,而继承抽象类的抽象方法不会有这个问题
- 类型擦除,也就是运行时不存在任何泛型信息,导致instanceof无法对泛型使用
```java
boolean x(Object o){
    // return o instanceof ArrayList<Integer>; //行不通
    // return o instanceof ArrayList<? extends Integer>; //行不通
    return o instanceof ArrayList; //可以
}
```
- 无法implement两个含有相同方法签名的接口
- 子类返回类型是父类返回类型子类的方法重写了父类方法
```java
//Y extends X


class A{
    X f(){...}
}
class B extends A{
    @Override Y f(){...}    //会通过,它重写了父类方法,叫做协变返回类型
}
```

SpringAOP就是允许在方法执行前,执行后,正常返回后,异常返回后插入自定义的语句执行,增强方法的功能而又不直接和原有的逻辑混杂在一起


用代码说话,就是把
```java
method();
```
变成

```java
try{
    try{
        //@Before
        method();
    }finally{
        //@After
    }
    //@AfterReturning
}catch(){
    //@AfterThrowing
}
```

这里的method就被称作Cutpoint,而@Before等等就被称为Aspect

这个变化是在运行时发生,需要运行时修改字节码生成新的类,且是原类型的子类,并覆盖其对应方法,写成上面那个样子
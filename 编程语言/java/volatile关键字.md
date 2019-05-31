修饰变量

保证每次对变量的写入和读取都等价于直接操作内存,而不使用高速缓存的结果,保证一个线程对变量的修改对另一个线程立即可见

并且阻止使用volatile变量之前和之后的指令的重排序

下面是利用volatile的特性实现安全高效的double-check Singleton的例子

```java
class Singleton{
    private volatile Singleton instance = null;
     
    private Singleton() {
         //初始化工作
    }
     
    public static Singleton getInstance() {
        if(instance==null) {    //不加锁检查,效率高
            synchronized (this) {
                if(instance==null)  //加锁检查,保证不出问题
                    instance = new Singleton();
            }
        }
        return instance;
    }
}
```


volatile无法使得多个写操作同步,只能在一写多读,或者同步写,多读(如上例)中使用,要同步,还是synchronized块好使
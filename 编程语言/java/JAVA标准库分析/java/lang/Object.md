#Object 
万物之源

### clone()
convention:对对象进行浅拷贝,逐个成员的复制

实际实现中不一定非得按convention来

Object自身没有实现Cloneable,调clone会throw CloneNotSupportedException

### equals()
对两个对象进行比较其内容是否相等,而==比较的是两个对象的地址,Object的equals就是用==实现的



## JVM实现相关

### finalize()
垃圾回收器回收对象前调用,不建议使用,因为这个调用受到垃圾回收器实现的影响,不受程序员控制

### getClass()
反射机制相关

## 线程同步相关
java所有的对象里都藏着一个锁,可以用wait等待在这个锁上,用notify唤醒一个等待的线程
- wait()
- wait​(long timeoutMillis)
- wait​(long timeoutMillis, int nanos)
- notify()
- notifyAll()

含义一目了然

```
只有对象锁所有者可以notify别的线程
情况:在synchronized方法或synchronized块中
当在static synchronized块中则会成为该类Class对象的所有者
```





## 个人认为非必须

### hashcode()
获取对象的hashcode,Object的实现是native的,获取对象的内存地址
```
个人认为让需要做hashkey的类实现hashcode,不需要的类留着这个真的难受,把这个放到Object里也不知道大佬是怎么想的
```

### toString()
返回对象的字符串表示,用于debug是很好的
```
有些类自己不实现这个,就返回Object的默认实现 类名@hashcode
看着很丑很难受,倒不如不在Object里面默认加,编译时报个错,如果用户想漂亮的输出一个复杂对象,就自己实现一个适配器,加一个toString方法,漂漂亮亮的输出
```
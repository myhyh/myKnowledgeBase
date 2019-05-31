# 创建对象

## 条目1:使用静态工厂替代构造函数

优点:
- 构造函数的名字和类名相同,让人不了解其具体含义,不能了解这些构造函数的不同
  - Rust中的Vec有两种构造函数,new构造一个默认大小的Vec,with_capacity(i32)构造一个制定大小的Vec,一目了然
- 构造函数因为其语义,必须创建一个新对象,静态工厂则不必如此,比如它后面其实是个对象池,或者永远返回同一个单例,等等不同的实现方法
- 构造函数因为其语义,必须创建和其名字相同类型的对象,而静态工厂不必如此,只要是其子类即可
  - 个人认为这使得我们和类库的接触面变小了,只依赖其接口(基类),而子类的创建全交给工厂,依据不同的参数创建不同的子类,这样类库内部实现的变更就对我们不可见.就像类封装了其成员,只暴露其方法,这是包级的封装,使得其中的类对我们不可见,只暴露其接口
  - 由于java可以运行时动态加载类,所以工厂中创建的类甚至可以在编译时不存在,只存在接口,当真正能提供服务的类加载时,向工厂注册,工厂生产时按照注册表生产真正的实体类,这也是JDBC的做法

缺点:
- 不提供构造函数的类,无法继承
  - 但也起到了隐藏对应类的作用,我们实现的类就不应该让客户去继承,客户可以实现我们的接口来把他们的类加进我们的框架
- 无法区分静态工厂和普通静态方法
  - 解决方法,采用统一的命名约定
  - 个人认为,包里定义一个子包,里面专门放构造方法;类里放一个static内部类New,里面专门放静态构造方法是极好的

## 条目2: 采用builder模式创建对象
- java不支持传参数时采用类似python的`名字=值`的模式,所以面对有些参数不是必须时比较蛋疼
- 采用先把对象创建出来然后用setter一个一个设值存在的问题是,这个过程中对象的不变式是不被保证的,如果被别人访问会有大问题

## 条目3: 实现singleton的几种方法
- 静态成员
```java
class A{
    private A(){...}
    public static final A INSTANCE=new A();
}
```
- 静态工厂方法
    ```java
    class A{
        private A(){...}
        private static final A INSTANCE=new A();
        A getInstance(){return INSTANCE;}
    }
    ```
    - 优点在于易于修改单例的实现,比如改成一个线程分配一个实例这样
- 单元素枚举
    ```java
    public enum A{
        INSTANCE;
        private String val;//等等属性值
    }
    ```
    - 优点在于即使反射和反序列化也无法生成第二个对象,是最稳的单例实现方法

## 条目4: 使用私有构造器使得一个类型不可创建实例

## 条目5: 尽量重用对象,不要搞重复创建工作
尽量静态或延迟初始化常量值,只在程序中保留一份

注意:基本类型的自动装箱其实也是创建新对象,也有代价,所以尽量使用基本类型进行操作

不是开销非常大的对象没必要自建对象池,垃圾回收器干得已经够好了,开销大的对象例子:数据库连接
## 条目6: 警惕内存泄漏
即使有垃圾回收器,也会有内存泄漏

对于自己管理自己分配的内存的类,比如容器类,其中的引用是否是有效的,垃圾回收器是不知道的,所以当一个引用无效时我们必须显式的置为null

自己实现的缓存中存放的对象,经常忘记清理,可以采用WeakHashMap来管理

实现观察者模式的时候,注册进来的回调(监听器)经常持有外界对象的引用,但是却没有在用完后解除注册,所以造成内存泄漏,可以在回调中只保存外界对象的弱引用,这样在外界对象的最后一个强引用失效之后,这个回调也就自然不能用了

## 条目7: 尽量别用finalize
finalize是回收对象内存前对对象执行的方法,因为JVM不保证垃圾回收是及时的,所以finalize不能及时的释放资源,对于有资源的对象最好搞个close之类的方法

```java
Foo foo=new Foo();
try{
    foo.xxx();
}finally{
    foo.close();
}
```

而close之后的对象调用任何方法都是不合法的,因为资源已经释放,所以此时应该抛出IllegalStateException

但是finalize可以作为最后一层备用的安全保障,所以有一些需要注意的点
- finalize并不会像c++的析构函数一样调用父类的finalize,必须手动调,(技巧)或者在父类中留一个guard对象(匿名内部类),进行这样的操作
  - ```java
    class Foo{
        Object guard=new Object(){
            @Override final void finalize() throws Throwable{
                Foo.this.finalize();
            }
        }
    }
    ```

## 条目8:重写equals的时候,遵守其约定

equals的约定:
- 自反性 x.equals(x)
- 对称性 x.equals(y) then y.equals(x)
- 传递性 x.equals(y) and y.equals(z) then x.equals(z)
- 一致性 不对x,y进行任何修改,重复调用 x.equals(y) 结果不变
- 非空性 x!=null then !x.equals(null)

何时应该重写equals:
- 对象拥有逻辑相等性,而不仅仅是地址比较
  - 常见场景:一个纯数据类


接下来是一个实现例子
```java
class Point{
    public int x;
    public int y;
    @Override public boolean equals(Object o){
        if(o==null){    //非空性
            return false;
        }
        if(!(o instanceof Point)){
            return false;
        }
        Point p=(Point)o;
        return p.x==x&&p.y==y;
    }
}

```

自反性和非空性是最好满足的,就不提了


### 对称性与传递性
数学里没有子类,所以没考虑这个问题,那么问题来了,两个坐标为(3,4)的点,一个是红色的,一个是黑色的,他们是相等还是不等呢?
```java
class ColorPoint extends Point{
    Color color;
    //假设这里有一个和上面类似的equals实现
}
```
从点的角度看,相等,从有颜色的点看,不相等

拿伪代码看看
```java
a={3,4,红}
b={3,4,黑}
c={3,4,绿}

Point ap=a;
ColorPoint bp=b;
ColorPoint cp=c;

ap.equals(bp)==true;
bp.equals(ap)==false;   //违反对称性

ap.equals(bp)==true;
ap.equals(cp)==true;
bp.equals(cp)==false;   //违反传递性
```
在子类存在的情况下,没法满足对称性和传递性,因为子类说到底,是`包含`了父类,是一种类似`大于`的关系,子类对象一定是父类对象,而父类对象不一定是子类对象,本质上就是不对称的,但是就一定没办法了吗?也不是这样的

只让同类的比不就行了...,其他统统false,这就是JavaScript里的`===`嘛

```java
public boolean equals3(Object o){
    if(!(o.getClass()==getClass())){
        return false;
    }
    return equals(o);
}
```
但是这个治标不治本,有时候我们是真的需要前面那种包含关系的,而且有的时候,甚至需要对非Point继承者验证这种关系,这时候咋办?

```java
interface As<T>{
    T as();
}

class ColorPoint2 implements As<Point>{
    Point p;
    Color color;
    @Override public Point as(){
        return p;
    }
}

//这个放在Point类里
public boolean equals2(As<? extends Point> ap){
    Point p=ap.as();
    return equals(p);
}
```
这其实是拿接口显式的实现了继承

也可以用于实现多继承,但这里的As是不行的,因为这样方法撞名字了,可以整一些AsPoint接口啊,AsInteger接口啊什么的

接下来让它和传统的继承体系兼容,就需要让Point实现As<Point>,这样equals2也可以对所有Point的子类使用了


花里胡哨的结果...
```java
class Point implements As<Point> {
    public int x;
    public int y;
    @Override public boolean equals(Object o){
        if(o==null){    //非空性
            return false;
        }
        if(!(o instanceof Point)){
            return false;
        }
        Point p=(Point)o;
        return p.x==x&&p.y==y;
    }
    @Override public Point as(){
        return this;
    }
    public boolean equals2(As<? extends Point> ap){
        Point p=ap.as();
        return equals(p);
    }
    public boolean equals3(Object o){
        if(!(o.getClass()==getClass())){
            return false;
        }
        return equals(o);
    }
}

class ColorPoint extends Point{
    Color color;
}
interface As<T>{
    T as();
}

class ColorPoint2 implements As<Point>{
    Point p;
    Color color;
    @Override public Point as(){
        return p;
    }
}
```

### 一致性
数学里的对象都不可变,没考虑一致性问题

对象判断相等不要依赖其他不受控,不稳定的,可变的东西

java.net.URL,ip形式的url和域名形式的url判断相等时,会先找dns把url转成ip,再比较,dns那边条目一变,一致性就不受保障了


### 其他的要点
- 重写equals一定要重写hashCode
- 不要让equals过于智能,如果那种逻辑相等关系很智能,那就意味着它是仅限于当前类型的`特殊技能`,倒不如给这个函数换个名字,放在专属的接口里

## 条目9: 重写equals则一定要重写hashCode
java的convention假定equals成立则hashCode一定相等

因为类似HashMap的东西会使用hashCode来对对象分桶

对于每个对象的关键域(在equals中使用了)f
计算hashCode的常用方法:
- boolean -> f?1:0
- byte,char,short,int -> (int)f
- long -> (int)(f^(f>>>32))
- float -> Float.floatToIntBits(f)
- double -> Double.doubleToLongBits(f) -> long -> ...
- 对象 -> f.hashCode()
- 数组 -> 对每个元素计算hashCode

合并多个hashCode result=31*result+c

如果一个类不可变,且计算hashcode开销大,则可以在对象内部缓存其hashcode

## 条目10: 始终重写toString()
Object自带toString太烂,必须按自己的需求重写

应返回所有该对象中重要的信息,如果是容器之类的,当内容太多时可以返回其简略信息

toString返回的信息可以有固定的格式,方便其他使用的程序员parse,但是如果格式变更,他们写的代码就都得改,也可以没有固定的格式,只有一种推荐格式,以防其他人依赖该格式,字符串有没有固定格式应在文档注释中说明

所有toString中可返回的信息,一定得有办法调对象的方法获得

## 条目11: 谨慎重写clone()
clone默认语义是浅复制,很多时候不实用,建议放弃java自带的clone机制,自己实现深复制,对于基本类型和不可变类型(例如String)直接用=就复制了,需要同步的类记得复制时也同步

或者以静态工厂或拷贝构造函数的形式实现复制也挺好

## 条目12: 考虑实现Comparable接口
满足比较关系属性的类型,应当实现Comparable接口,这样就可以方便的排序,用Arrays.sort,以及插进有序容器比如TreeSet

compareTo返回0最好和equals一致,不一致时使用TreeSet之类的会出问题,比如插两个不equals但compareTo为0的进去结果只剩一个了

不一致的例子,BigDecimal("1.00") 和 BigDecimal("1.0") 不是equals的但是compareTo返回0

如果有非标准的Compare关系,可以在类外实现Comparator实现
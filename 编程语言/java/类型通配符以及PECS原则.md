# 类型通配符

## extends
假设场景
```java

//Student extends Person

List<Student> getStudents(){
    //从数据库里拿出所有学生,然后返回
}

List<Person> stus=getStudents();//会出错,因为List<Student>不是List<Person>的子类
```

Student是Person,但List<Student>不是List<Person>,这是程序的逻辑,而且仔细想想也很正确,因为可以向一个List<Person>里插入一个Person,却不能向List<Student>里插入一个Person,如果允许List<Student>自动转换到List<Person>,则后一种行为可能发生

```java
List<? extends Person> getStudents(){
    //从数据库里拿出所有学生,然后返回
}
```

这样就能接收到了

这样的List<? extends Person>只能往外拿,却不能往里放了,因为无法确定转换前是什么类型的List了

举个例子
```java
List<? extends Person> ts=getTeachers();
List<? extends Person> persons=ts;  //这个可以
Person p=persons.get(0);  //这个可以,先无视越界问题
persons.add(new Student());    //这个不行,相当于在List<Teacher>里加了个Student
```
## super

```java
//这次我们希望getTeachers把所有老师信息放进我们传进的列表里
void getTeachers(List<Teacher> teachers){
    //...从数据库里取出所有老师信息并放入teachers
}

List<Person> persons=new List<Person>();
getTeachers(persons);//出错!!!
```

于是修改
```java
void getTeachers(List<? super Teacher> teachers){
    //...从数据库里取出所有老师信息并放入teachers
}
```

List<? super Person>,里面只能存Person的超类,而且只能存,取却只能取出Object类型,因为Person的所有超类只有一个公共超类Object,取出来也仅限于Object的用法了,所以一般只存不取

## 啥也没有

最后是List<?>这种写法,既不能存,也不能取,那还能干啥?能判断内容是不是null,能调toString(),也就是那些Object的public方法

## PECS原则

Producer extends Consumer super

生产者extends,消费者super

extends只取不存(装满东西的篮子),由生产者生产;然后传递给消费者,super只存不取(空篮子),消费者消费后得到,交给生产者填充.

## 既存又取?
别用类型通配符

## 补充复杂例子
`<T extends Comparable<? super T>>`

见https://blog.csdn.net/fw0124/article/details/42296283
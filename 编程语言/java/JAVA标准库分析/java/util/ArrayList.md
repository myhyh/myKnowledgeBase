# ArrayList

其中放着一个Object数组(也就是堆指针数组)
不变式:
    数组大小为capacity
    其中存放着size个元素
    capacity>=size

## add(idx,elem)
添加元素,
当空间满了,就new一个更大的数组(默认扩成原先3倍大),再把现有元素都复制过去(Arrays.copyOf),都是些指针,代价不大
```
同时检查不要导致整数溢出和耗尽内存
```

## remove(idx)
删除对应元素,并返回该元素,后面的元素整体前移

## indexOf(elem)
返回和指定元素相等的元素的下标,实现:暴力一个个比较...

## set(idx,elem)改...

## fail-fast机制
使用迭代器期间,如果直接修改容器,就会导致迭代器有失效的可能(指向不存在的元素,越过容器终点等)

解决方案:
ArrayList中存在一个modCount记录其被修改的次数,其迭代器也复制了一份modCount,直接修改ArrayList不会改变迭代器中的modCount,那么迭代器中的modCount就和原list中不一致,调用迭代器继续遍历或修改就会对容器的modCount进行检查,发现不一致,throw一个ConcurrentModificationException

出现这个exception代表访问一定有问题,不报也可能有问题,是一种尽力而为的机制,所以不要依赖这个机制来检查并发访问问题

```
举个例子,两个线程A和B修改同一个列表,A直接修改,正在删除最后一个元素,B持有迭代器,正在前往最后一个元素

B读取modCount,发现没问题
A修改modCount
B前进
A删除最后一个元素

这时B越过了list边界,且没有报错...
```

## sublist
返回一个子列表,就像go里的slice


## 实现优化相关
```
所有空ArrayList的内部数组指向同一个static空数组
```
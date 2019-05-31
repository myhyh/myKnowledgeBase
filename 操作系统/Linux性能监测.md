# vmstat (virtual memory statistics 虚拟内存统计)

vmstat [间隔时间] [显示次数]

常用参数
* -w,宽屏显示
* -S k/m/g 以kB,mB,gB为单位显示

```
-S m运行结果如下

procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 0  0      0   5929    218   2669    0    0   114    37 1123 1318 23  4 70  2  0

-w宽屏
procs -----------------------memory---------------------- ---swap-- -----io---- -system-- --------cpu--------
 r  b         swpd         free        inact       active   si   so    bi    bo   in   cs  us  sy  id  wa  st
 0  0            0      5783344      1666648      4062824    0    0   126    39 1101 1285  23   4  70   3   0
```

* procs(进程)
  * r(run):正在实际调度运行的进程个数,超过cpu个数说明cpu瓶颈
  * b(block):阻塞进程个数
* memory(内存)
  * swpd(swap):磁盘交换区使用量,一般是0,内存耗尽或swappiness高就会消耗交换区,说明内存瓶颈
  * free:空闲内存
  * buff:写缓存,向磁盘延迟写数据的缓存
  * cache:读缓存,磁盘的数据读取后保留在内存以便下次读
* swap(交换)
  * si(swap in):读交换区进内存的速度
  * so(swap out):写出到交换区的速度
  * 这俩最好是0,否则内存不足
* io
  * bi(block in):从磁盘(块设备)读取的速度
  * bo(block out):向磁盘(块设备)写出的速度
  * 上面的速度均以块大小为单位,我的机子块大小4096byte
* system
  * in(interrupt):一秒钟的中断次数
  * cs(context switch):一秒钟上下文切换的次数,太多说明进程/线程过多,或者系统调用过多
* cpu
  * us(user space):用户程序占用cpu的时间百分比
  * sy(system):内核占用cpu的时间百分比
  * id(idle):cpu空闲时间百分比
  * wa(wait):cpu等待io时间百分比
  * st:虚拟机相关,不懂

# mpstat (multiprocessor statistics 多核统计)

例子
```
$mpstat -P ALL      #显示所有核的统计
Linux 5.0.9-1-ck-broadwell (myhyh) 	05/23/19 	_x86_64_	(4 CPU)

18:21:55     CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle
18:21:55     all   49.72    1.14    7.73    0.83    0.95    0.19    0.00    0.00    0.00   39.43
18:21:55       0   25.89    0.59    4.12    1.55    0.68    0.13    0.00    0.00    0.00   67.02
18:21:55       1   77.14    1.65   12.54    0.02    1.52    0.36    0.00    0.00    0.00    6.77
18:21:55       2   75.26    1.87   11.32    0.02    1.04    0.13    0.00    0.00    0.00   10.36
18:21:55       3   76.39    1.79   11.24    0.01    1.14    0.25    0.00    0.00    0.00    9.18
```
要点
* %user      在internal时间段里，用户态的CPU时间(%)，不包含nice值为负进程  (usr/total)*100
* %nice      在internal时间段里，nice值为负进程的CPU时间(%)   (nice/total)*100
* %sys       在internal时间段里，内核时间(%)       (system/total)*100
* %iowait    在internal时间段里，硬盘IO等待时间(%) (iowait/total)*100
* %irq         在internal时间段里，硬中断时间(%)     (irq/total)*100
* %soft       在internal时间段里，软中断时间(%)     (softirq/total)*100
* %idle       在internal时间段里，CPU除去等待磁盘IO操作外的因为任何原因而空闲的时间闲置时间(%) (idle/total)*100


# iostat (输入输出统计)

例子
```
$iostat -xz 1

Linux 5.0.9-1-ck-broadwell (myhyh) 	2019年05月23日 	_x86_64_	(4 CPU)

avg-cpu:  %user   %nice %system %iowait  %steal   %idle
          46.27    1.02    8.49    0.83    0.00   43.40

Device            r/s     rkB/s   rrqm/s  %rrqm r_await rareq-sz     w/s     wkB/s   wrqm/s  %wrqm w_await wareq-sz     d/s     dkB/s   drqm/s  %drqm d_await dareq-sz  aqu-sz  %util
sda              7.24    153.06     1.05  12.65   23.74    21.14    3.82    122.10     5.46  58.87   15.78    31.98    0.00      0.00     0.00   0.00    0.00     0.00    0.20   3.11
```

* rrqm/s : 每秒合并读操作的次数
* wrqm/s: 每秒合并写操作的次数
* r/s ：每秒读操作的次数
* w/s : 每秒写操作的次数
* rMB/s :每秒读取的MB数
* wMB/s: 每秒写入的MB数
* kb,gb等类推
* avgrq-sz：每个IO的平均扇区数，即所有请求的平均大小，以扇区（512字节）为单位
* avgqu-sz：平均未完成的IO请求数量，即平均意义上的请求队列长度,`这个长,则说明IO瓶颈`
* await：平均每个IO所需要的时间，包括在队列等待的时间，也包括磁盘控制器处理本次请求的有效时间。
* r_wait：每个读操作平均所需要的时间，不仅包括硬盘设备读操作的时间，也包括在内核队列中的时间。
* w_wait: 每个写操作平均所需要的时间，不仅包括硬盘设备写操作的时间，也包括在队列中等待的时间。
* %util： 工作时间或者繁忙时间占总时间的百分比


# free (内存查看)

常用写法
free -mw     #m是指定显示的单位为MB,w是宽屏显示

```
中英对照

              总计         已用        空闲      共享       缓冲          缓存    可用
内存：       11921        6111        1951         974         337        3520        4821
交换：        3999           0        3999

              total        used        free      shared     buffers       cache   available
Mem:          11921        6104        1995         972         337        3484        4830
Swap:          3999           0        3999

```

缓冲buffer,和缓存cache的不同在于,buffer是写缓冲,数据在内存积累到一定量再一口气写入磁盘,效率更高,这就是buffer的意义,而cache则是读缓存,在读取磁盘数据一次后,存留在内存cache里,再次读取时速度大大提高


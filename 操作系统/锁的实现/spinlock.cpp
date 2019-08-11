#include <atomic>
using namespace std;
struct spinlock
{

    atomic_flag _lock;
    spinlock()
    {
        _lock.clear();
    }

    // bool test_and_set(bool &flag)
    // {
    //     if (!flag)
    //     {
    //         flag = true;
    //         return false;
    //     }
    //     return true;
    // }
    void lock()
    {
        while (_lock.test_and_set()) //test_and_set由硬件实现,原子的进行上面那个函数的操作,x86是lock cmpxchg
            ;
    }
    void unlock()
    {
        _lock.clear();
    }
};

int a = 0;
#include <thread>
int main()
{
    spinlock lock;

    thread t1([&lock] {
        for (int i = 0; i < 1000000; i++)
        {
            lock.lock();
            a++;
            lock.unlock();
        }
    });
    thread t2([&lock] {
        for (int i = 0; i < 1000000; i++)
        {
            lock.lock();
            a++;
            lock.unlock();
        }
    });
    t1.join();
    t2.join();
    printf("%d", a); //2000000
}
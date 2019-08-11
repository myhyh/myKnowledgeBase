import java.util.concurrent.locks.ReentrantLock;

class Worker implements Runnable {
    public void run() {
        System.out.println("Hello");
    }
}

class TWorker extends Thread {
    public void run() {
        System.out.println("Hello");
    }
}

class StopableWorker implements Runnable {
    boolean stop = false;

    public void run() {
        while (!stop) {
            // 用这样的stop停止线程,而不是调Thread的stop方法,
            // 因为Thread的stop强制杀死线程,线程干一半强制退出,其不变式无法保证
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                System.out.println("thread interrupted");
            }
            System.out.println("Hello I'm " + Thread.currentThread().getName());
        }

    }

    public void stop() {
        stop = true;
    }
}

class Example {
    public static void main(String[] args) {
        Thread t = new Thread(new Worker());
        t.start();

        Thread t2 = new TWorker();
        t2.start();

        StopableWorker r = new StopableWorker();
        Thread t3 = new Thread(r, "HelloWorker");
        t3.start();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        r.stop();
        // t3.stop(); // 强制杀死线程,不推荐
        System.out.println("STOP!");
    }

    ReentrantLock lock = new ReentrantLock();

    void lockedFunction() {
        lock.lock();

        // lock.lockInterruptibly();// 其他线程调用当前线程的interrupt即可退出获取锁的等待

        // while (!lock.tryLock())// 忙等待锁
        // ;

        // 中间进行加锁后的操作

        lock.unlock();
    }
}
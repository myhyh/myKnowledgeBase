#include<pthread.h>
#include<assert.h>

int global=0;

void* modifier(void* in){
    pthread_spinlock_t* lock=(pthread_spinlock_t*)in;
    for(int i=0;i<100000;i++){
        pthread_spin_lock(lock);
        global++;
        pthread_spin_unlock(lock);
    }
    return NULL;
}

int main(){
    pthread_spinlock_t lock;
    pthread_t ta,tb;
    pthread_spin_init(&lock,PTHREAD_PROCESS_PRIVATE);
    pthread_create(&ta,NULL,modifier,(void*)&lock);
    pthread_create(&tb,NULL,modifier,(void*)&lock);
    long x;
    pthread_join(ta,(void**)&x);
    pthread_join(tb,(void**)&x);
    pthread_spin_destroy(&lock);
    assert(global==200000);
}
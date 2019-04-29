#include<pthread.h>
#include<assert.h>

int global=0;

void* modifier(void* in){
    pthread_mutex_t* mutex=(pthread_mutex_t*)in;
    for(int i=0;i<100000;i++){
        pthread_mutex_lock(mutex);
        global++;
        pthread_mutex_unlock(mutex);
    }
    return NULL;
}

int main(){
    pthread_mutex_t mutex;
    pthread_t ta,tb;
    pthread_mutex_init(&mutex,NULL);
    pthread_create(&ta,NULL,modifier,&mutex);
    pthread_create(&tb,NULL,modifier,&mutex);
    long x;
    pthread_join(ta,(void**)&x);
    pthread_join(tb,(void**)&x);
    pthread_mutex_destroy(&mutex);
    assert(global==200000);
}
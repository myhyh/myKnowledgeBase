#include<pthread.h>
#include<assert.h>
#include<unistd.h>
#include<random>
#include<iostream>
int global=0;
void* reader(void* in){
    pthread_rwlock_t* lock=(pthread_rwlock_t*)in;
    

    while(true){
        usleep(200+rand()%100);
        pthread_rwlock_rdlock(lock);
        std::cout<<"reader"<<global<<"\n";
        pthread_rwlock_unlock(lock);
    }
    return NULL;
}

void* writer(void* in){
    pthread_rwlock_t* lock=(pthread_rwlock_t*)in;
    while(true){
        usleep(300+rand()%100);
        pthread_rwlock_wrlock(lock);
        global++;
        std::cout<<"writer"<<global<<"\n";
        pthread_rwlock_unlock(lock);
    }
    return NULL;
}

int main(){
    srand(time(0));
    pthread_rwlock_t lock;
    pthread_rwlock_init(&lock,NULL);
    pthread_t r1,r2,r3,r4,w1,w2;

    pthread_create(&r1,NULL,reader,&lock);
    pthread_create(&r2,NULL,reader,&lock);
    pthread_create(&r3,NULL,reader,&lock);
    pthread_create(&r4,NULL,reader,&lock);
    pthread_create(&w1,NULL,writer,&lock);
    pthread_create(&w2,NULL,writer,&lock);

    long i;
    pthread_join(r1,(void**)&i);
    pthread_join(r2,(void**)&i);
    pthread_join(r3,(void**)&i);
    pthread_join(r4,(void**)&i);
    pthread_join(w1,(void**)&i);
    pthread_join(w2,(void**)&i);

    pthread_rwlock_destroy(&lock);
}
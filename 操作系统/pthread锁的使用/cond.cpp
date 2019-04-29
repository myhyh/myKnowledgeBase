#include<pthread.h>
#include<assert.h>
#include<unistd.h>
#include<iostream>

//不成功
int locked=0;
const int MAX=100;
typedef pthread_mutex_t mutex_t;
typedef pthread_cond_t cond_t;
struct mycond{
    mutex_t mutex;
    cond_t cond;
    bool signaled=false;
    mycond(){
        pthread_mutex_init(&mutex,NULL);
        pthread_cond_init(&cond,NULL);
    }

    ~mycond(){
        pthread_cond_destroy(&cond);
        pthread_mutex_destroy(&mutex);
    }
};
void* producer(void* in){
    mycond* cond=(mycond*)in;
    while(true){
        sleep(1);
        pthread_mutex_lock(&cond->mutex);
        locked++;
        cond->signaled=true;
        assert(locked>=0);
        pthread_mutex_unlock(&cond->mutex);
        pthread_cond_signal(&cond->cond);
    }
    return NULL;
}

void* consumer(void* in){
    mycond* cond=(mycond*)in;
    while(true){
        pthread_mutex_lock(&cond->mutex);
        while(!cond->signaled){
            pthread_cond_wait(&cond->cond,&cond->mutex);
        }
        locked--;
        std::cout<<("consumer");
        std::cout.flush();
        cond->signaled=false;
        pthread_mutex_unlock(&cond->mutex);
    }
    return NULL;
}

int main(){
    mutex_t mutex;
    pthread_mutex_init(&mutex,NULL);
    cond_t cond;
    mycond in;
    pthread_t con1,con2,con3,pro1;
    pthread_create(&con1,NULL,consumer,&in);
    pthread_create(&con2,NULL,consumer,&in);
    pthread_create(&con3,NULL,consumer,&in);
    pthread_create(&pro1,NULL,producer,&in);

    long results[4];
    pthread_join(con1,(void**)&results[0]);
    pthread_join(con2,(void**)&results[0]);
    pthread_join(con3,(void**)&results[0]);
    pthread_join(pro1,(void**)&results[0]);
}
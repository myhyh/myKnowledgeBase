#include<bits/stdc++.h>
using namespace std;

//自己实现一个nullptr
const class mynullptr_t{
public:
//支持隐式转换到普通指针
    template<class T>
    inline operator T*() const{
        return 0;
    }

//支持隐式转换到成员指针
    template<class C,class T>
    inline operator T C::*() const{
        return 0;
    }
private:
//防止别人取nullptr的地址
    void operator&() const;
}mynullptr;

void f(int* a){
    cout<<"int*函数\n";
}
void f(double* a){
    cout<<"double*函数\n";
}
void f(mynullptr_t a){
    cout<<"mynullptr_t函数\n";
}

int main(){
    int* a=mynullptr;
    double* b=mynullptr;
    f(a);
    f(b);
    f(mynullptr);
    // auto c=&mynullptr; //这个会编译失败,因为operator&是private的
}
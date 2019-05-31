#include<new>
using namespace std;
template <class T> //  提供类set_new_handler支持的
class NewHandlerSupport
{ //  “混合风格”的基类

  public:
    static new_handler set_new_handler(new_handler p);
    static void *operator new(size_t size);
  private:
    static new_handler currentHandler;
};

template <class T>
new_handler NewHandlerSupport<T>::set_new_handler(new_handler p)
{
    new_handler oldHandler = currentHandler;
    currentHandler = p;
    return oldHandler;
}
template <class T>
void *NewHandlerSupport<T>::operator new(size_t size)
{
    new_handler globalHandler = std::set_new_handler(currentHandler);
    void *memory;
    try
    {
        memory = ::operator new(size);
    }
    catch (std::bad_alloc &)
    {
        std::set_new_handler(globalHandler);
        throw;
    }
    std::set_new_handler(globalHandler);
    return memory;
} // this sets each currentHandler to 0template<class T>new_handler NewHandlerSupport<T>::currentHandler;
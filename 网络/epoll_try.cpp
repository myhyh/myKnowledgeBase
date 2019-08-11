#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/epoll.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <fcntl.h>
#include <netinet/in.h>
#include <netinet/ip.h>
#include <arpa/inet.h>
#include <string.h>

#define MAX_EVENTS 10

void setnonblocking(int sock)
{
    int opts;
    opts = fcntl(sock, F_GETFL);
    if (opts < 0)
    {
        perror("fcntl(sock,F_GETFL)");
        exit(EXIT_FAILURE);
    }
    opts |= O_NONBLOCK;
    if (fcntl(sock, F_SETFL, opts) < 0)
    {
        perror("fcntl(sock,F_SETFL,opts)");
        exit(EXIT_FAILURE);
    }
}
char buf[1024];
void do_use_fd(int fd)
{
    int size = read(fd, buf, 1024);
    printf("%100s", buf);
    static const char *resp = "HTTP/1.0 200 OK\n"
                              "# 服务器和相对应的版本\n"
                              "Server: Tengine\n"
                              "# 这个字段作为回应客户端的Connection：keep-alive，告诉客户端服务器的tcp连接也是一个长连接，客户端可以继续使用这个tcp连接发送http请求\n"
                              "Connection: keep-alive\n"
                              "Date: Wed, 30 Nov 2016 07:58:21 GMT\n"
                              "# 这个值告诉客户端，服务端不希望客户端缓存资源，在下次请求资源时，必须要从新请求服务器，不能从缓存副本中获取资源\n"
                              "Cache-Control: no-cache\n"
                              "# 告诉客户端，资源文件的类型，还有字符编码，客户端通过utf-8对资源进行解码，然后对资源进行html解析。通常我们会看到有些网站是乱码的，往往就是服务器端没有返回正确的编码\n"
                              "Content-Type: text/html;charset=UTF-8这个字段作为回应客户端的Connection：keep-alive，告诉客户端服务器的tcp连接也是一个长连接，客户端可以继续使用这个tcp连接发送http请求\n"
                              "Keep-Alive: timeout=20\n"
                              "# 告诉缓存服务器，缓存压缩文件和非压缩文件两个版本，现在这个字段用处并不大，因为现在的浏览器都是支持压缩的\n"
                              "Vary: Accept-Encoding\n"
                              "# 这个含义与Cache-Control等同\n"
                              "Pragma: no-cache\n"
                              "X-NWS-LOG-UUID: bd27210a-24e5-4740-8f6c-25dbafa9c395\n"
                              "Content-Length: 1\n"
                              "\n"
                              "a";
    printf("start reply");
    write(fd, resp, strlen(resp));
    printf("finished\n"
           "");
}

int main()
{
    struct epoll_event ev, events[MAX_EVENTS];
    int listen_sock, conn_sock, nfds, epollfd;

    /* Code to set up listening socket, 'listen_sock' */
    listen_sock = socket(AF_INET, SOCK_STREAM, 0);
    if (listen_sock == -1)
    {
        perror("socket create");
        exit(EXIT_FAILURE);
    }
    sockaddr_in addr;
    socklen_t addrlen = sizeof(addr);
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = inet_addr("127.0.0.1");
    addr.sin_port = htons(12345);
    bind(listen_sock, (sockaddr *)&addr, addrlen);
    listen(listen_sock, 100);

    epollfd = epoll_create1(0);
    if (epollfd == -1)
    {
        perror("epoll_create1");
        exit(EXIT_FAILURE);
    }

    ev.events = EPOLLIN;
    ev.data.fd = listen_sock;
    if (epoll_ctl(epollfd, EPOLL_CTL_ADD, listen_sock, &ev) == -1)
    {
        perror("epoll_ctl: listen_sock");
        exit(EXIT_FAILURE);
    }

    for (;;)
    {
        nfds = epoll_wait(epollfd, events, MAX_EVENTS, -1);
        if (nfds == -1)
        {
            perror("epoll_wait");
            exit(EXIT_FAILURE);
        }

        for (int n = 0; n < nfds; ++n)
        {
            if (events[n].data.fd == listen_sock)
            {
                conn_sock = accept(listen_sock,
                                   (struct sockaddr *)&addr, &addrlen);
                if (conn_sock == -1)
                {
                    perror("accept");
                    exit(EXIT_FAILURE);
                }
                setnonblocking(conn_sock);
                ev.events = EPOLLIN | EPOLLET;
                ev.data.fd = conn_sock;
                if (epoll_ctl(epollfd, EPOLL_CTL_ADD, conn_sock,
                              &ev) == -1)
                {
                    perror("epoll_ctl: conn_sock");
                    exit(EXIT_FAILURE);
                }
            }
            else
            {
                do_use_fd(events[n].data.fd);
                close(events[n].data.fd);
                //  epoll_ctl(epollfd,EPOLL_CTL_DEL,events[n].data.fd,&ev);
            }
        }
    }
}

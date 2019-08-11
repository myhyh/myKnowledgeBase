网站加个用qq登录的功能,就得用这个
看了https://www.cnblogs.com/flashsun/p/7424071.html记录一下

要素
- 浏览器
- 网站服务器 myserver
- qq服务器  qqserver

```mermaid
sequenceDiagram

participant 浏览器
participant 网站服务器
participant qq服务器

浏览器->>网站服务器: myserver/qqlogin
网站服务器->>浏览器: 304重定向,qqserver/login?returnto=myserver/qcodelogin
浏览器->>qq服务器: qqserver/login?returnto=myserver/qcodelogin,用户输入用户名和密码进行登录
qq服务器->>qq服务器: 确认身份,生成临时code(短期有效)
qq服务器->>浏览器: 304重定向,myserver/qcodelogin?code=*****
浏览器->>网站服务器: myserver/qcodelogin?code=*****
网站服务器->>qq服务器: qqserver/codelogin?code=*****
qq服务器->>qq服务器:获取当前code对应的token(长时间有效)
qq服务器->>网站服务器: success,token=$$$$
网站服务器->>网站服务器: 若无对应网站账号,建立网站账号,存储对应的qq token,否则登录
```

### code与token的不同
一个qqtoken唯一对应一个qq账号,所以网站可以通过验证qqtoken来确定用户的身份,而code是临时的,即使在用户手里被窃取,很短时间后就不能用了
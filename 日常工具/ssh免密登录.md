实质上是记录了拥有授权的机器的公钥,在~/.ssh/authorized_keys里,一行一个
此时注意权限问题
- 用户的家目录,比如说我就是/home/myhyh的权限应为755或更低
- 家目录下的.ssh文件夹也应该是755或更低
- authorized_keys的权限应为600

若出现问题,可以用journalctl --system 查询系统日志发现问题
比如说上面的权限问题的日志是Authentication refused: bad ownership or modes for directory 某目录
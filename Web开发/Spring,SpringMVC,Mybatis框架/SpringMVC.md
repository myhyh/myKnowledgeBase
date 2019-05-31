# SpringMVC


M=model V=view C=controller

model是数据,view是外观,controller是业务逻辑

业务逻辑处理数据,外观展示数据,业务逻辑和显示逻辑拧在一起,编写代码时脑子中需要考虑太多,而实际上完全可以独立开来,所以就有了MVC模式,把两者拆分开来



流程如下
- 用户发来请求 -> url,数据
- 用 (url,数据) 找到合适的业务逻辑(Controller)
- 执行业务逻辑 -> 得到用于展示的数据(model)
- 根据(url,数据) 找到合适的页面展示(View)
- 得到页面,发回复给用户

其中负责四处找人处理事情的叫做DispatcherServlet,通过HandlerMapping去寻找Controller
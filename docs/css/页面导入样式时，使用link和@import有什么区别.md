# 页面导入样式时，使用link和@import有什么区别

* link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS

* link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载，所以会出现一开始没有css样式，闪烁一下出现样式后的页面(网速慢的情况下)

* link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。

* link支持使用Javascript控制DOM去改变样式；而@import不支持。
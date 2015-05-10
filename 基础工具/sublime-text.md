#性感无比的编辑器SublimeText  
##1.安装插件管理包Package control  
* 按住ctrl+`或者到 view>show console就可以打开控制台。   
* 在控制台里面黏贴代码，即可安装完成插件`package contrl`

```
import urllib.request,os,hashlib; h = 'eb2297e1a458f27d836c04bb0cbaf282' + 'd0e7a3098092775ccb37ca9d6b2e4b7d'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
``` 
* 打开网站`https://packagecontrol.io/`  

![](http://i2.tietuku.com/4fca6de86e27f300.png)
通过这个插件我们可以安装很多插件来扩展`sublime Text`的功能。  
* `language syntax`(代码高亮）
* `snippets`(代码片段)  
* `auto-complete`(自动化工具）
* `formatting`(格式化）
* `build system`(编译工具）
* `theme`(sublime text主题等）

##2.`go anythying`（模糊匹配）  
* 快速找到你想要的文件
* 在具体文件中快速到达你想要到的地方。  


##3.多行游标 （同时更改变量名相同的变量。）  
* 选中+`ctrl+ D`
* 全选（`ctrl+A`)+分行（`ctrl+shift+l`)
* 选中+`alt+F3`(windows)  

##4.`ctrl+shift+p`命令模式（模糊匹配）  
* 切换语法模式  
* 隐藏和显示一些部件


##5.整体流程
* 新建文档
* 设置语法
* 编写标签（自动闭合`alt+.`)/使用`Emmet`插件
* 一些跳行快捷键
	* `ctrl+enter`在当前行下面添加一行。
	* `ctrl+shift+enter`在光标的上一行添加一个空行
* 使用多行游标功能

##6快速写注释 （sublime text2需要安装Doc​Blockr插件） 
* `alt+/`注释行和代码块
* 自动补全  
	* /*+回车或者`tab`
	* /**+回车或者`tab`
	* /**+回车或者`tab`(在下面有函数的情况下）可以快速写行数注释
##7.一些小的特性
* 默认保存上一次关闭时的快照
* `ctrl+shift+v`带格式的粘贴
* `alt+shift+n`表示窗口工作区分n栏

##8.安装个性化主题  
##9.snippets编程
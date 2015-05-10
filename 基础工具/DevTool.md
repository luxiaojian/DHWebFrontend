#[Chrome DevToolls Overview](https://developer.chrome.com/devtools) -开发者工具  
>链接地址：https://developer.chrome.com/devtools  


##Elements(元素面板） 
用处:查看DOM结构，对应的样式  

* Styles(样式）
* Emements(元素）


##Networks(网络交互)
清晰的把网络请求进行分类，同时可以看到每个请求的详细情况。
(看到页面向服务器请求了哪些资源、资源的大小以及加载资源花费的时间，当然也能看到哪些资源不能成功加载。此外，还可以查看HTTP的请求头，返回内容等)  

* Status/Text: HTTP状态码/文字解释；
* Initiator解释请求是怎么发起的  
	* Parser：请求是由页面的HTML解析时发送的；
	* Redirect：请求是由页面重定向发送的；
	* Script：请求是由script脚本处理发送的；
	* Other：请求是由其他过程发送的，比如页面里的link链接点击，在地址栏输入URL地址。
* Size/Content: Size是响应头部和响应体结合起来的大小，Content是请求内容解码后的大小。
* Time latency 请求花的总时间
* 查看网络请求  

##Resources  
用处:浏览器缓存下来的所有文件，调试js.
##Timeline(生成时间线）  
用处:JS执行时间,页面渲染，浏览器处理Dom的时间轴画了出来，方便进行优化
##Profiles  
用处:性能分析(查看CPU执行时间与内存占用)  
TimeLine和Profiles配合查看和分析网页性能
##Audits  
分析页面加载的过程，进而提供减少页面加载时间、提升响应速度的方案
##Console(控制台）
用处:调试`javascript`
JavaScript Console 有两种模式:Console 标签,分裂视图(切换Elements时候使用）按住ESC即可关闭  

举例:  
  
1. 定义变量，并输出。  
2. `(!(~+[])+{})[--[~+""][+[]]*[~+[]] + ~~!+[]]+({}+[])[[~!+[]]*~+[]]` 
	
##Device模块&手机模拟器 
* 启动Device模块（`ctrl+shift+m`)
* 屏幕仿真器
	* 选取Device
	* 模拟网路情况
	* 设备的分辨率和像素比
	* 开关屏幕分辨率模拟器使用 `Emulate screen resolution`
	* 切换横屏还是竖屏`Swap dimensions`
	* `Device pixel ratio`Retina 设备测试(设像素比（DPR）就是逻辑像素和物理像素的比例)
	* 查看 	`media queries`(轻松的查看 media queries 代码。)
		* 单击该分辨率下的页面情况
		* 双击`Reval in source code`查看css media quary源代码
		* 其他 media 类型的效果
		* 模拟设备传感器
		* 触发触摸（touch）事件
	* More overrides(自定义预设)  
##快捷键  
* 打开/关闭DevTools `ctrl+shift+i`
* 面板之间切换 `ctrl+]` `ctrl+[`

##其他功能  
* Remote Debugging
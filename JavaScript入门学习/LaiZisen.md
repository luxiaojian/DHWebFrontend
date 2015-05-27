myJavaScriptNote
================

##变量

####声明 
* `var` `变量名`($)
* 支持不声明，不过**不推荐**

####运算符
* 参考`C\C++`

---
##数组

####声明 
* 声明方式
    - `var` `newarray` = `new` **A**rray(ARR_LEN = AUTO);
    - `var` `myarray` = `[66,80,90,77,59];`**C\C++式赋值**
    - `var` `myarray` = `new` `Array(66,80,90,77,59);`
* 支持**变长数组**来处理越界
* 默认初始化`undefined`

####常用的数组函数
- 隐含加长数组，无需使用函数扩充（较`python`) [arrlengthref](http://www.imooc.com/code/238)
- `arr.length;`

#### \* 二维数组声明
**推荐**
```js
    var Myarr = [[0 , 1 , 2 ],[1 , 2 , 3, ]];
```    
**不推荐**
```js
    var myarr=new Array();  //先声明一维 
    for(var i=0;i<2;i++){   //一维长度为2
       myarr[i]=new Array();  //在声明二维 
       for(var j=0;j<3;j++){   //二维长度为3
       myarr[i][j]=i+j;   // 赋值，每个数组元素的值为i+j
       }
     }
```
---
##对象
-   ![事件](http://img.mukewang.com/53e198540001b66404860353.jpg)
-   JavaScript 中的所有事物都是对象，如:字符串、数值、数组、函数等，每个	  对象带有属性和方法。
    -   Date `星期、月、日、年、时、分、秒、时区。(火狐浏览器) `      	  	  ![ps](http://img.mukewang.com/555c650d0001ae7b04180297.jpg)  
         *getDay() 返回星期，返回的是0-6的数字，0 表示星期天。*
    -   String 
        -   stringObject.`indexOf`(substring, startpos = 0)
        -   stringObject.`charAt`(index)
        -   stringObject.split(separator,limit = none)
                *注意：返回数组。*
        -   parseInt() 字符串类型转成整型。
        -   stringObject.substring(starPos,stopPos = **ARR_LEN**)
                *stringObject.substr(startPos,length) ps:注意：参数startPos支持负数。*
    -   Math *固有的对象，无需创建它，直接把 Math 	
        ![对象](http://img.mukewang.com/532fe7cf0001e7b505170269.jpg)
        ![方法](http://img.mukewang.com/532fe841000174db05160622.jpg)        
    -   Array 
            ![方法](http://img.mukewang.com/533295ab0001dead05190599.jpg) 
    -   window
            ![方法](http://img.mukewang.com/535483720001a54506670563.jpg)
    -   History
        *记录了用户曾经浏览过的页面(URL)，并可以实现浏览器前进与后退相似导航的功能。*
        *从窗口被打开的那一刻开始记录，每个浏览器窗口、每个标签页乃至每个框架，都有自己的history对象与特定的window对象关联。*
        -   *window.*`history.length` url数量
        -   *window.*history.go() /back() /go()
    -   location
        *用于获取或设置窗体的URL，并且可以用于解析URL。*
        ![propertypic](http://img.mukewang.com/53605c5a0001b26909900216.jpg)
        ![property](http://img.mukewang.com/5354b1d00001c4ec06220271.jpg)
        ![function](http://img.mukewang.com/5354b1eb00016a2405170126.jpg)
    -   Navigator 
       	*对象包含有关浏览器的信息，通常用于检测浏览器与操作系统的版本。*
        ![property](http://img.mukewang.com/5354cff70001428b06880190.jpg)
            返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串)
        ![userAgent](http://img.mukewang.com/535a3a4a0001e03f06870189.jpg)
    -   screen *对象用于获取用户的屏幕信息。*
        ![property](http://img.mukewang.com/5354d2810001a47706210213.jpg)
        ```js
                window.onload=function(){ //页面加载完执行匿名函数
                foot();
                }
                //
                var w= document.documentElement.clientWidth
                      || document.body.clientWidth;
                var h= document.documentElement.clientHeight
                      || document.body.clientHeight;
                window.innerHeight/Width //IE9+、Chrome、Firefox、Opera 以及 Safari
                //窗口可视化区域大小
                var w=document.documentElement.scrollWidth
                   || document.body.scrollWidth;
                var h=document.documentElement.scrollHeight
                   || document.body.scrollHeight;
                //网页内容高度不包括滚动
                offsetHeight = clientHeight + 滚动条 + 边框。
                var w= document.documentElement.offsetWidth
                    || document.body.offsetWidth;
                var h= document.documentElement.offsetHeight
                    || document.body.offsetHeight;
                //offsetHeight和offsetWidth，获取网页内容高度和宽度(包括滚动条等边线，会随窗口的显示大小改变)
                
        ```
---
##DOM 
*文档对象模型DOM（Document Object Model）定义访问和处理HTML文档的标准方法。DOM 将HTML文档呈现为带有元素、属性和文本的树结构（节点树）*

-   HTML文档可以说由节点构成的集合，DOM节点有:
    1.  元素节点：上图中`<html>、<body>、<p>`等都是元素节点，即标签。
    2.  文本节点:向用户展示的内容，如`<li>...</li>`中的JavaScript、DOM、CSS等文本。
    3.  属性节点:元素属性，如`<a>`标签的链接属性`href="http://www.imooc.com"`。
    [![nodeProperty](http://img.mukewang.com/5375c953000117ee05240129.jpg)](http://www.imooc.com/code/1589)
    ![遍历节点树](http://img.mukewang.com/53f17a6400017d2905230219.jpg)
    ![DOM operate](http://img.mukewang.com/538d29da000152db05360278.jpg)*！前两个是documentfunction*
-   常用获取节点
    -   document.getElementsByTagName()
    -   document.getElementById()
    -   document.getElementsByName()
-   操作
    -   elementNode.getAttribute(name)
    -   elementNode.setAttribute(name,value)
-   备注
    -   elementNode.childNodes **retlist**
        *节点之间的空白符，在firefox、chrome、opera、safari浏览器是文本节点，所以IE是3，其它浏览器是7。*
        *判断节点nodeType是否为1, 如是为元素节点，跳过。*
    ```js
        <div>
          javascript  
          <p>javascript</p>
          <div>jQuery</div>
          <h5>PHP</h5>
        </div>
    ```
    ```js
        第1个#text--- javascript ---3
        第2个P---null---1
        第3个#text--- ---3
        第4个DIV---null---1
        第5个#text--- ---3
        第6个H5---null---1
        第7个#text--- ---3
    ```
    -   insertBefore(newnode,node);
    -    replaceMessage() 不符规范
    -   ```js
            function createa(url,text)
            {
                var a = document.createElement("a");
                a.href = url;
                a.innerHTML = text;
                a.style.color = "red";
                body.appendChild(a);
            }
            
            btn.setAttribute
            ("onclick", "javascript:alert('This is a text!');");  
        ```
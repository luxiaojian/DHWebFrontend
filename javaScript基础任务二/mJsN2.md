myJavaScriptNote2
=================

##tesk 1

判断arr是否为一个数组，返回一个bool值

```js
    function isArray(arr) {
        return Object.prototype.toString.call(arr) === "[object Array]" 
    }
    /*原生对象的[[class]]内部属性的值一共有10种.分别是:
    "Array", "Boolean", "Date", "Error", "Function",
    "Math", "Number", "Object", "RegExp", "String".
    另外还有typeof和instanceof的判断方法*/
```

##tesk 2

判断fn是否为一个函数，返回一个bool值

```js
    function isFunc(fn){
        return return typeof(fn) === "function" ;
    }
```
##tesk 3
对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组

```js
    function uniqArray(arr) {
            function recFunc(x,arr){
                for(var i = x;i < arr.length-1;i++)
                {
                    arr[i] = arr[i+1];
                }
                arr.pop();
            }
            var keyArr = Array(36);
            for(var i = 0;i < keyArr.length;i++)
            {
                keyArr[i] = 0;
            }
            for(var i = 0;i < arr.length;i++)
            {
                if(arr[i]<='z'&&arr[i]>='a')
                {
                    if(keyArr[arr[i]-'a']==0){
                        keyArr[arr[i]-'a'] = 1;
                    }else
                    {
                        recFunc(i,arr);
                    }continue;
                }else
                {   
                    if(keyArr[arr[i]+26]==0){
                        keyArr[arr[i]+26] = 1;
                    }else
                    {
                        recFunc(i,arr);
                    }
                }
            }
            return arr;
        }
```        

##tesk 4

判断是否为邮箱地址
```js
    function isEmail(emailStr) {
        var patt1=new RegExp('@');
        return(patt1.test(emailStr)); 
    }
```
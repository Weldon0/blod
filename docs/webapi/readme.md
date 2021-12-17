# 01、webAPI简介

## js基础和WebAPI的关系

javascript是由ECMscript、Dom和Bom三部分组成的，我们在之前学习过了JS的基础语法ECMscript，其实我们现在所学习的webAPI其实就是Dom文档对象和Bom浏览器对象操作的学习。

其实我们前面学习的ECMscript基础语法就是为后面的web API做铺垫的，我们可以使用JS基础语法实现网页的交互效果；

## API 和 Web API解释

**API:** 应用程序编程接口，预先定义好了函数，提供应用程序与开发人员基于某软件或者硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节。

简单理解：API是给程序员提供的一种工具，能更轻松的实现想要完成的功能。

**Web API**：**浏览器提供的一套操作浏览器功能和页面元素的API（DOM和BOM）**；

现阶段我们主要针对浏览器讲解常用的API，主要做针对浏览器做交互效果；Web API一般都有输入和输出（函数的传参和返回值），Web API 很多都是方法函数；

比如在浏览器中弹出一个警示框，直接使用alert(‘要弹出的内容’)；

MDN详细API地址：<https://developer.mozilla.org/zh-CN/docs/Web/API>

Web API很多，我们将这个阶段称为Web APIs；

# 02、DOM简介

**DOM***：**文档对象模型（Document ObjectModel）**,是W3c组织推荐的处理可扩展标记语言（html或者XML）的标准程序接口；W3c已经定义了一系列DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式；

**DOM树**：是由文档，元素，节点组成的，DOM中把文档，元素，几点都称之为对象；

![](http://weldon.flywen.top/image/20210601134235.png)

![image-20210602215431787](http://weldon.flywen.top/image/20210602215431.png)

**文档：**一个页面就是一个文档，DOM中使用document表示文档；

**元素：**页面中所有的标签都是元素，DOM中使用element表示元素；

**节点：**网页中的所有内容都是节点（标签，属性，文本，注释等），DOM中使用node表示；

HTML DOM 定义了所有 HTML 元素的*对象*和*属性*，以及访问它们的*方法*。

*换言之，HTML DOM 是关于如何获取、修改、添加或删除 HTML 元素的标准。*



> 为什么提供DOM？

> 网页只能提供静态内容，不能动态修改内容，如果使用dom提供的属性和方法就可以通过js动态操控页面展示，事件绑定。

# 03、DOM获取页面元素

获取页面中元素的方法有：根据ID获取，根据标签名称获取，通过HTML5新增的方法获取，通过特殊元素获取等

## getElementById获取元素

用ID获取的元素返回的是一个元素对象（object);

### 语法：

```js
// var element = document.getElementById('id名');
var timer = document.getElementById('time');
```

### 参数：

- **element（元素**）是一个 [Element](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 对象。如果当前文档中拥有特定ID的元素不存在则返回null.
- **id**是大小写敏感的**字符串**，代表了所要查找的元素的唯一ID.

### console.dir()

我们可以使用console.dir() 打印我们返回的元素对象，更好的查看里面的属性和方法

## getElementsByTagName获取某类标签元素

直接用标签名称获取元素，返回带有指定标签名的对象集合，获取的元素以伪数组的形式存在；

### 语法

```js
//document.getElementsByTagName('标签名')
var lis = document.getElementsByTagName('li');
```

### 访问获取的的元素

因为用标签名获取的元素是以伪数组的形式存在，我们想要获取其中的某一个元素，我们可以用for循环遍历伪数组按照索引值的方式获取，遍历得到的元素是动态的；

如果页面中没有该元素返回的是一个空的伪数组；如果页面中只有一个该元素返回的也是一个值的伪数组；

```js
    <script>
        var lis = document.getElementsByTagName('li');
        console.log(lis);
        for (var i = 0; i < lis.length; i++) {
            console.log(lis[i]);
        }
    </script>
```

### 指定父元素获取自己元素

在实际开发中我们只需要获取一个盒子中的元素，而不是将整个页面所有的元素都获取，那么我们就可以通过先获取父级盒子元素，然后在从父级盒子元素下选区子元素；

语法

01 先用id获取父级盒子

02  获取的父级盒子元素.getElementByTagName('标签名称')；

```js
    <script>
        var oBox = document.getElementById('box');
        var lis = oBox.getElementsByTagName('li');
        console.log(lis);
    </script>
```

## H5新增的获取元素的方法

如果开发中不考虑兼容性问题我们可以使用下面的方法，我们推荐大家使用querySelector()方法；

### 根据类名称获取元素getElementsByClassName

**getElementsByClassName('类名称')**

使用该方法获取元素的时候小括号中的类名称前面不需要加任何符号（#和.);

```js
    <script>
        var lis = document.getElementsByClassName('lis');
        console.log(lis);
    </script>
```

### 根据选择器获取页面中第一个元素对象querySelector

**querySelector**('选择器')      返回指定选择器的第一个元素对象；

使用该方法的时候小括号里面的选择器必须要加符号（#和.)，也可以是标签选择器；

```js
    <script>
        var lis = document.querySelector('.lis');
        console.log(lis);
    </script>
```

### 根据选择器获取页面中所有的该选择器元素querySelectorAll

querySelectorAll('选择器')   返回指定选择器的素有元素对象集合；

使用该方法的时候小括号里面的选择器必须要加符号（#和.)，也可以是标签选择器；

```js
    <script>
        var lis = document.querySelectorAll('.lis');
        console.log(lis);
    </script>
```

### 特殊标签元素的获取

#### 获取body元素  document.body

```js
var bodyEle = document.body;
```

#### 获取html元素 document.documentElement

```js
var htmlEle = document.documentElement;
```

# 事件



### 事件三要素

事件源：    事件被触发的对象

事件类型：如何触发（操作）

事件处理程序：触发事件源以后要做的事情（通过一个函数赋值的方式）

### 执行时间的过程：

01、获取事件源   ----  02、绑定事件  ----  03、添加事件处理程序

```js
    <script>
    // 获取事件源
    var oBtn = document.querySelector('div');
    // 绑定事件  注册事件  oBtn.onclick
    // 添加事件处理程序
    oBtn.onclick = function() {
        console.log('我被点击了');
    }
    </script>
```

### 常见的鼠标事件

onclick                 鼠标单击

onmouseover       鼠标经过

onmouseout         鼠标离开

onfocus                获取鼠标焦点触发

onblur                   失去鼠标焦点触发

onmousemove     鼠标移入（移动）

onmouseup           鼠标弹起触发

onmousedown      鼠标按下



### 元素操作    ---    操作元素内容 

javascript的DOM操作可以改变网页的内容、结构和样式，我们可以利用DOM操作来改变元素里面的内容、属性等；

内容操作有两个方法.innerText和.innerHTML,两者的区别是：

innerText不是W3c标准的方法，不认识html标签，直接将html标签当做内容输出，将内容中的空格和回车全部去除；

innerHTML是W3c标准的方法，认识html标签，会将html标签在浏览器解析以后输出，同时也会保留空格和回车；

####  element.innerText 

从起始位置到终止位置的内容全部内容，同时空格和换行也会去掉；

会将标签当做文字内容输出

```js
    <button class="btn">点我变老李</button>
    <div class="box">我是老王</div>
    <script>
    var oBtn = document.querySelector('.btn');
    var oBox = document.querySelector('.box');
    oBtn.onclick = function() {
        oBox.innerText = '老李';
    }
    </script>
```



#### element.innerHTML

从起始位置到终止位置的内容全部内容，同时保留空格和换行；

会将标签在浏览器中解析效果以后再输出

```js
    <button class="btn">点我变老李</button>
    <div class="box">我是老王</div>
    <script>
    var oBtn = document.querySelector('.btn');
    var oBox = document.querySelector('.box');
    oBtn.onclick = function() {
        oBox.innerHTML = '老李';
    }
    </script>
```

**注意：实际工作中我们建议使用innerHTML方法；**

### 元素属性操作  -- 修改元素属性

我们可以通过 **element.属性="新的属性值"**   对元素的属性进行修改

```html
    <div class="btn">
        <button id="byt">八姨太</button>
        <button id="jyt">九姨太</button>
    </div>
    <img src="img/01.jpg" alt="" id="pic">
```

```js
    <script>
        // 获取第一个按钮
        var bYt = document.getElementById('byt');
        // 获取第二个按钮
        var jYt = document.getElementById('jyt');
        // 获取要操作的标签
        var oImg = document.getElementById('pic');
        // 添加时间修改属性
        bYt.onclick = function () {
            oImg.src = 'img/01.jpg';
            oImg.title = '我是八姨太';
        }
        jYt.onclick = function () {
            oImg.src = 'img/02.jpg';
            oImg.title = '我是九姨太';
        }
    </script>
```

#### 时间段问候案例

```htm
    <img src="img/s.gif" alt="">
    <p>早上好</p>
```



```js
    <script>
        // 获取图片
        var oImg = document.querySelector('img');
        // 获取文字
        var  oTxt = document.querySelector('p');
        // 获取当前的时间
        var date = new Date();
        var h = date.getHours();
        // 判断时间段 --- 更改对应的图片路径和文字信息
        if( h < 12 ){
            oImg.src = 'img/s.gif';
            oTxt.innerHTML = '早上好，亲爱的朋友！';
        } else if ( h > 12 && h < 18) {
            oImg.src = 'img/x.gif';
            oTxt.innerHTML = '下午好，亲爱的朋友！';
        } else {
            oImg.src = 'img/w.gif';
            oTxt.innerHTML = '晚上好，亲爱的朋友！';
        }
        
    </script>
```

### 操作元素 - 修改表单属性

DOM中课操作input表单的一些列属性：type、vaule、checked、selected、disabled等；

操作方法： 获取input元素 ，然后 **element.属性 = '属性值'** 

表单元素是通过value来更改文字内容的；

如果想要某个表单被禁用，不能再点击操作就更改 disabled  取值为true就可以；

  ```js
    <button>我是谁</button>
    <input type="text" >
    <script>
        // 获取input
        var iNput = document.querySelector('input');
        iNput.value = '改变了的input值';
        // 获取button按钮
        var oBtn = document.querySelector('button');
        oBtn.onclick = function() {
            // this表示当前操作的元素 --- 也就是事件源本身
            this.disabled = true;
            // iNput表单也不能操作
            iNput.disabled = true;
        }
    </script>
  ```

#### 显示隐藏密码案例

##### 关于判断条件flag

flag中文意思是“旗帜、标志”，在程序中flag可以用来做复杂条件判断，其实就是程序员自己定义的一个变量，作为标记当前的进程或者状态。为了区分程序在不同阶段实现不同的功能就用标志的值，然后使用if判断标志的值，进入相应程序实现相应功能，一般flag的值是有程序员来决定的，**我们建议取值为0和1或者true和false**，我们可以认为取的两个值相互取反；

通俗的讲：flag是用来做标志的，程序运行的过程中flag会产生变化，一开始我们给flag设置一个初始值，然后在程序的运行过程中检测flag的值，如果它的值等于初始值，我们就直接执行新的程序代码，同时我们需要将flag的值直接赋值为相反的条件值，改变当前flag的判断状态，如果条件不成原来的程序将不改变，同时我们需要将flag的值直接赋值为初始值，改变当前flag的判断状态；

**一句话：flag就是一个记录状态的标志变量；**

```js
    <button>点击</button>
    <img src="img/ldh.jpg" alt="">
    <script>
        // 获取元素
        var oBtn = document.querySelector('button');
        var oImg = document.querySelector('img');
        // 如果等于0 就改变  否则等于1 
        var flag = 0 ;
        oBtn.onclick = function() {
            if( flag == 0 ) {
                oImg.src = 'img/zxy.jpg';
                flag = 1;
            } else {
                oImg.src = 'img/ldh.jpg';
               flag = 0;
            }
        }
    </script>
```



##### 案例代码

算法：利用flag变量，判断flag值，如果是1就切换为文本框，同时设置flag的值为0，如果是0就切换为密码框同时设置flag值为1； 

```html
 <div class="box">
        <label for=""><img src="img/close.png" alt="" id="pic"></label>
        <input type="password" id="in">
    </div>
```

```css
    <style>
        .box {
            position: relative;
            width: 300px;
            height: 50px;
            border: 1px solid #ccc;
            margin: 100px auto;
        }

        .box input {
            width: 300px;
            height: 48px;
            padding-left: 30px;
            border: 0;
            background: #eee;
            box-sizing: border-box;
        }

        .box img {
            position: absolute;
            right: 5px;
            top: 2px;
        }
    </style>
```

```js
    <script>
        // 获取元素
        oImg = document.getElementById('pic');
        oInput = document.getElementById('in');
        // 注册一个判断条件 flag = 0表示程序发生了变化，如果flag=1表示程序没有发生变化 
        var flag =0 ;
        oImg.onclick = function () {
            // 如果flag的值为0，表示当前的程序发生了变化，直接将type属性值更改为text
            if (flag == 0) {
                oInput.type = "text";
                oImg.src = "img/open.png";
                // 同时将开关的状态更改为1 
                flag = 1;
            } else {
                // 如果上面的条件不成立，就保持原来的type值不变
                oInput.type = 'password';
                oImg.src = "img/close.png";
                // 同时将开关的状态设置为0
                flag = 0;
            }
        }
    </script>
```

### 操作元素 ------ 修改样式属性

JS中我们可以修改元素的大小、颜色、位置等样式；

一般我们分为 element.style 行内样式操作   和 element.className 类名样式操作；

#### 行内样式操作  --- element.style

**语法：elenemt.style. css属性**

01、JS中的样式采取驼峰命名法：比如 fontSize，backgroundColor等；

02、通过JS修改的style样式操作，是行内样式操作，css的权重较高；

```js
    <p>我是老王</p>
    <script>
        // 获取元素
        var oP = document.querySelector('p');
        oP.onclick = function() {
            this.style.backgroundColor = 'red';
            this.style.fontSize = '30px';
            this.style.color = '#fff';
        }
    </script>
```

##### 循环更改精灵图案例

想要循环精灵图我们在制作精灵图的时候就需要将每个图标的位置计算好，这样才能使用JS循环更改；

```js
    <script>
        // 获取所有的li元素
        var oLi = document.querySelectorAll('li');
        // 循环li
        for(var i = 0; i < oLi.length; i++) {
            // 按照精灵图每一张图标之间刚好相隔44px  我们可以用i*44 计算出不同的位置
            var index = i*44;
            //将每一个li的style更改
            oLi[i].style.backgroundPositionY = '-'+ index +'px'
        }
    </script>
```

#### 获取和失去input焦点 ---- onfocus、onblur

onfocus  获取焦点

onblur   失去焦点

```js
    <input type="text" value="我是老王">
    <script>
        // 获取input
        var oInput = document.querySelector('input');
        // 添加获取焦点事件 onfocus
        oInput.onfocus = function() {
            this.value = '';
            this.style.color = '#f00';
        }
        // 添加失去焦点事件 onblur
        oInput.onblur = function() {
            this.value = '老王最好';
            this.style.color = '#333';
        }
    </script>
```

#### 使用className修改样式属性

实际开发中我们会修改多个css样式属性，如果用style方法会很麻烦，所以我们可以直接将要修改的样式写到css中类中，然后通过JS更改类名即可；

如果想要保留原来的类名，我们可以使用多类名的设置方法书写；

**语法：element.className**

```js
    <script>
         // 获取元素
         var oP = document.querySelector('p');
         oP.onclick = function() {
             this.className = 'lw';
         }
    </script>
```

##### 密码框提示案例

```html
    <div class="box">
        <input type="text" name="" id="" value="请输入6-18位数字">
        <span></span>
    </div>
```

```css
    <style>
        .box {
            width: 800px;
            height: 52px;
            margin: 100px auto;
        }
        .box input {
            float: left;
            width: 300px;
            height: 48px;
            border: 1px #ccc solid;
        }
        .box span {
            display: none;
            float: left;
            margin-left: 10px;
            padding-left: 20px;
            line-height: 50px;
        }
        .box .wrong {
            display: block;
            color: #f00;
            background: url(img/wrong.png) no-repeat left center;
        }
        .box .right {
            display: block;
            color: #0f0;
            background: url(img/right.png) no-repeat left center;
        }
    </style>
```

```js
  <script>
        // 获取元素
        var oInput = document.querySelector('input');
        var oMess = document.querySelector('span');
        // 失去焦点判断 onblur
        oInput.onblur = function() {
            // 根据表单里面的值长度 oInput.value.lenght
            var lg = oInput.value.length;
            if( lg < 6 || lg > 18) {
                oMess.className = 'wrong';
                oMess.innerHTML = '请输入6-18位长度的密码';
            } else {
                oMess.className = 'right';
                oMess.innerHTML = '恭喜你输入正确';
            }
        }
    </script>
```














































































































































































































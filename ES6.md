# javaScript
>ECMAscript:简称ES，是一种语言标准

>javaScript:运行在浏览器端的语言，使用ES标准。ES + web api = Javascript

>node.js：运行在服务器端的语言，使用ES标准。ES + node api = Javascript
```
无论javaScript，还是node.js，它们都是ES的超集(super set)
```
## ECMAscript关键版本
```
1.ES3.0: 1999

2.ES5.0: 2009

3.ES6.0: 2015,从该版本开始，不在使用数字作为编号，而使用年份。

4.ES7.0: 2016
```
## 为什么ES6重要
>解决了JS无法开发大型应用的语言层面的问题。
## 解决兼容的问题
>后边补充
## ES6

### 块级作用域
>代码执行时遇到花括号，会创建一个块级作用域，花括号结束，块级作用域销毁。
### 块级绑定
1. 声明变量

     1. var(不属于es6)
          * 允许重复的声明变量，容易数据被覆盖
          * 变量提升，怪异的数据访问，闭包问题
          * 全局变量挂载到全局对象：全局对象成员的污染问题

     2. let
          * 声明的变量不会挂在到全局对象
          * 不允许重复的声明变量
          * 有自己的作用域块
 



### 生成器和迭代器
**迭代器**

>在JavaScript中，迭代器（Iterator）是一种用于遍历集合或序列的对象。它提供了一种统一的方式来访问集合中的每个元素，而不需要暴露集合的内部实现细节。迭代器对象必须实现一个名为next()的方法，该方法在每次调用时返回一个包含两个属性的对象：value和done。value表示迭代器当前指向的元素的值，而done表示迭代器是否完成遍历。

*实现原理*
```
'use strict'
function chef (foods) {
     let i = 0;
     return {
          next() {
               let done = (i >= foods.length)
               let value = !done ? foods[i++] : undefined;
               return {
                    value: value,
                    done: done
               }
          }
     }
}
let wanghao = chef(['鸡蛋', '西红柿'])
console.log(wanghao.next())
console.log(wanghao.next())
console.log(wanghao.next())
```

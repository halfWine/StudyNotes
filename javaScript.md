# javaScripy
## ES6
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

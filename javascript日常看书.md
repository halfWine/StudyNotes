# 导出和导入

https://zh.javascript.info/import-export

注意点：
* 有很多要导入的内容，我们可以使用 import * as <obj> 将所有内容导入为一个对象。

```
// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
```

乍一看，“通通导入”看起来很酷，写起来也很短，但是我们通常为什么要明确列出我们需要导入的内容？

* 现代的构建工具（webpack 和其他工具）将模块打包到一起并对其进行优化，以加快加载速度并删除未使用的代码。
* 明确列出要导入的内容会使得名称较短：sayHi() 而不是 say.sayHi()。
* 导入的显式列表可以更好地概述代码结构：使用的内容和位置。它使得代码支持重构，并且重构起来更容易。
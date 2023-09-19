# GIT
>分布式版本控制系统
### 基本用法
>git仓库一般分为仓库、暂存区、工作区

**仓库设置相关**
```
git config --global user.name 'You name' --->添加名字
git config --global user.email 'You email'--->添加邮箱
git init --->初始化仓库
git init [project-name]--->新建目录并将其初始化
git clone [URl]--->下载一个项目和它整个代码历史记录
```

**将工作区添加文件到暂存区**
```
git add [file1] [file2] ... --->添加文件到暂存区
git add [dir] --->添加指定文件（子目录）到暂存区
git add . --->添加当前目录所有文件到暂存区
```
**代码提交到仓库**
```
git commit -m '提交描述' --->添加文件到暂存区
git commit -a --->提交工作区自上次commit之后的变化，直接到仓库
git commt -v  --->提交时显示所有的diff信息
git commt --amend -m [message] --->使用一次新的commit，代替上一次提交，如果代码没有任何变化，则用来改写上一次commit的提交信息
git commit --amend [file1] [file1] ...  --->重做上一次commit，并包括指定文件的变化
```
**查看信息（q退出）**
```
git status --->显示变更的文件
git log --->显示当前分支的版本历史
git log  --stat  --->显示commit历史，以及每次commit发生变化变更的文件
git log  -S [keyword] --->搜索提交的历史，根据关键词
git log [tag] HEAD --pretty=format:%s --->显示某个commit之后的所有变动，每个commit占据一行
git log [tag] HEAD --grep feature --->显示某个commit之后的所有变动，其‘提交说明’必须符合搜索条件
git log  --follow [file] --->显示某个文件的版本历史，包括文件改名
git log  -p [file] --->显示指定文件相关的每一次diff
git log  -5 --pretty --oneline --->显示过去5次提交
```
**版本穿梭(撤销)**
```
git checkout [flie] --->恢复暂存区的指定文件到工作区
git checkout [commit] [flie] --->恢复某个commit的指定文件到暂存区和工作区
git checkout . --->恢复暂存区的所有文件到工作区
git reset [file] --->重置暂存区的指定文件，与上一次commit保持一致，胆工作区不变
git reset --hard --->重置暂存区和工作区，与上一次commit保持一致
git reset [commit] --->重置当前分支的指针为指定commit，同时重置暂存区，但是工作区不变
git reset --hard [commit] --->重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit相同。
git reset --keep [commit] --->重置当前HEAD为指定commit，但保持暂存区和工作区不变
```
**忽略文件配置(.gitignore)**

*配置语法：*
```
以斜杠‘/’开头表示目录；
以星号‘*’通配多个字符；
以问号‘？’通配单个字符；
以方括号'[]‘包含单个字符串的匹配列表；
以感叹号'!'表示不忽略（跟踪）匹配到的文件或者目录；
```
>此外，git对于 .gitignore 配置文件是按行从上到下进行规则配置的，意味着如果前面的规则匹配的范围更大，后面的规则将不会生效。

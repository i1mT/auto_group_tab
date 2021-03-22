# auto_group_tab

可以帮你自动对Chrome tab 分组，解决开了一大堆网页标签找不到的问题，对Chrome 分组提效。

## 啥是分组

Chrome 85开始支持了tab分组功能，你可以右击tab，选择【向群组中添加标签页】将tab分类到一个组中，并且可以自己设置颜色和组名称。

具体可以看[Chrome 分组功能介绍](https://www.appinn.com/chrome-87-tabs-group/)

总的来说分组的好处就是：

1. 易于管理查找标签页
2. 可以收起/展开某分组，来释放顶部的标签布局空间，舒缓压力
3. 设置花花绿绿的颜色，好看 // 这一条是我硬加的:)

![设置组名](https://user-images.githubusercontent.com/13428808/110574312-db0c6700-8197-11eb-9442-c36795fc56ef.png)

## 啥是自动分组

尽管 Chrome 已经在内测自动分组了(上面的分组功能介绍最后一段有介绍)，但是它是基于相同域名的，比较局限；并且开启flag也稍麻烦些。

所以我做了这个插件，你可以自己编辑规则来匹配 tab 的 url，将它自动分配到指定的组中。

## 安装

1. 克隆包
```
git clone https://github.com/i1mT/auto_group_tab.git
```

2. 打开chrome extension 开发者模式


3. 加载已解压的插件，选择 `auto_group_tab` 文件夹

## 使用

### 设置方式
![设置](https://user-images.githubusercontent.com/13428808/110577715-2c1f5980-819e-11eb-85aa-effef3b58d0e.png)

然后，当你打开某一关键字的tab，或改变当前tab的url时，它都会将该tab自动归类到你设置的组中。


## 版本要求
尽管Chrome已经在好几个版本之前开始支持 tab 分组，但是对Tab group的 API 从89才开始。

**所以此插件要求：Chrome版本 89+**

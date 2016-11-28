---
layout: post
title:  "每个程序猿都该有的博客"
date:   2016-08-29 13:23:32
categories: 浅谈前端 CSS
tags: 浅谈前端 CSS
---
####我为什么要写博客？其实我最初打算写博客，原因很简单，我就是想把工作中、学习中遇到 的问题及解决方案记录下来，它能帮你梳理下整个过程的要注意的地方，写写你在工作中遇到的问题，用来记录和回顾。


GITHUB地址：[博客仓库](https://github.com/Haonancx/Haonancx.github.io "博客仓库")


觉得好的话，记得给个星呀~

### 废话少说，先上效果图



![jekyll-blog-1](http://i.imgur.com/8scjoPX.png)

#####网页端

![Jekyll-blog-2](http://i.imgur.com/0QY92m4.png)

#####移动端1

![Jekyll-aboutme](http://i.imgur.com/JpatL1Z.png)

#####移动端2





### 主要技术栈


- GITHUB账户
- SASS、JS、CSS
- 多说评论
- 百度统计




### GITHUB账户

首先，你得有一个GITHUB账户，还没有的赶紧去注册一个吧。




- 登陆 GitHub，新建一个 repository, 命名为 你的用户名 + github.io。如我的用户名为 haonancx，所以 repository 命名为 haonancx.github.io（可以购买私人域名），如下图。

![jekyll-blog-3](http://i.imgur.com/7P5ubpf.png)


##### 注意图片中红色箭头标注的地方，命名和你挂载在 GITHUB 的域名是一致的，就是你命名为 "haonancx",那么你的个人博客地址就是 "haonancx.github.io";其次要勾选上 "Public",别人才能访问你的博客。

- 如果你觉得我博客风格还不错的话，可以去把他 GIT 下来；或者你可以从这里选中你喜欢的博客；地址：[jekyllthemes](http://jekyllthemes.org/ "jekyllthemes")


下载好你喜欢的博客，然后，把它上传到你刚建好的 repository 上；
然后 输入你的博客地址就访问成功了。


### SASS、JS、CSS

##### 如果你需要修改博客内容，这里给你介绍一下；文件夹中的内容（以我的博客为例）。


![filetree](http://i.imgur.com/ICLH3HM.png)


> 
1. _include 文件夹中是网页的公共部分，head.html是文件head标签里的引入的文件，图片等，header.html、footer.html 是网页的公共头部（导航）和底部（版权）；
2. _layouts 中 default.html、post.html 是引入网页的公共头部（导航）和底部（版权）以及编译发表文章的内容，
3. _sass 、css文件夹中有整个博客的公共样式文件。(在这里你可以对你的博客按照你喜欢的 UI 界面进行调整)
4. images 文件夹中包含引用的图片(傻子都知道~)。
5. scripts 文件夹中有引用的 JS 文件。
6. _config.yml 为博客的配置文件，如果你要使用一些插件，大部分都得在这里配置（很重要~）。


### 代码高亮模块（jekyll 支持代码高亮），只需在你写的文章的前后加上约定的代码即可。

##### 撰写方式

![code-1](http://i.imgur.com/EaEn3ln.png)


### 多说评论
jekyll bootstrap搭建的博客默认使用的是Disqus评论插件,当然不是说Disqus不好，只是针对我们国内的用户来说,似乎并不是最好的选择。所以我们改为多说（容易上手）。

![jekyll-blog-5](http://i.imgur.com/ITVqdyd.png)



##### 创建成功之后 我们会得到如下代码


![jekyll-blog-6](http://i.imgur.com/g3zRlzF.png)


#####这段代码有三个地方需要修改


![jekyll-blog-8](http://i.imgur.com/NtVahOQ.png)


最后我们就可以在页面中看到多说了。

![jekyll-blog-9](http://i.imgur.com/FMvB2qX.png)

### 百度统计

先注册个百度统计的账号(站长账号，适合个人博客)，注册成功后；

![jekyll-blog-7](http://i.imgur.com/4wfFmuU.png)

##### 按照提示，把代码复制到 head.html 中的head的标签里；（这里特指我的博客文件）

### 好了，这样你的博客就差不多了，是不是感觉很酷？？？ 今天就到这儿，下篇文章见。
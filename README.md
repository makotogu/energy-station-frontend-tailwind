# 能源站项目的前端页面

## 如何启动项目

### 前置条件

使用node.js进行设置环境，开发环境使用的17.4\
node版本通过`node -v`检查\
在拉取本项目后使用`npm install`或`yarn install`安装需要的内容

### `npm start` 或者 `yarn start`启动项目

项目会运行在本地浏览器[http://localhost:3000](http://localhost:3000).

## 项目文件解释

### 配置文件

项目更目录中的`tailwind.config.js`是管理`tailwind css`的配置文件\
`package.json`是管理项目使用的插件包的文件\
`.env`为环境变量管理文件更改内容修改全局变量，使用`REACT_APP_`作为变量开头

### src目录中内容

#### `components` 项目组件管理

anime中动画组件\
charts中放图表组件\
command-bar中是对主页中命令下发组件的控制\
drop-nav中放置下拉导航栏\
login-parts中放置登陆页面中的滑动效果实现的模块\
structure中放置每个结构的内容\
tables中放置表格组件\

#### `views`放构成web的主要页面

#### `static`放静态资源（图片)

## 主要参考第三方库

* material ui [MUI官网](https://mui.com/zh/)
* tailwind css [官网](https://tailwindcss.com)
  * 与tailwind配合很好的组件 [headless ui](https://headlessui.dev)
  * 很好的图标库 [heroicon](https://heroicons.com)
* recharts 图表库 [官网](https://recharts.org/en-US/)
* 动画库 [animeJS](https://www.animejs.cn)
* 工具库 [react-use](https://github.com/streamich/react-use)
* 路由 [react-router-dom@v5](https://v5.reactrouter.com)

## React

[快速入门](https://youtu.be/j942wKiXFu8) youtube react教程\
[hooks入门](https://www.bilibili.com/video/BV1JU4y1E73v?share_source=copy_web) 9分钟掌握React Hooks正确认知

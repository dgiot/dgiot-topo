# dgiot-topo

<p align="center">
  <img src="https://img.shields.io/github/commit-activity/m/dgiot/dgiot-topo" alt="ommit-activity">
	<img src="https://badgen.net/badge/package/%40dgiot%2Fdgiot-topo/blue"
	alt="package" maxretrytimes="3" class="m-1 transition-all duration-1000">
	<img src="https://badgen.net/npm/v/@dgiot/dgiot-topo" alt="Npm Version"
	maxretrytimes="3" class="m-1 transition-all duration-1000">
	<img src="https://badgen.net/npm/node/@dgiot/dgiot-topo" alt="Node Version"
	maxretrytimes="3" class="m-1 transition-all duration-1000">
	<br>
	<img src="https://badgen.net/jsdelivr/hits/npm/@dgiot/dgiot-topo"
	alt="Jsdeliver Month Downloads" maxretrytimes="3" class="m-1 transition-all duration-1000">
	<img src="https://badgen.net/packagephobia/install/@dgiot/dgiot-topo"
	alt="Install Size" maxretrytimes="3" class="m-1 transition-all duration-1000">
	<img src="https://badgen.net/npm/types/@dgiot/dgiot-topo" alt="Type Support"
	maxretrytimes="3" class="m-1 transition-all duration-1000">
	<br>
	<img src="https://img.shields.io/librariesio/release/npm/@dgiot/dgiot-topo"
	alt="Outdated Dep" maxretrytimes="3" class="m-1 transition-all duration-1000">
	<img src="https://img.shields.io/snyk/vulnerabilities/npm/@dgiot/dgiot-topo"
	alt="Vulnerablities" maxretrytimes="3" class="m-1 transition-all duration-1000">
  <a href="https://www.npmjs.com/package/@dgiot/dgiot-topo"><img src="https://img.shields.io/npm/l/@dgiot/dgiot-topo" alt="License"></a>
<p>

> dgiot-topo 开源图片编辑器，采用Vue+JavaScript+Konva开发。

![微服务架构图_02.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/web/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84%E5%9B%BE_02.png)

### 🏠 [Homepage](https://github.com/dgiot/dgiot-topo#readme)

### ✨ [演示地址](https://dgiot.github.io/dgiot-topo/)

## 项目目录
```
.
├── konva
│   ├── canvas         //画布组件
│   ├── layout         //页面布局
│   ├── shape-panel    // 右侧面板
│   └── transformer-wrapper // 支持transformer高阶组件
├── components
│   ├── color-select   // 颜色选择器
│   ├── context-menu   // 右键菜单
│   ├── image          // 图片
│   ├── text           // 文本
│   ├── text-input     // 文本输入
│   └── toolbar        // 导航
├── store
│   └── index.js  // Vuex状态管理
├── pages
│   ├── index.less
│   └── index.tsx
├── styles
│   ├── index.less
│   └── theme
├── typing.ts
└── utils
    └── util.ts
```

## 功能特性

目前主要实现了简单的图片编辑，支持文字，图片等。

### 已支持的功能列表

- [x] layout布局
- [x] 文字编辑组件
- [x] 图片编辑组件
- [x] 画布放大缩小
- [x] 画布右键菜单
- [x] 图片下载
- [x] 背景图支持



### 待实现的功能列表

- [ ] 工具类操作支持上一步下一步
- [ ] 图形组件
- [ ] 标记组件
- [ ] 画布多个元素组合
- [ ] 文字组件增加，字体丰富，透明度等。
- [ ] 画布参考线
- [ ] 画布多个尺寸，支持多平台
- [ ] 接入后台，实现登录，保存模板

## 项目架构

项目用vue开发框架，采用javascript编写，图片编辑功能用的是`konva`,状态管理`vuex`,消息通讯`dgiotBus`。


技术栈
|  技术   | 说明  | 官网  |
|  ----  | ----  |  ---- |
| vue  | 渐进式javascript框架 | https://vuejs.org/    |
| konva |  Konva.js - 适用于桌面/移动端应用的 HTML5 2d canvas 库. |  https://konvajs.org/docs/index.html |
| dgiotBus | dgiot 前端消息中间件  | https://github.com/dgiot/dgiotBus  |

## Installation

```bash
yarn add @dgiot/dgiot-topo
```

## Quick Start


### [examples.vue](https://github.com/dgiot/dgiot-Component-example/blob/master/src/topo.vue)
  ```diff
  <template>
    <div id="app">
      +<dgiot-topo />
    </div>
  </template>

  <script>
  +import DgiotTopo from '@dgiot/dgiot-topo/topo'
  export default {
    name: 'App',
    components: {
      +DgiotTopo
    },
  }
  </script>
  ```
### Online examples

[![Edit gmullerb-react-reducer-provider](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/dgiot/dgiot-topo)

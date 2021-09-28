<!--
* @Author: h7ml
* @Date: 2021-09-28 14:32:29
* @LastEditors: h7ml
* @LastEditTime: 2021-09-28 14:32:29
* @Description:
* @FilePath: src\App.vue
* @DocumentLink: http://39.97.252.98:3000/
-->

<template>
  <div class="app">
    <el-container>
      <el-header>
        <topo-header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <topo-left />
        </el-aside>
        <el-main  width="800px">
          <dgiot-Konva />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import TopoHeader from  './konva/layout/header/index'
  import TopoLeft from  './konva/layout/slider-left/index'
  import konva from './konva/canvas/index'
  import moment from 'moment'
  export default {
    name: 'app',
    components: {
      DgiotKonva:konva,
      TopoHeader,
      TopoLeft
    },
    data() {
      return {
      }
    },
    computed: {},
    mounted() {
      const json = {"attrs":{"width":1920,"height":969},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":40,"y":59.5,"width":100,"height":50,"fill":"#00D2FF","stroke":"black","strokeWidth":4,"draggable":true},"className":"Rect"}]}]}
      this.$dgiotBus.$emit('createTopo',json)
    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {},
    methods: {
    }, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style>
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #f0f0f0;
  }
  .el-header {
    line-height: 60px;
    color: #333;
    background-color: #B3C0D1;
  }

  .el-aside {
    color: #333;
  }
</style>

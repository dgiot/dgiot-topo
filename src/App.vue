<!--
* @Author: h7ml
* @Date: 2021-09-28 14:32:29
* @LastEditors: h7ml
* @LastEditTime: 2021-09-28 14:32:29
* @Description: 参考鲁班h5的布局
* @FilePath: src\App.vue
* @DocumentLink: https://h5.luban-h5.com/#/editor/33896
-->

<template>
  <div class="app"><el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style=" font-size: 12px;text-align: right">
        <el-dropdown>
          <el-button type="success" @click.native="createBusTopo()">eventbus绘制</el-button>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <dgiot-Konva />
      </el-main>
    </el-container>
  </el-container></div>
</template>

<script>
  import konva from './konva/canvas/index'
  import moment from 'moment'
  export default {
    name: 'app',
    components: {DgiotKonva:konva},
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
      createBusTopo(){
        const json ={"attrs":{"width":1920,"height":969},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"text":"Loading video...","width":1920,"height":969,"align":"center","verticalAlign":"middle","fill":"black"},"className":"Text"},{"attrs":{"id":"dgiot_labelid","name":"1111","x":400,"y":100,"draggable":true},"className":"Label","children":[{"attrs":{"id":"dgiot_Tagid","name":"tag","fill":"#bbb","stroke":"#333","shadowColor":"black","shadowBlur":10,"shadowOffset0":10,"shadowOffset1":10,"shadowOpacity":0.2,"lineJoin":"round","pointerDirection":"up","pointerWidth":20,"pointerHeight":20,"cornerRadius":5,"x":74.21142578125,"y":20,"width":128.4228515625,"height":80},"className":"Tag"},{"attrs":{"id":"dgiot_text","text":`dgiot-${moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}`,"fontSize":50,"lineHeight":1.2,"padding":10,"fill":"green","x":64.21142578125,"y":20},"className":"Text"}]}]}]}
        this.$dgiotBus.$emit('createTopo',json)
      }
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

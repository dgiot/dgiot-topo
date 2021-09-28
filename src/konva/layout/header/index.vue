<!--
* @Author: h7ml
* @Date: 2021-09-28 12:08:36
* @LastEditors: h7ml
* @LastEditTime: 2021-09-28 12:08:36
* @Description:
* @FilePath: src\konva\layout\header\index.vue
* @DocumentLink:
-->
<template>
  <div class="index-container">
    <div class="index-content">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><el-link type="primary" href="/" :underline="false">图片编辑器</el-link></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><el-button size="mini" type="success" @click.native="createBusTopo()">eventbus绘制</el-button></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <el-button type="primary" icon="el-icon-refresh-left" title="撤销" @click.native="revoke"></el-button>
          <el-button type="primary" icon="el-icon-refresh-right" title="重做"  @click.native="redo"></el-button>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <el-button type="primary" icon="el-icon-download" title="下载" @click.native="download"></el-button>
        </el-col>
      </el-row>
    </div>
   </div>
</template>

<script>
  import { saveJSON } from "../../../utils/util.js";
  import moment from "moment";
  import store from '../../../store'
  export default {
    name: 'TopoHeader',
    components: {},
    data() {
      return {
        infoData: 'header',
      }
    },
    computed: {},
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {},
    methods: {
      revoke(){
        this.$message.success('撤销成功')
      },
      redo(){
        this.$message.success('重做成功')
      },
      download(){
        console.log()
        const json =   store.state.konvaJson
        saveJSON(json,'konva.json')
        this.$message.success('撤销成功')
      },
      createBusTopo(){
        const json ={"attrs":{"width":1920,"height":969},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"text":"Loading video...","width":1920,"height":969,"align":"center","verticalAlign":"middle","fill":"black"},"className":"Text"},{"attrs":{"id":"dgiot_labelid","name":"1111","x":400,"y":100,"draggable":true},"className":"Label","children":[{"attrs":{"id":"dgiot_Tagid","name":"tag","fill":"#bbb","stroke":"#333","shadowColor":"black","shadowBlur":10,"shadowOffset0":10,"shadowOffset1":10,"shadowOpacity":0.2,"lineJoin":"round","pointerDirection":"up","pointerWidth":20,"pointerHeight":20,"cornerRadius":5,"x":74.21142578125,"y":20,"width":128.4228515625,"height":80},"className":"Tag"},{"attrs":{"id":"dgiot_text","text":`dgiot-${moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}`,"fontSize":50,"lineHeight":1.2,"padding":10,"fill":"green","x":64.21142578125,"y":20},"className":"Text"}]}]}]}
        this.$dgiotBus.$emit('createTopo',json)
      }
    }, //如果页面有keep-alive缓存功能，这个函数会触发
  }

</script>
<style lang="scss" scoped>
    .index-container {
      width:100%;
      height: 100%;
      &-container {
        width:100%;
        height: 100%;
      }
    }
</style>

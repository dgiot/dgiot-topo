<!--
* @Author: vivi
* @Date: 2021-09-28 19:11:08
* @LastEditors: vivi
* @LastEditTime: 2021-09-28 19:11:08
* @Description:
* @FilePath: src\konva\layout\slider-left\index.vue
* @DocumentLink:
-->
<template>
  <div class="index-container">
    <div class="index-content">
      <el-tabs tab-position="left">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
   </div>
</template>

<script>
  export default {
    name: 'index',
    components: {},
    data() {
      return {
        infoData: 'TopoLeft',
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
    methods: {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }

</script>
<style lang="scss" scoped>
</style>


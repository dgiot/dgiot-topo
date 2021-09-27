<!--
* @Author: h7ml
* @Date: 20:11
* @LastEditors: vivi
* @LastEditTime: 20:11
* @Description:
* @FilePath: D:\msys64\home\vivi\github\npm\component\dgiot-topo\src\konva\layout\slider-right\index.vue
* @DocumentLink:
-->
<template>
  <div class="$name-container">
    <div class="$name-content">
      {{ infoData }}
      <div>
      </div>
</template>

<script>
  export default {
    name: $name,
    components: {},
    data() {
      return {
        infoData: '$name',
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
    .name-container {
      width:100%;
      height: 100%;
      &-container {
        width:100%;
        height: 100%;
      }
    }
</style>


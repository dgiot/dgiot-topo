<!--
* @Author: h7ml
* @Date: 2021-09-28 12:07:02
* @LastEditors: h7ml
* @LastEditTime: 2021-09-28 12:07:02
* @Description:
* @FilePath: src\konva\canvas\index.vue
* @DocumentLink:
-->
<template>
  <div class="index-container">
    <div class="index-content" id="kevCurrent" :key="konvaKey">
    </div>
   </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'index',
    components: {},
    data() {
      return {
        konvaKey: moment(new Date()).valueOf(),
        infoData: 'index',
      }
    },
    props:{
      config: {
        type: Object,
        default() {
          const json = {}
          return json
        },
    },},
    computed: {},
    mounted() {
      this.$dgiotBus.$off('createTopo')
      this.$dgiotBus.$on('createTopo', (args) => {
       if(args)  this.createTopo(args)
      })
    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {},
    methods: {
      createTopo(json){
        const stage = Konva.Node.create(json, 'kevCurrent')
      }

    }, //如果页面有keep-alive缓存功能，这个函数会触发
  }

</script>
<style lang="scss" scoped>
    .index-container {
      width:100%;
      height: 100%;
      &-content {
        width:100%;
        height: 100%;
      }
    }
</style>

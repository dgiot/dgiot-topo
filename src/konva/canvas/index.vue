<!--
* @Author: h7ml
* @Date: 2021-09-28 12:07:02
* @LastEditors: h7ml
* @LastEditTime: 2021-09-28 12:07:02
* @Description:
* @FilePath: src\konva\canvas\index.vue
* @DocumentLink: https://github.com/great-tiger/konva/tree/master/1.%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E4%BE%8B%E5%AD%90%E7%9C%8BKonva%E4%BB%A3%E7%A0%81%E7%BB%93%E6%9E%84
-->
<template>
  <div class="index-container">
    <div class="index-content" id="kevCurrent" :key="konvaKey">
    </div>
   </div>
</template>

<script>
  import moment from 'moment'
  import store from '../../store'
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
        // 存储到vuex中
        store.dispatch("saveKonvaJson",stage.toJSON())
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

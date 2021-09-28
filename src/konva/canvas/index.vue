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
          const json = {
            "attrs": {
              "width": 2382,
              "height": 1684,
              "draggable": true
            },
            "className": "Stage",
            "children": [
              {
                "attrs": {
                  "hitGraphEnabled": false
                },
                "className": "Layer",
                "children": [
                  {
                    "attrs": {},
                    "className": "Image"
                  },
                  {
                    "attrs": {
                      "source": "https://konvajs.org/assets/yoda.jpg"
                    },
                    "className": "Image"
                  }
                ]
              },
              {
                "attrs": {},
                "className": "Layer",
                "children": [
                  {
                    "attrs": {
                      "draggable": true,
                      "x": 306,
                      "y": 303,
                      "transformsEnabled": "position"
                    },
                    "className": "Group",
                    "children": [
                      {
                        "attrs": {
                          "radius": 20,
                          "stroke": "#231fff",
                          "strokeWidth": 4,
                          "fill": "#ffffff"
                        },
                        "className": "Circle"
                      },
                      {
                        "attrs": {
                          "text": "1",
                          "fontSize": 14,
                          "originX": "center",
                          "originY": "center",
                          "fill": "#231fff",
                          "x": -5,
                          "y": -5
                        },
                        "className": "Text"
                      },
                      {
                        "attrs": {
                          "data": "M.91,0H29.09A.91.91,0,0,1,30,.91v243a.88.88,0,0,1-.26.63L15.65,258.86a.9.9,0,0,1-1.3,0L.26,244.52a.88.88,0,0,1-.26-.63V.91A.91.91,0,0,1,.91,0Z",
                          "originX": "center",
                          "originY": "bottom",
                          "x": 10,
                          "y": 15,
                          "angle": -30,
                          "fill": "#231fff",
                          "scaleX": 0.15,
                          "scaleY": 0.15,
                          "rotation": -30
                        },
                        "className": "Path"
                      }
                    ]
                  },
                  {
                    "attrs": {
                      "draggable": true,
                      "x": 120,
                      "y": 157,
                      "transformsEnabled": "position"
                    },
                    "className": "Group",
                    "children": [
                      {
                        "attrs": {
                          "radius": 20,
                          "stroke": "#231fff",
                          "strokeWidth": 4,
                          "fill": "#ffffff"
                        },
                        "className": "Circle"
                      },
                      {
                        "attrs": {
                          x: 2,
                          y: 1,
                          text:
                            "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
                          fontSize: 18,
                          fontFamily: 'Calibri',
                          fill: '#555',
                          width: 300,
                          padding: 20,
                          align: 'center',
                        },
                        "className": "Text"
                      },
                      {
                        "attrs": {
                          "data": "M.91,0H29.09A.91.91,0,0,1,30,.91v243a.88.88,0,0,1-.26.63L15.65,258.86a.9.9,0,0,1-1.3,0L.26,244.52a.88.88,0,0,1-.26-.63V.91A.91.91,0,0,1,.91,0Z",
                          "originX": "center",
                          "originY": "bottom",
                          "x": 10,
                          "y": 15,
                          "angle": -30,
                          "fill": "#231fff",
                          "scaleX": 0.15,
                          "scaleY": 0.15,
                          "rotation": -30
                        },
                        "className": "Path"
                      }
                    ]
                  }
                ]
              }
            ]
          }
          return json
        },
    },},
    computed: {},
    mounted() {
      this.createTopo(this.config)
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
        this.konvaKey = moment(new Date()).valueOf()
        const tabInfo = {
          json: json,
          konvaKey: this.konvaKey,
          stage: stage.toJSON(),
        }
        console.groupCollapsed(
          '%cTopobase info',
          'color:#009a61; font-size: 28px; font-weight: 300'
        )
        console.table(tabInfo)
        console.groupEnd()
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

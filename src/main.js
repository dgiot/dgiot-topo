import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueKonva from 'vue-konva'
Vue.use(VueKonva)
import dgiotTopo from './mixins/topo'
import dgiotStore from './store'
Vue.mixin(dgiotTopo)
Vue.config.devtools = true
new Vue({
  el: '#app',
  dgiotStore,
  render: h => h(App)
})

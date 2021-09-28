import Vue from 'vue';
const dgiotBus = new Vue({
  methods: {
    emit(event, ...args) {
      this.$emit(event, ...args);
    },
    on(event, callback) {
      this.$on(event, callback);
    },
    off(event, callback) {
      this.$off(event, callback);
    },
  },
});
window.dgiotBus = dgiotBus;
Vue.prototype.$dgiotBus = dgiotBus;
Vue.use(dgiotBus);
export default dgiotBus;

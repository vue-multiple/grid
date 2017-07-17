import Vue from 'vue'
import App from './App.vue'

import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

import { Row, Col } from '../../src/index.js'
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)

new Vue({
  el: '#app',
  render: h => h(App)
})

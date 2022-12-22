/*
 * @Author: pengyue
 * @Date: 2020-07-11 06:40:46
 * @LastEditTime: 2020-07-12 16:26:26
 * @LastEditors: pengyue
 * @Description:
 * @FilePath: /taro-ui-vue/packages/taro-ui-vue-demo/src/app.ts
 */

import Vue from 'vue'
import Taro from '@tarojs/taro'

import TaroUi from 'taro-ui-vue'
import 'taro-ui-vue/style/index.scss'
import './app.scss'

import DocsHeader from './components/DocsHeader.vue'

Vue.config.productionTip = false
Vue.prototype.$taro = Taro

console.log(111111111)

Vue.component('DocsHeader', DocsHeader)
Vue.use(TaroUi)

const App = {
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  },
}

export default App

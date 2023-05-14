import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
/* eslint-disable */
let instance = null

function render (props) {
  const { container } = props
  instance = new Vue({
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}
/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap () {
  console.log("vue2 app bootstraped")
}

/**
 * mount ： 在应用每次进入时调用
 */
export async function mount (props) {
  render(props)
}

/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount () {
  instance = null
}

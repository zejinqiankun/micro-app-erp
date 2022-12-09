import './public-path';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
let instance = null

//1. 将注册方法用函数包裹，供后续主应用与独立运行调用
function render(props = {}) {
  console.log('render ebill')
  const { container, globeData } = props
  // 填充 globeData 到子应用store里
  store.state.globeData = globeData
  console.log(props)

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app-micro') : '#app-micro')
}

// 判断是否在乾坤环境下，非乾坤环境下独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 2. 导出的生命周期
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap(props) {
  console.log('[vue] vue app bootstraped ', props)
  Vue.use(props.shareComponent) // 挂着下发全局组件
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('[vue] props from main framework', props)
  render(props);
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  console.log('unmount---', props)
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props)
}
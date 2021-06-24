// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  require('../resource/main.js')
  // 判断是否安装
  if (install.installed) return
  
  const files = require.context('./plugins/', true, /index\.(vue|js)$/)
	files.keys().forEach(key => {
    const arr = key.split('/')
    const componentName = arr[arr.length-2]
    // 获取组件配置
    const componentConfig = files(key)
    // 全局注册组件
    Vue.component(
      componentName,
      // 如果这个组件选项是通过 `export default` 导出的，
      // 那么就会优先使用 `.default`，
      // 否则回退到使用模块的根。
      componentConfig.default || componentConfig
    )
  })
}

export default {
  install,
}
import Cell from './cell/index.js'
import Input from './input/index.js'

const install = function (Vue) {
  if (install.installed) return

  Vue.component(Cell.name, Cell)
  Vue.component(Input.name, Input)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  Cell,
  Input
}

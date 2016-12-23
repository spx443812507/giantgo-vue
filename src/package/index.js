import Layout from './layout/index.js'
import Cell from './cell/index.js'
import Input from './input/index.js'
import CheckList from './checklist/index.js'

const install = function (Vue) {
  if (install.installed) return

  Vue.component(Layout.name, Layout)
  Vue.component(Cell.name, Cell)
  Vue.component(Input.name, Input)
  Vue.component(CheckList.name, CheckList)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  Cell,
  Input,
  CheckList,
  Layout
}

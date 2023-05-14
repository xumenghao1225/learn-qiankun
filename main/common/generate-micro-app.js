// const getActiveRule = (hash) => (location) => location.hash.startsWith(hash)
const store = {
  token: "1363",
  authCode: [ "rights", "lefts" ]
}
import { ininState } from "./action"
const microApp = [
  {
    name: 'qiankunvue3',
    entry: "//localhost:7101",
    activeRule: '/vue3',
    props: {}
  },
  {
    name: 'qiankunvue2',
    entry: "//localhost:7201",
    activeRule: '/vue2',
    props: {}
  },
]
export function gernerateMicroApp(){
  return microApp.map((item)=>{
    const { name, entry, props, activeRule} = item;
    const state = ininState(store)
    return {
      // 子应用的名称
      name,
      // 默认这个地址下的html文件
      entry,
      activeRule: activeRule,
      // 主应用中用于渲染子应用的容器
      container: "#basecontainer",
      props: Object.assign(state, props, store)
    }
  })
}
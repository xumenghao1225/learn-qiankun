// const getActiveRule = (hash) => (location) => location.hash.startsWith(hash)
const store = {
  token: "1363",
  authCode: [ "rights", "lefts" ]
}
const microApp = [
  {
    name: 'subvue',
    entry: "//localhost:7101",
    activeRule: '/sub-vue',
    props: {}
  },
]
export function gernerateMicroApp(){
  return microApp.map((item)=>{
    const { name, entry, props, activeRule} = item;
    const fn = {
      getMainState: ()=> store
    }
    return {
      // 子应用的名称
      name,
      // 默认这个地址下的html文件
      entry,
      activeRule: activeRule,
      container: "#subvue",
      props: Object.assign({fn}, props)
    }
  })
}
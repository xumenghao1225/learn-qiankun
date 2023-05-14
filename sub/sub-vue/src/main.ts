import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./patch-path";

function render(props: any) {
  const { container, fn = null } = props;
  if (fn) getGlobalState(fn);
  const app = createApp(App);
  app
    .use(store)
    .use(router)
    .use(store)
    .mount(container ? container.querySelector("#app") : "#app");
}
// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}
/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap() {
  console.log(" vue3 app bootstraped");
}

/**
 * mount ： 在应用每次进入时调用
 */
export async function mount(props: any) {
  console.log("mount vue3", props);
  props.setGlobalState({ state: 1212 });
  render(props);
}

/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount() {
  createApp(App).unmount();
}
type fnType = {
  getMainState: () => void;
};
function getGlobalState(fn: fnType) {
  const { getMainState } = fn;
  console.log(getMainState());
}

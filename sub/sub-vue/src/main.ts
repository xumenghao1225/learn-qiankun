import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

function render(props: any) {
  const { container } = props;
  console.log(container);
  app
    .use(store)
    .use(router)
    .use(store)
    .mount(container ? container.querySelector("#subvue") : "#subvue");
}
// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}
/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export function bootstrap() {
  console.log("'vue app bootstraped");
}

/**
 * mount ： 在应用每次进入时调用
 */
export function mount(props: any) {
  console.log("mount", props);
  render(props);
}

/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export function unmount() {
  console.log("unmount");
  app.unmount();
}

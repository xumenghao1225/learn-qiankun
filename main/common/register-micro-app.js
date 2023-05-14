import { registerMicroApps, start } from 'qiankun';
import { gernerateMicroApp } from "./generate-micro-app.js";


export function init_register_microApp(){
  registerMicroApps(gernerateMicroApp(),{
    beforeLoad: (app)=>{
      console.log('Before load micro app: ', app.name);
    },
  })
  start()
}
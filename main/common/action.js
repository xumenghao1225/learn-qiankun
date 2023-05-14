import { initGlobalState } from "qiankun"
/**
 * 初始化全局state
 * @param {*} state
 */
export function ininState(state) {
  const defaultState = {...state};
  const action = initGlobalState(defaultState)
  return action
}
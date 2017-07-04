// 单例模式
// 定义：保证一个类仅有一个实例,并提供一个访问他的全局访问点
// 举例: 线程池, 全局缓存, 浏览器的window对象, 登录浮窗
// 
const getSingle = function (fn) {
  let result;
  return function () {
    return result || (result = fn.apply(this, arguments))
  }
}
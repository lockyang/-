/* 分时函数
   接受3个参数
   {
    arg: 需要分时处理的数据
    fn: 封装的处理函数
    count: 每次处理的数量
   }
*/
let timeChunk = (arg, fn, count) => {
  let obj,
      t;

  let len = arg.length;

  let start = () => {
    for (let i = 0, i < Math.min( count || 1, ary.length); i++) {
      obj = ary.shift();
      fn( obj );
    }
  }

  return function () {
    t = setInterval(() => {
      if (ary.length === 0) {
        return clearInterval(t);
      }
      start()
    }, 200)
  }
}
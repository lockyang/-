// 类型判断
let typeJudge = {}
let types = ['Object', 'Number'] //String ....
types.map((val) => {
  typeJudge[`is${val}`] = (obj) => {
    return Object.prototype.toString.call(obj) === `[object ${val}]`
  }
})
export default typeJudge

// // 使用 Mock
// var Mock = require('mockjs')
// var data = Mock.mock({
//     name: {
//         first: '@FIRST',
//         middle: '@FIRST',
//         last: '@LAST',
//         full: '@first @middle @last'
//     }
// })
// // 输出结果
// console.log(JSON.stringify(data, null, 4))


// process.nextTick(function () {
//   console.log('nextTick延迟执行1');
// })

// process.nextTick(function () {
//   console.log('nextTick延迟执行2');
// })

// setImmediate(function () {
//   console.log('setImmediate延迟执行1');
//   process.nextTick(function () {
//     console.log('nextTick延迟执行3');
//   })
// })

// setImmediate(function () {
//   console.log('setImmediate延迟执行2');
// })

// console.log('正常执行');

var word = function (str) {
   return split(' ', str)
}

console.log(word('Jon Snow'));
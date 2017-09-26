let isPrime = (function () {
  let hash = {//哈希中存储类似这样的结构
     //8: false,
     //7: true
   }
   let isPrime = (n)=> { // 返回内层函数
      if (n <3) {
          return true
       } else if (hash[n] !==undefined) {
           return hash[n]
       } else {
          for (leti = 2; i < Math.sqrt(n);i++) {
              if (n%i ==0) {
                 return hash[n] =false;
              }
          }
         return hash[n] =true
      }
  }
 return isPrime
})() //这个函数使用闭包 和 一个对象（实现记忆）
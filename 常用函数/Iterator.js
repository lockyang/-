/* 外部迭代器 */
const Interator = (obj) => {
  let current = 0;
  const isDone = () => {
    return current >= obj.length
  };
  const next = () => {
    return current += 1;
  }
  const getCurrentItem = () => {
    return obj[ current ]
  }
  return {
    next: next,
    isDone: isDone,
    getCurrentItem: getCurrentItem
  }
}
/*
* var compar = function (one , two) {
*   while ( !one.isDone() && !two.isDone() ) {
*     if ( one.getCurrentItem() !== two.getCurrentItem() ) {
*       return console.log('不相等');
*     }
*     one.next();
*     two.next();
*   }
*   console.log('相等')
* }
* var one = Interator([1,2,3]);
* var two = Interator([1,2,4]);
* compar(one, two);
*/
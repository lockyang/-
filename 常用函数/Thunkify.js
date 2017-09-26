function thunkify (fn) {
  if (typeof fn !== 'function') {
    return console.log( 'function required' );
  }
  return function () {
    var args = new Array(arguments.length);
    var ctx = this;
    for (var i = 0; i < args.length; ++i) {
      args[ i ] = arguments[ i ]
    }
    return function (done) {
      var called;
      args.push(function () {
        if (called) return;
        called = true
        done.apply(null, arguments)
      })
      try {
        fn.apply(ctx, args)
      } catch (err) {
        done(err);
      }
    }
  }
}
// http://www.ruanyifeng.com/blog/2015/05/thunk.html 阮一峰
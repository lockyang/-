let throttle = function ( fn, interval = 500) {
  let __self = fn,
      timer,
      firstTime = true;

  return function () {
    let args = arguments;
        __me = this;

    if ( firstTime ) {
      __self.apply(__me, args);
      return firstTime = false;
    }

    if ( timer ) {
      return false;
    }

    timer = setTimeout(function () {
      clearTimeout(timer);
      timer = null;
      __self.apply(__me, args);
    }, interval)
  };
};

const createProxyFactory = fn => {
  let cache = [];
  return (...args) => {
    if ( args in cache ) {
      return cache[ args ]
    }
    return cache[ args ] = fn.apply( this, args );
  }
}
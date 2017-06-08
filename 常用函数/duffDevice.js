    var i = items.length % 8;
    while (i) {
      process(items[i--]);
    }
    i = Math.floor(items.length / 8);
    while (i) {
      process(items[i--]);
      process(items[i--]);
      process(items[i--]);
      process(items[i--]);
      process(items[i--]);
      process(items[i--]);
      process(items[i--]);
      process(items[i--]);
    }
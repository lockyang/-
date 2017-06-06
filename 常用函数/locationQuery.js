  getHrefQuery (name) {

    let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);

    let r = window.location.search.substr(1).match(reg);

    return r ? unescape(r[2]) : null
  }
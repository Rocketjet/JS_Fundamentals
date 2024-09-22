/* function maskify(cc) { // '4556364607935616'
  if (cc.length <= 4) {
    return cc;
  }
  let sliced = cc.slice(-4);
  return sliced.padStart((cc.length), '*');  // ************5616
} */

/* maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4); */
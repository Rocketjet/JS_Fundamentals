/* function rgb(r, g, b) {
  function decToHex(c) {
    if (c > 255) {
      return "FF";
    }
    else if (c < 0) {
      return "00";
    }
    else return c.toString(16).padStart(2, "0").toUpperCase();
  }

  return decToHex(r) + decToHex(g) + decToHex(b);
} */

/* function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
} */
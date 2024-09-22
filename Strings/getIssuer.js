/* function getIssuer(number) {

  const num = number.toString().split("");
  const AMEX = num.slice(0, 2).join("");
  const Discover = num.slice(0, 4).join("");
  const Mastercard = num.slice(0, 2).join("");
  const VISA = num[0];

  if (AMEX == "34" || AMEX == "37" && num.length == 15) {
    return "AMEX";
  } else if (Discover == "6011" && num.length == 16) {
    return "Discover";
  } else if (Mastercard == "51" || Mastercard == "52" || Mastercard == "53" || Mastercard == "54" || Mastercard == "55" && num.length == 16) {
    return "Mastercard";
  } else if (VISA == 4 && (num.length == 13 || num.length == 16)) {
    return "VISA";
  } else {
    return "Unknown";
  }

} */

/* function getIssuer(number) {
  let cardStr = number.toString();
  if (cardStr.match(/^3[4|7]\d{13}$/g)) return 'AMEX';
  if (cardStr.match(/^4(\d{12}|\d{15})$/g)) return 'VISA';
  if (cardStr.match(/^5[1-5]\d{14}$/g)) return 'Mastercard';
  if (cardStr.match(/^6011\d{12}$/g)) return 'Discover';
  return 'Unknown';
}
 */

/* function getIssuer(number) {
  var s = number.toString();
  if (/^3[4|7]\d{13}$/.test(s)) return "AMEX";
  if (/^6011\d{12}$/.test(s)) return "Discover";
  if (/^5[1-5]\d{14}$/.test(s)) return "Mastercard";
  if (/^4(\d{12}|\d{15})$/.test(s)) return "VISA";
  return "Unknown";
} */
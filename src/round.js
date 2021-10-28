export default function round(num, digit) {
    return +(Math.round(num + "e+" + digit) + "e-" + digit);
  }
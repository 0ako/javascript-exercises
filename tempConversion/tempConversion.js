const ftoc = function(f) {
  return Math.round((f - 32) * (5/9) * 10) / 10;
}

const ctof = function(c) {
  return Math.round((c * (9 / 5) + 32) * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}

// var.2
// const ftoc = function(f) {
//   let c = 0;
//   c = (f - 32) * (5 / 9);
//   c = Math.round(c * 10) / 10
//   return c; 
// }

// const ctof = function(c) {
//   let f = 0;
//   f = c * (9 / 5) + 32
//   f = Math.round(f * 10) / 10;
//   return f;
// }

// module.exports = {
//   ftoc,
//   ctof
// }

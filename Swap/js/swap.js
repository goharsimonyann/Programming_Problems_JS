//  SOLUTION 1
let a = 5,
  b = 7,
  c = 10,
  d = 24,
  e = 15,
  f = 6;

//  USING 3 VARIABLES
function swapOne(a, b) {
  console.log("before: ", a, b);
  let tmp = a;
  a = b;
  b = tmp;
  console.log("after: ", a, b);
}

//  ANOTHER CASE
function swapTwo(a, b) {
  console.log("before: ", a, b);
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("after: ", a, b);
}

//  USING ARRAYS
function swapThree(a, b) {
  console.log("before: ", a, b);
  [a, b] = [b, a];
  console.log("after: ", a, b);
}

//  USING XOR
function swapFour(a, b) {
  console.log("before: ", a, b);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log("after: ", a, b);
}

swapOne(a, b);
swapTwo(c, d);
swapThree(e, f);
swapThree(a, d);

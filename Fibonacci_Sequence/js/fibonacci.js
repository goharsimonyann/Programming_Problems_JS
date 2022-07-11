//  ITERATIVE
function fibonacciIterative(num) {
  let fibArr = [0, 1];
  for (let i = 2; i <= num; ++i) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
  }
  return fibArr[num];
}

console.log(fibonacciIterative(4));
console.log(fibonacciIterative(5));
console.log(fibonacciIterative(6));

//  RECURSIVE
function fibonacciRecursive(num) {
  if (num <= 1) {
    return num;
  }
  return fibonacciRecursive(num - 2) + fibonacciRecursive(num - 1);
}

console.log(fibonacciRecursive(5));
console.log(fibonacciRecursive(6));
console.log(fibonacciRecursive(7));

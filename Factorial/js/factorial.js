//  ITERATIVE
function FactorialIterative(n) {
    let factorial = 1;
    if (n <= 1) {
      return 1;
    }
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
  
  console.log("Iterative Solution");
  console.log(`Factorial of 3 is: ${FactorialIterative(3)}  and Factorial of 5 is: ${FactorialIterative(5)}`);
  console.log(`Factorial of 0 is: ${FactorialIterative(0)}  and factorial of 1 is: ${FactorialIterative(1)}`);
  console.log("\n");
  
  //  RECURSIVE
  
  function FactorialRecursive(num) {
    if (num <= 1) {
      return 1;
    }
    return num * FactorialRecursive(num - 1);
  }
  
  console.log("Recursive Solution");
  console.log(`Factorial of 4 is: ${FactorialRecursive(4)}  and Factorial of 6 is: ${FactorialRecursive(6)}`);
  console.log(`Factorial of 0 is: ${FactorialRecursive(0)}  and factorial of 1 is: ${FactorialRecursive(1)}`);
  console.log("\n");
  
  //  CACHING
  
  const FactorialCaching = function (num) {
    let cache = [];
    if (num <= 1) {
      return 1;
    }
    if (cache[num]) {
      return cache[num];
    }
    cache[num] = num * FactorialCaching(num - 1);
    return cache[num];
  }
  
  console.log("Factorial of 3 is:", FactorialCaching(3));
  console.log("Factorial of 4 is:", FactorialCaching(4));
  console.log("Factorial of 5 is:", FactorialCaching(5));
  
  
  
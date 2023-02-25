// this function will return "n" numbers of fibonacci series
function fibonacci(n) {
  let fib = [0, 1];
  // teminates when fib's length is equal to n
  while (n != fib.length) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
}

console.log(fibonacci(2)); //[0, 1]

console.log(fibonacci(6)); //[ 0, 1, 1, 2, 3, 5 ]

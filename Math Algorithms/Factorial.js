let log = console.log 
// this function will return factorial of "n" number
function factorial(n) {
    let fac = 1;
    while (0 < n) {
        fac = fac * n
        n--
    }

    return fac
}

log(factorial(10)) //3628800
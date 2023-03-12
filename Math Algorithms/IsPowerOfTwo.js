let log = console.log;
// this function will return if "n" is power of 2 or not
function ispoweroftwo(n) {
  while (n != 0 && n % 2 === 0) {
    n = n / 2;
  }

  if (n == 1) {
    return true;
  } else {
    return false;
  }
}

log(ispoweroftwo(7)); //false
log(ispoweroftwo(8)); //true

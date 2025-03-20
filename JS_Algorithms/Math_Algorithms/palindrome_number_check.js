// const isPalindrome = function (x) {
//   const reversedNumber = Number(x.toString().split('').reverse().join(''));
//   if (x === reversedNumber) return true;
//   return false;
// };

var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;

  let div = 1;
  while (x >= 10 * div) {
    div *= 10;
  }

  while (x > 0) {
    let left = Math.floor(x / div);
    let right = x % 10;

    if (left !== right) return false;

    x = Math.floor((x % div) / 10);
    div /= 100;
  }

  return true;
};

console.log(isPalindrome(121));

module.exports = function getZerosCount(number) {
  let count5 = 0;
  for (let i = 1; i <= number; i++) {
    let n = i;
    while (n % 5 === 0) {
      n = n / 5;
      count5++;
    }
  }
  return count5;
}

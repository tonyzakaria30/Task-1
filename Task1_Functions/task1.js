// Task 1 - Functions (JavaScript)
// Author: Tony Qelada (tony.zakaria30@gmail.com)

function countMultiplesOf4Or6(arr) {
  if (!Array.isArray(arr)) throw new TypeError('arr must be an array');
  return arr.filter(
    n => Number.isFinite(n) && Number.isInteger(n) && (n % 4 === 0 || n % 6 === 0)
  ).length;
}

function isPalindrome(str) {
  if (typeof str !== 'string') throw new TypeError('str must be a string');
  const t = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return t === [...t].reverse().join('');
}

module.exports = { countMultiplesOf4Or6, isPalindrome };

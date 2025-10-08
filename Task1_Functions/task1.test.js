// Simple runnable tests for Task 1 (Node.js)
// Author: Tony Qelada (tony.zakaria30@gmail.com)

const { countMultiplesOf4Or6, isPalindrome } = require('./task1');

let passed = 0, failed = 0;
function assertEqual(actual, expected, msg) {
  if (actual === expected) {
    console.log(`✅ PASS: ${msg}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${msg} -> expected ${expected}, got ${actual}`);
    failed++;
  }
}

// Tests for countMultiplesOf4Or6
assertEqual(countMultiplesOf4Or6([4]), 1, '[4] → 1');
assertEqual(countMultiplesOf4Or6([6]), 1, '[6] → 1');
assertEqual(countMultiplesOf4Or6([12]), 1, '[12] → 1 (both)');
assertEqual(countMultiplesOf4Or6([1,2,3,5,7]), 0, 'no multiples');
assertEqual(countMultiplesOf4Or6([0, -4, -6, 8, 18, 25]), 4, 'includes 0 and negatives');
assertEqual(countMultiplesOf4Or6([4.5, 6.1, 12.0]), 1, 'floats ignored except 12.0');

// Tests for isPalindrome
assertEqual(isPalindrome('racecar'), true, 'racecar is palindrome');
assertEqual(isPalindrome('RaceCar'), true, 'case-insensitive');
assertEqual(isPalindrome('A man, a plan, a canal: Panama'), true, 'ignores punctuation');
assertEqual(isPalindrome('ab'), false, 'ab not palindrome');
assertEqual(isPalindrome(''), true, 'empty string palindrome');
assertEqual(isPalindrome('0P'), false, 'alphanumeric filter');

console.log(`\nSummary: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);

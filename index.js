/**
 * Challenge 1:
 *
 * Write a function that returns a string containing the input character repeated 5 times.
 * Use recursion!
 */

function repeater(char, n = 5) {}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g')); // -> 'ggggg'
// console.log(repeater('j')); // -> 'jjjjj'

/**
 * Challenge 2:
 *
 * Write a function that returns true if a number is even (and false if it's not).
 * Assume input will be a positive integer. Use recursion!
 */

function isEven(n) {}

// console.log(isEven(0)); // -> true
// console.log(isEven(5)); // -> false
// console.log(isEven(10)); // -> true

/**
 * Challenge 3:
 *
 * Write a function that returns the factorial of an input number. Use recursion!
 *
 * The factorial of n is the product of all numbers between 1 and n
 *
 * BONUS: How can you solve this using tail-call recursion?
 * 
 * Ex: factorial(5) = 5 * 4 * 3 * 2 * 1
 */

function factorial(num) {}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1

/**
 * Challenge 4:
 *
 * Write a function that returns the length of an array recursively,
 * without using the .length property. Use recursion!
 *
 * Hint: What does JavaScript return when you attempt to access an index that is
 * greater than array.length - 1?
 */

function getLength(array, i = 0) {}

// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5

/**
 * Challenge 5:
 *
 * Write a function that returns 'base' to the power of 'exponent'. Use recursion!
 *
 * Ex: pow(5, 3) = 5 * 5 * 5
 */

function pow(base, exponent) {}

// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243

/**
 * Challenge 6:
 *
 * Write a recursive function countdown that accepts a positive integer n
 * as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.
 */

function countdown(n) {}

// countdown(5);
// countdown(10);

/**
 * Challenge 7:
 *
 * Write a recursive function sum that calculates the sum of an array of integers.
 */

function sum(array) {}

// console.log(sum([1, 1, 1])); // -> returns 3
// console.log(sum([1, 2, 3, 4, 5, 6])); // -> returns 21

/**
 * Challenge 8:
 *
 * Write a recursive function palindrome that accepts a string as an input and returns
 * true if that string is a palindrome (the string is the same forward and backwards).
 * The input string may have punctuation and symbols, but that should not affect whether
 * the string is a palindrome.
 */

function palindrome(string) {}

// console.log(palindrome('racecar')); //-> true
// console.log(palindrome('Anne, I vote more cars race Rome-to-Vienna')); //-> true
// console.log(palindrome('llama mall')); //-> true
// console.log(palindrome('jmoney')); //-> false

/**
 * Challenge 9:
 *
 * Write a recursive function isPrime that determines if a number is prime and
 * returns true if it is.
 */

function isPrime(num) {}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false

/**
 * Challenge 10:
 *
 * Write a function that returns the result of running the input number through each
 * function in funcArray, in order. Use recursion!
 */

function flow(input, funcArray, i = 0) {}

// function multiplyBy2(num) {
//   return num * 2;
// }
// function add7(num) {
//   return num + 7;
// }
// function modulo4(num) {
//   return num % 4;
// }
// function subtract10(num) {
//   return num - 10;
// }
// const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// console.log(flow(2, arrayOfFunctions)); // -> -7

/**
 * Challenge 11:
 *
 * Write a function that returns the nth Fibonacci number.
 *
 * Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, ...
 */

function fib(n) {}

// console.log(fib(0)); // -> 0
// console.log(fib(1)); // -> 1
// console.log(fib(2)); // -> 1
// console.log(fib(7)); // -> 13

/**
 * Challenge 12:
 *
 * Write a function getRangeBetween that returns an array of all integers between values x and y,
 * not including x and y.
 */

function getRangeBetween(x, y) {}

// console.log(getRangeBetween(2, 9)); //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)); //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

/**
 * Challenge 13:
 *
 * Write a recursive function pathFinder that takes an object and array as inputs
 * and returns the value with the given path.
 */

function pathFinder(obj, arr) {}

// const obj = {
//   first: { second: { third: 'finish' } },
//   second: { third: 'wrong' },
// };
// const arr = ['first', 'second', 'third'];
// console.log(pathFinder(obj, arr)); //-> "finish"

/**
 * Challenge 14:
 *
 * Write a recursive function flattenRecursively that flattens a nested array.
 * Your function should be able to handle varying levels of nesting.
 */

function flattenRecursively(arr) {}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]

/**
 * Challenge 15:
 *
 * Write a recursive function findInOrderedSet that determines if a number is in an ordered array.
 * Assume the array is sorted. BONUS: Write the function in such a way that fully iterating
 * through the array to check isn't necessary.
 */

function findInOrderedSet(arr, target) {}

// const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4)); //-> true
// console.log(findInOrderedSet(nums, 2)); //-> false

/**
 * Challenge 16:
 *
 * There are n stairs. A person standing at the bottom wants to reach the top. The person can climb
 * either 1 or 2 stairs at a time. Write a function countWaysToReachNthStair to count the number of ways
 * the person can reach the top (order does matter). See test cases for examples.
 */

function countWaysToReachNthStair(n) {}

// console.log(countWaysToReachNthStair(1)); //-> 1 <only one way to climb 1 stair>
// console.log(countWaysToReachNthStair(2)); //-> 2 <(1, 1), (2)>
// console.log(countWaysToReachNthStair(4)); //-> 5 <(1, 1, 1, 1), (1, 1, 2), (1, 2, 1), (2, 1, 1), (2, 2)>

/**
 * Challenge 17:
 *
 * Write a function that returns all possible outcomes of n games of heads or tails
 * as an array of arrays. (The order of the subarrays does not matter.)
 */

function headsOrTails(n) {}

// console.log(headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
// console.log(headsOrTails(3));
// -> [
//   ['heads', 'heads', 'heads'],
//   ['heads', 'heads', 'tails'],
//   ['heads', 'tails', 'heads'],
//   ['heads', 'tails', 'tails'],
//   ['tails', 'heads', 'heads'],
//   ['tails', 'heads', 'tails'],
//   ['tails', 'tails', 'heads'],
//   ['tails', 'tails', 'tails'],
// ]

/**
 * Challenge 18:
 *
 * Write a function that returns all combinations of the elements of arr as an array of arrays. Use recursion!
 */

function getAllCombos(arr) {}

// console.log(getAllCombos(['a', 'b'])); // -> [['a','b'], ['a'], ['b'], []]
// console.log(getAllCombos(['a', 'b', 'c']));
// -> [
//   ['a', 'b', 'c'],
//   ['a', 'b'],
//   ['a', 'c'],
//   ['a'],
//   ['b', 'c'],
//   ['b'],
//   ['c'],
//   [],
// ]

/**
 * Challenge 19:
 *
 * Given a collection of distinct integers, write a function getPermutations to return all possible permutations.
 * (The order of the permutations does not matter.)
 */

function getPermutations(arr) {}

// console.log(getPermutations([1, 2])); //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])); //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

/**
 * Challenge 20:
 *
 * Write a recursive function reverseString that takes a string as input
 * and returns the string reversed.
 */

function reverseString(str) {}

// console.log(reverseString('hello')); // -> 'olleh'
// console.log(reverseString('recursion')); // -> 'noisrucer'

/**
 * Challenge 21:
 *
 * Write a recursive function gcd that returns the greatest common divisor
 * of two positive integers.
 * 
 * Hint: Research the Euclidean algorithm method for computing the greatest common divisor: https://sites.math.rutgers.edu/~greenfie/gs2004/euclid.html
 * 
 */

function gcd(a, b) {}

// console.log(gcd(48, 18)); // -> 6
// console.log(gcd(56, 98)); // -> 14

/**
 * Challenge 22:
 *
 * Write a recursive function flattenObject that takes an object with nested objects
 * and returns a new object with no nested properties. The keys should be paths to the original values.
 */

function flattenObject(obj, prefix = '') {}

// const obj = { a: { b: { c: 42 } }, d: 5 };
// console.log(flattenObject(obj)); // -> { 'a.b.c': 42, 'd': 5 }

/**
 * Challenge 23:
 *
 * Write a recursive function deepEquals that checks if two objects are deeply equal.
 */

function deepEquals(obj1, obj2) {}

// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { a: 1, b: { c: 2 } };
// console.log(deepEquals(obj1, obj2)); // -> true
// console.log(deepEquals(obj1, { a: 1, b: 2 })); // -> false

/**
 * Challenge 24:
 *
 * Write a recursive function rotateArray that takes an array and a number n,
 * and returns the array rotated to the right n times.
 */

function rotateArray(arr, n) {}

// console.log(rotateArray([1, 2, 3, 4, 5], 1)); // -> [5, 1, 2, 3, 4]
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // -> [4, 5, 1, 2, 3]
// console.log(rotateArray([1, 2, 3, 4, 5], 5)); // -> [1, 2, 3, 4, 5]

/**
 * Challenge 25:
 *
 * Write a recursive function that takes a positive integer and prints a cascade of this integer.
 */

function cascade(number) {}

// cascade(111); // -> 111, 11, 1, 11, 111
// cascade(12345); // -> 12345, 1234, 123, 12, 1, 12, 123, 1234, 12345

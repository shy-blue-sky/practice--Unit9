/**
 * Challenge 1:
 *
 * Write a function that returns a string containing the input character repeated 5 times.
 * Use recursion!
 */


// function repeater(char, n = 5) { // {before R1 n=5 char = 'g') ,(R1 char='gg', n=4)(R2 char='ggg', n=3)(R3 char='gggg' n=2)(R4 char ='ggggg' n=1) (Last check values  is n === 1)
//     //base case
//     if (n === 1) {
//         return char;
//     }
//     //recursive case
//     else {
//         return char + repeater(char, n-1)
//         // R1 - g + repeater(char, 5-1)- 4 ---- g+gggg---- return 'ggggg'
//             //R2- g + repeater(char, 4-1)- 3 === g+ggg
//                 // R3- g + repeater(char, 3-1)- 2---- g+gg
//                  // R4 - g + repeater(char, 2-1)- 1------ g+g
//                   // R5 g + repeater(char, 1) ------- g
//     }
// }

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g')); // -> 'ggggg'
// console.log(repeater('j')); // -> 'jjjjj'

/**
 * Challenge 2:
 *
 * Write a function that returns true if a number is even (and false if it's not).
 * Assume input will be a positive integer. Use recursion!
 */

// function isEven(n) {
//     //base case1
//     if (n === 0) return true;
//     //base case 2
//     if (n === 1 ) return false;
//     //recursive case
//     return isEven(n-2);
// }

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

// // ---------- Linear
// function factorial(num) {
//     //base case1 -> If num === 0, return 1?
//     if (num === 0 ) return 1;
//     //base case2 
//     if (num === 1 ) return num;
//     //recusive case
//     return num * factorial (num -1);
// }

// ---------- BONUS: Tail call 
// function factorial(num, result = 1) {
//     if (num === 0 ) return 1;
//     if (num === 1 ) return result;
//     return factorial(num -1, result * num)
// }

// // To check if you've completed the challenge, uncomment these console.logs!
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

function getLength(array, i = 0) {
    //base case: If array.length === 0, return i;
    if (array.length === 0 ) return i;
    //recursive case : Invocation of getLength passing with slice method passing through first index
    return getLength(array.slice(1), i + 1);
    // Line 102: Before R1, getLength([1,2], i=0)
    // R1: array.slice(1) -> [2], i =1;
    // R2: array.slice(1) -> [], i=2;
    // R3: Now array meets base case, so we return i=2
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5

/**
 * Challenge 5:
 *
 * Write a function that returns 'base' to the power of 'exponent'. Use recursion!
 *
 * Ex: pow(5, 3) = 5 * 5 * 5
 */

// function pow(base, exponent) {
//     //base case
//     if (exponent === 1) return base;
//     //recursive
//     return base * pow(base, exponent-1);
// }

// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243

/**
 * Challenge 6:
 *
 * Write a recursive function countdown that accepts a positive integer n
 * as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.
 */

// function countdown(n) {
//     //base case 
//     if (n === 0) return n;
//     console.log(n);
//     return countdown(n-1);
// }

// countdown(5);
// countdown(10);

/**
 * Challenge 7:
 *
 * Write a recursive function sum that calculates the sum of an array of integers.
 */

// function sum(array) {
//     //base case
//     if (array.length === 0) return 0;
//     //recursive
//     return array[0] + sum(array.slice(1));
    //Line 158 : Before r1 arr =[1, 1, 1]
    //R1 array[0] + sum(array.slice(1)) , sliced arr now = [1,1], 1 + 2= 3
    //R2  array[0] + sum(array.slice(1)) , sliced arr now = [1], 1 + 1 =2 ------->
    //R3  array[0] + sum(array.slice(1)) , sliced arr now = [], 1+ 0= 1----->
    //R4 Array length now 0 so return 0------->
// }


// console.log(sum([1, 1, 1])); // -> returns 3
// console.log(sum([1, 2, 3, 4, 5, 6])); // -> returns 21


//Experimenting Mila's theory?
// function sum(array) {
//   if (array.length === 0) {
//     return 0;
//   } else {
//     let sumPop = array.pop();
//     console.log(sumPop)
//     console.log(array)
//     return sumPop + sum(array);
//   }
// }
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
//get rid of punctuations, spaces, symbols,capitals
// regex with replaceAll
// /[^a-zA-Z0-9]/g

// function palindrome(string) {
//     string = string.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g , ""); // replacing all NON alphabet, NON numbers with nothing
//     // console.log(string);
//     //base case1
//         if (string.length <=1) return true;
//     // //base case2
//         if (string[0] !== string[string.length - 1]) return false;
//     //     if () return false;
//     //recursive
//         return palindrome(string.slice(1, string.length - 1));
// }

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


// Mila & Martin's code:

// function isPrime(num) {
//     if (num === 1) {
//         return false;
//     }
//     let num2 = num - 1;

//     function divisor(num2) {
//         //base case
//         if (num % num2 === 0 && num2 >= 2) {
//             return false
//         } 
//         //base case 2
//         if (num2 === 1) {
//             return true
//         }
//         return divisor(num2 - 1)
//     }
//     return divisor(num)
// }

// 5 % 5 === 0 // true
// 5 % 4 === 1 // continue;
// 5 % 3 === 1 // continue;
// 5 % 2 === 1 // continue;
// 5 % 1 === 0 // true - prime

// 4 % 4 === 0 // true
// 4 % 3 === 1 // continue;
// 4 % 2 === 0 // false because the divisor is not  1

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

// function flow(input, funcArray, i = 0) {
//     //base case
//     if (i > funcArray.length) return input;
//     //recursive function
//     input = funcArray[i](input)
//     return flow(input, funcArray, i += 1 );
// }

// If i is given an argument, this code allows you to choose how many functions of the array to use
function flow(input, funcArray, i = 0) {
    //base case
    if (i === funcArray.length) return input;
    //recursive function
    input = funcArray[0](input)
    return flow(input, funcArray.slice(1), i);
}

function multiplyBy2(num) {
  return num * 2;
}
function add7(num) {
  return num + 7;
}
function modulo4(num) {
  return num % 4;
}
function subtract10(num) {
  return num - 10;
}
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7

/**
 * Challenge 11:
 *
 * Write a function that returns the nth Fibonacci number.
 *
 * Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, ...
 */

// function fib(n) {
//     //base case
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     //recursive
//     return fib(n-1) + fib(n-2);
// }

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

// function getRangeBetween(x, y) {
//     //base case
//     if (x === y -2) return y-1;
//     // if (x === y) return x;
//     // if (x>y) return y;
//     // if (x<y) return x;
//     //recursive
//     // const arr = [];
//     // console.log(x)
//     return [x + 1].concat(getRangeBetween(x += 1, y));
//     //line :335 before R1  x= 2 y = 6
//     //R1 check if x is equal to 4=== 2doesn't make it
//     //R1 return ARRAY =[3] + EvalRes= ([3, 6]) =[3] concated to ? [4,5]= [3,4,5]----returned
//     //R2 check x=3 against 4  doesn't make it
//     //R2  return ARRAY =[4] + Eval res = ([4,6])=[4] concated to ? [5]= [4,5]
//     //R3 check x=4 against 4 return y = [6-1=5] = [5]
// }

// console.log(getRangeBetween(2, 6));
// console.log(getRangeBetween(2, 9)); //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)); //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

/**
 * Challenge 13:
 *
 * Write a recursive function pathFinder that takes an object and array as inputs
 * and returns the value with the given path.
 */

// function pathFinder(obj, arr) {
//     //base case
//     if (arr.length === 1 ) return obj[arr[0]];
//     // recursive
//     return pathFinder(obj[arr[0]], arr.slice(1));
//     // Before R1: obj, arr 
//     // R1: arr.length === 3 // obj['first'], ["second", "third"]
//     // R2: arr.length === 2 // obj["second"], ["third"]
//     // R3: arr.length === 1 // we'll be returning obj["third"] = 'finish'
// }

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

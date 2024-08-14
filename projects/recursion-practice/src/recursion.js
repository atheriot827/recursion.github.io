// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

var factorial = function(n, product = 1) {
  //base
  if(n < 0 ) {
    return null;
  }
  if(n === 0 || n === 1) {
    return product;
  }
  //recursion
  return factorial(n - 1, product * n);
};


//invoke factorial(3)
  //BASE //FALSE
  //RECURSION
    //product = 3
    //return factorial(0, 6)
      //if (0 === 0) return 6




// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

var sum = function(array, i = 0) {
  //base - if index is out of bounds of array
  if(i >= array.length) {
    return 0;
  }
  //recursion - sum of current ele and recurse for next ele
  return array[i] + sum(array, i + 1);
};


// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15

 var arraySum = function(array) {
  //base - if array is empty, return 0
  if(array.length === 0) {
    return 0;
  }

  //recursion - use destructuring to get first and rest of the array
  var [first, ...rest] = array;

  //check if first ele is array
  if(Array.isArray(first)) {
    //use recursion to sum the nested array and add it to the sum of the rest
    return arraySum(first) + arraySum(rest);
  } else {
    //add first ele to the sum of the rest
    return first + arraySum(rest);
  }
};

// 4. Check if a number is even.

var isEven = function(n) {
  //base if n is negative
  if(n < 0) {
    return isEven(-n);
  }

  //base
  if(n === 0) {
    return true;
  }
  if(n === 1) {
    return false;
  }
  //recursion - decrement by 2 and check result
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

var sumBelow = function(n) {
  //base - if n is 0 return 0
  if(n === 0) {
    return 0;
  }

  //recursion - if n is pos sum all ints below n, if n is neg, sum all ints above n
  if(n > 0) {
    return (n -1) + sumBelow(n -1);
  } else {
  return (n + 1) + sumBelow(n + 1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

var range = function(x, y) {
  if (x < y) {
    //base
    if(x + 1 >= y) {
      return [];
    }
    //add curr x + 1 to array and call range
    return [x + 1].concat(range(x + 1, y));
  } else {
    if (x - 1 <= y) {
      return [];
    }
  //recursion - add current x to array and call range 
    return [x - 1].concat(range(x - 1, y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function(base, exp) {
  //base for exp of 0
  if(exp === 0) {
    return 1;
  }
  //base for exp of 1
  if(exp === 1) {
    return base;
  }
  if(exp < 0) {
    return 1 / exponent(base, -exp);
  }
  //recursion 
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

var powerOfTwo = function(n) {
  //base - if n is less than 1 its not a power of 2
  if(n < 1) {
    return false;
  }
  //base - if n is 1 its a power of 2
  if (n === 1) {
    return true;
  }
  //recursion - check if n is a power of 2
  if(n % 2 !== 0) {
    return false;
  }
  //divide n by 2 and check recursion
  return powerOfTwo(n/2);
};

// 9. Write a function that accepts a string a reverses it.

var reverse = function(string) {
  //base - if str is empty or only has 1 char
  if(string.length <= 1) {
    return string;
  }
  //recursion - reverse substring and concat with first char
  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
//A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward

var palindrome = function(string) {
  //normalize input str
  string = string.toLowerCase().replace(/[^a-z0-9]/gi, '');

  //base
  if(string.length <= 1) return true;
  if (string[0] !== string[string.length - 1]) return false;

  //recursion
  return palindrome(string.slice(1, -1));
  
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

var modulo = function(x, y) {
  //in case dividing by 0
  if(y === 0) {
    return NaN;
  }
  //base
   if(x < 0) {
    if(x + y >= 0) {
      return x;
    } else {
      return modulo(x + y, y);
    }
   } else {
    while (x >= y) {
      x -= y;
    }
    return x;
   }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
//2 * 4
//2 + 2 + 2 + 2

var multiply = function(x, y) {
  if(y === 0) {
    return 0;
  }
  if(y > 0) {
    return x + multiply(x, y - 1);
  }
  return -multiply(x, -y);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.

var divide = function(x, y) {
  //handle divide by 0
  if(y === 0) {
    return undefined
  }
  if(x < y) {
    return 0;
  }
  return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

var gcd = function(x, y) {
  //base - if y is 0, x is the GCD
  if (y === 0) {
    return x;
}

//recursion - call gcd with y and the remainder of x divided by y
return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

  if (str1 === '' && str2 === '') {
    return true;
  }
  if(str1[0] !== str2[0]) {
    return false;
  }
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

var createArray = function(str){

  //base - if str is empty return empty arr
  if(str === '') {
    return [];
  }
  //recursion - process the 1st char then call func on the rest of str
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array

var reverseArr = function (array) {
  //base - if arr is empty or has 1 ele
  if(array.length <= 1) {
    return array;
  }
  //recursion - reverse the rest of arr then add first ele to the end
  let firstElement = array[0];
  let restOfArray = array.slice(1);
  let reversedRest = reverseArr(restOfArray);

  //combine the reversed rest of arr with 1st ele
  return reversedRest.concat(firstElement);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

var buildList = function(value, length) {
  //base - if len is 0 return empty array
  if(length === 0) {
    return [];
  }
  //recursion - build arr by combining result of recursive call and the value
  let array = buildList(value, length - 1);
  array.push(value);
  return array;
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2

var countOccurrence = function(array, value) {
  //base - if array is empty return 0
  if(array.length === 0) {
    return 0;
  }
  //check if first ele matches value
  let count = (array[0] === value) ? 1 : 0;
  //recursion - add count of occ in the rest of array
  return count + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

var rMap = function(array, callback) {
  //base - if arr is empty, return 
  if(array.length === 0) {
    return [];
  }
  //apply the callback to the first ele and recurse on the rest of arr
  return[callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2

var countKeysInObj = function(obj, key) {
  //init count
  let count = 0;

  //check if input is obj and not null
  if(typeof obj === 'object' && obj !== null) {
    //iterate iver each prop in obj
    for(let prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        //if prop name matches key, increment
        if(prop === key) {
          count ++;
        }
        //count key occ in prop value if its an obj
        if(typeof obj[prop] === 'object' && obj[prop] !== null) {
          count += countKeysInObj(obj[prop], key);
        }

      }
    }
  }
  return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1

var countValuesInObj = function(obj, value) {
  //init count var to keep track of how many times val has been found
  let count = 0;

  //iterate through each prop of obj
  for(let key in obj) {
    if(typeof obj[key] === 'object') {
      //if the prop is an obj call itself to search within nested obj
      count += countValuesInObj(obj[key], value);
      //if the prop value equals the the target value then increment count
    } else if (obj[key] === value) {
      count ++;
    }
  }
  return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.

var replaceKeysInObj = function(obj, keyToReplace, newKey) {
  //base - if curr obj is not an obj, return immediatly
  if(typeof obj !== 'object' || obj === null) {
    return;
  }

  //iterate through each key in the obj
  for(let key in obj) {
    //recursion - if value is obj, apply func
    if(typeof obj[key] === 'object' && obj[key] !== null) {
      replaceKeysInObj(obj[key], keyToReplace, newKey);
    }
    //if the curr key matches they key to replace
    if (key === keyToReplace) {
      //assign value to new key
      obj[newKey] = obj[key];
      //delete old key
      delete obj[key];
    }
  }
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.

//Properties of the Fibonacci Sequence:

// Starting Points: The sequence starts with 0 and 1.
// Recursive Definition: Each number in the sequence (after the first two) is defined as the sum of the two preceding numbers.
// Growth: The sequence grows exponentially as you move further along it.


var fibonacci = function(n) {
  //base - if n is 1, return the first Fib num
  if(n === 1) {
    return [0, 1];
  }
  //recursion - generate seq for n-1
  const fibSequence = fibonacci(n - 1);

  //calc the next fib num by summing the last 2 nums in the seq
  const nextFibNumber = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];

  //append the next fib num to the seq
  fibSequence.push(nextFibNumber);

  return fibSequence;
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

// Properties of the Fibonacci Sequence:

// Starting Points: The sequence starts with 0 and 1.
// Recursive Definition: Each number in the sequence (after the first two) is defined as the sum of the two preceding numbers.
// Growth: The sequence grows exponentially as you move further along it.

var nthFibo = function(n) {
  //return null for neg ints
  if(n < 0) {
    return null;
  }
  //base - return the fib num for i 0 or 1
  if(n === 0) {
    return 0;
  }
  if(n === 1) {
    return 1;
  }
  //recursion - sum of the 2 prev fib nums
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

var capitalizeWords = function(input) {
  //base - if input arr is empty return empty arr
  if(input.length === 0) {
    return [];
  }
  //recursion - cap the first word and concat with result of recurs call
  //cap first word
  const capitalizedWord = input[0].toUpperCase();
  //recursivly process rest of arr
  return [capitalizedWord].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']

var capitalizeFirst = function(array) {
  //base - if arr is empty return empty arr
  if (array.length === 0) {
    return [];
  }
  //recursion - cap the first letter of the first string and process the rest of arr
  //cap first letter
  const capitalizedString = array[0][0].toUpperCase() + array[0].slice(1);
  //recursivly process rest of arr
  return [capitalizedString].concat(capitalizeFirst(array.slice(1)))
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10

var nestedEvenSum = function(obj) {
  //init sum
  let sum = 0;

  //iterate over each key in obj
  for(let key in obj) {
    let value = obj[key];

    //check if the val is a even num
    if (typeof value === 'number' && value % 2 === 0) {
      //add even num to sum
      sum += value;
    }

    //recursion - if val is obj
    if (typeof value === 'object' && value !== null) {
      //add sum from nested obj
      sum += nestedEvenSum(value);
    }
  }
  return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]

// Why Flatten an Array?
// Flattening is useful when you need to work with data in a simpler, more straightforward structure. For example, if you want to iterate over every element in the array or apply some function to each element, having a flat array makes this easier because you don't have to worry about nested arrays.

// How to Flatten an Array:
// Flattening can be done using different methods, including recursion, loops, or using built-in methods in some programming languages. The idea is always to break down the nested structure until you have a single, one-dimensional array.

var flatten = function(arrays) {
  //init empty arr to hold flat results
  let flatArray = [];

  //iterate over each ele in arr
  for (let i = 0; i < arrays.length; i++) {
    let value = arrays[i];

    //check if curr ele is arr
    if(Array.isArray(value)) {
      //recursivly flatten it and concat result
      flatArray = flatArray.concat(flatten(value));
    } else {
      //if not arr, add to the flatArray
      flatArray.push(value);
    }
  }
  return flatArray;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}

var letterTally = function(str, obj = {}) { //init obj as empty by default
  //base - id str is empty, return obj
  if(str.length === 0) {
    return obj;
  }
  //get first char of str
  let char = str[0];

  //update the count of char in obj
  if(obj[char]) {
    //if char already exists in obj, increment its count
    obj[char] += 1;
    //if char doesnt exist, add to obj with count of 1
  } else {
    obj[char] = 1;
  }
  //recursion - process rest of str
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  //base - if list is empty  or has 1 ele, return list
  if(list.length === 0 || list.length === 1) {
    return list;
  }
  //recursion - compare 1st ele with 2nd
  if(list[0] === list [1]) {
    //if they are the same, skip the 1st ele and continue with rest of list
    return compress(list.slice(1));
  } else {
    //if they are diff, include 1st ele and continue with rest of list
    return [list[0]].concat(compress(list.slice(1)));
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]

var augmentElements = function(array, aug) {
  //base - if arr is empty return empty arr
  if(array.length === 0) {
    return [];
  }
  //recursion - add new value to 1st ele, then recursively augment the rest of ele in list
  //add new value to the 1st arr ele
  let augmentedArray = [array[0].concat(aug)];
  return augmentedArray.concat(augmentElements(array.slice(1), aug));
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

var minimizeZeroes = function(array) {
  //base - if arr empty return array
  if(array.length === 0 || array.length === 1) {
    return array;
  }
  //recursion - compare the 1st ele with 2nd
  if(array[0] === 0 && array[1] === 0) {
    //if both eles are 0s, skip 1st amd continue with rest of arr
    return minimizeZeroes(array.slice(1));
  } else {
    //if they are diff, include 1st ele and continue with arr
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------

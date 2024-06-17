//1342. Number of Steps to Reduce a Number to Zero

/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

 

Example 1:

Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.
Example 2:

Input: num = 8
Output: 4
Explanation: 
Step 1) 8 is even; divide by 2 and obtain 4. 
Step 2) 4 is even; divide by 2 and obtain 2. 
Step 3) 2 is even; divide by 2 and obtain 1. 
Step 4) 1 is odd; subtract 1 and obtain 0.
Example 3:

Input: num = 123
Output: 12
 

Constraints:

0 <= num <= 106
*/

//MY SOLUTION
var numberOfSteps = function(num) {
    let steps = 0
       while (num > 0) {
             if (num % 2 === 0) {
                 num /= 2
           } else {
                num -= 1
                  }
            steps++
}
      return steps
};

//412. Fizz Buzz

/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

Constraints:

1 <= n <= 104
*/

//MY SOLUTION
var fizzBuzz = function(n) {
    let arrGame = []
    let sum = 0
    while (sum < n) {
        sum = sum + 1
        if (sum % 3 === 0 && sum % 5 === 0) {
            arrGame.push("FizzBuzz")
        }
        else if (sum % 3 === 0) {
            arrGame.push("Fizz")
        } else if (sum % 5 === 0) {
            arrGame.push("Buzz")
        } else {
          arrGame.push(String(sum))
        }
    
    }
    return arrGame
};

//1672. Richest Customer Wealth

/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
 

Constraints:

m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
1 <= accounts[i][j] <= 100
*/

//MY SOLUTION
var maximumWealth = function(accounts) {
    let richest = []
    
    for (let i = 0; i < accounts.length; i++) {
        richest.push(accounts[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0,
  ))
    }
    return Math.max(...richest)
};


// DID RUNNING SUM ARRAY AGAIN FOR REPITITION AND PRACTICE WITH A SLIGHTLY DIFFERENT SOLUTION AND PSEUDOCODE

//1480. Running Sum of 1d Array

/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
*/

//MY SOLUTION
var runningSum = function(nums) {
    //iterate through the array
    //array the previous array to current one and show the sum
    //return entire array when done
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i - 1] + nums[i]
    }
    return nums
};



//2665. Counter II

/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
 
*/

//MY SOLUTION
var createCounter = function(init) {
    let counter = {
     value: init,
     increment() {
          return this.value += 1;
     },
     decrement() {
        return  this.value -= 1;
     },
     reset() {
         return  this.value = init;
     }, 
     getValue() {
         return this.value;
     }
    }
    return counter 
 };
 
 

//2704. To Be Or Not To Be

/*
Write a function expect that helps developers test their code. It should take in any value val and return an 
object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, 
it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal,
 it should throw an error "Equal".
 

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.
*/

//MY SOLUTION
var expect = function(val) {
    return {
        toBe: function (val2) {
            if(val === val2) return true;
            else throw new Error("Not Equal");
        },
        notToBe: function(val2) {
           if(val !== val2) return true;
            else throw new Error("Equal");
        }
    }
    
};


//2620. Counter
/*
Given an integer n, return a counter function. This counter function initially 
returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
*/

//MY SOLUTION
var createCounter = function(n) {
    
    return function() {
        return n++
    };

};




//2667. Create Hello World Function

/*
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
 

Constraints:

0 <= args.length <= 10
*/

//MY SOLUTION
var createHelloWorld = function() {
    
    return function(...args) {
        return 'Hello World'
    }
};


//1480. Running Sum of 1d Array

/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
*/

//MY SOLUTION
var runningSum = function(nums) {
    let newArray = [nums[0]]
    for(let i = 1; i < nums.length; i++) {
        newArray[i] = nums[i] + newArray[i-1]
    }
    return newArray
};

//2235. Add Two Integers

/*
Given two integers num1 and num2, return the sum of the two integers.
 

Example 1:

Input: num1 = 12, num2 = 5
Output: 17
Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.
Example 2:

Input: num1 = -10, num2 = 4
Output: -6
Explanation: num1 + num2 = -6, so -6 is returned.
 

Constraints:

-100 <= num1, num2 <= 100
*/

//MY SOLUTION 
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = function(num1, num2) {
    return num1 + num2
};


//344 Reverse String

/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
 */

// MY SOLUTION
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    s.reverse()
};
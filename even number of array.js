Question 1
Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array. Do not use any library functions, need to do via for loops only.


Solution:- 

var nums = [1, 2, 5, 9, 12, 34, 32, 11, 66, 19, 14];
var evens = [];
var evenNumbers = function(nums) {
  for (var i = 0; i < nums.length; i++)
    if ((nums[i] % 2) != 1) {
      evens.push(nums[i]);
      console.log(evens);
    }
};
evenNumbers(nums);
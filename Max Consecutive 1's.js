Question 2
Find the maximum consecutive 1's in an array of 0's and 1's.
Example:
a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
b) 1000010001 - Output :1 [Max num of consecutive 1's is 1].

Solution:- 


const arr = [0,0,1,1,0,0,0,1,0,0,1,1,1];
const findMaxConsecutiveOnes = (arr = []) => {
   let left = 0;
   let right = 0;
   let max = 0;
   while (right < arr.length) {
      if (arr[right] === 0) {
         if (right - left > max) {
            max = right - left
         }
         right++;
         left = right;
      } else {
         right++
      }
   }
   return right - left > max ? right - left : max;
}
console.log(findMaxConsecutiveOnes(arr));

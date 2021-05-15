Question 3
Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive. Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.
e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);


Solution:-

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
function count_duplicate(arr) {
  let counts = {}

  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]] += 1
    } else {
      counts[arr[i]] = 1
    }
  }
  for (let prop in counts) {
    if (counts[prop] >= 2) {
      console.log(prop + "counted:" + counts[prop] + "How many times repeated that numbers.")
    }
  }
  console.log(counts)
}

count_duplicate(arr)

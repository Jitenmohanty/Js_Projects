// console.log('start');

// setTimeout(() => {
//   console.log('setTimeout')
// })

// Promise.resolve().then(() => {
//   console.log('promise')
// })

// console.log('end')

console.log('start');//1

setTimeout(() => {
  console.log('setTimeout')//6
})

const promise = new Promise((res, rej) => {
  console.log('promise creation')//4
  res("dodo duck")
  console.log('promise end')//5
})

Promise.resolve().then(() => {
  console.log('promise')//3
})

promise.then(console.log)

console.log('end')//2


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function(nums, target) {
    let arr = [];
    let obj = {}
    for(let i=0;i<nums.length;i++){
        let ans = target -nums[i]
        if(obj.hasOwnProperty(ans)){
            return [obj[ans],i]
        }else{
            obj[nums[i]] = i;
        }
    }
    return -1;
};

console.log(twoSum([10,5,6,8],14))
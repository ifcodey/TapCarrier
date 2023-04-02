
// function majorityElement(nums) {

//     let count = {}; //object

//     for (let i = 0; i < nums.length; i++) { // i (0 - 2)
//         if (count[nums[i]]) {
//             count[nums[i]] += 1;
//         } else {
//             count[nums[i]] = 1;
//         }
//         if (count[nums[i]] > nums.length / 2) {
//             return nums[i];
//         }
//     }
//     return -1; // Return -1 if no majority element is found
// }

// let nums = [3, 2, 3];
// //   let nums = [2,2,1,1,1,2,2];
// console.log(majorityElement(nums)); // Output: 3







let arr = [3, 2, 3];

let count = 0;

for (let i = 0; 0 < arr.length; i++) {
    if (arr[i]) {
        sort_arr[i] = arr[i];
        count++;
    }
}







// function findMajority(arr, n) {
//     return arr[Math.floor(n / 2)];
// }

// // driver code

// let arr = [3, 2, 3,];
// let n = arr.length;
// // console.log(arr.sort());
// console.log(findMajority(arr.sort((first, last) => {
//     return Math.abs(first) - Math.abs(last);
// }
// ), n));

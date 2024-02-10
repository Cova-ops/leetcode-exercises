/**
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0]

Constraints:

1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
*/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// var dailyTemperatures = function (temperatures) {
//   const arrResults = []
//   arrResults.shi

//   for (let i = 0; i < temperatures.length; i++) {
//     const temp = temperatures[i];
//     const beforeTemp = temperatures[i - 1]
//     const beforeResult = arrResults[i - 1]
//     let newDifference = 0

//     if (beforeTemp && beforeTemp > temp && beforeResult) {
//       for (let j = i + 1; j <= i - 1 + beforeResult; j++) {
//         const temp2 = temperatures[j];
//         if (temp2 > temp) {
//           newDifference = j - i
//           break
//         }
//       }
//     }
//     else if (beforeTemp && beforeTemp === temp && !beforeResult) newDifference = 0
//     else if (beforeTemp && beforeTemp === temp && beforeResult) newDifference = beforeResult - 1
//     else if (beforeTemp && beforeTemp < temp && !beforeResult) newDifference = 0
//     else {
//       for (let j = i + 1; j < temperatures.length; j++) {
//         const temp2 = temperatures[j];
//         if (temp2 > temp) {
//           newDifference = j - i
//           break
//         }
//       }
//     }

//     arrResults.push(newDifference)
//   }

//   return arrResults
// };
const dailyTemperatures = function (temperatures) {
  const stack = []
  const result = new Array(temperatures.length).fill(0)

  for (let i = temperatures.length - 1; i >= 0; --i) {
    console.log({ primero: stack })
    while (stack.length > 0 && temperatures[i] >= temperatures[stack[0]]) {
      stack.shift()
    }

    console.log({ segundo: stack })
    if (stack.length === 0) {
      result[i] = 0
    } else {
      result[i] = stack[0] - i
    }

    stack.unshift(i)
  }

  return result
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) // [1, 1, 4, 2, 1, 1, 0, 0]
// console.log(dailyTemperatures([30, 40, 50, 60])) // [1,1,1,0]
// console.log(dailyTemperatures([30, 60, 90])) // [1,1,0]
// console.log(dailyTemperatures([55, 38, 53, 81, 61, 93, 97, 32, 43, 78])) // [3,1,1,2,1,1,0,1,1,0]

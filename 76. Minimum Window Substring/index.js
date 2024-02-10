/**
Given two strings s and t of lengths m and n respectively, return the minimum window
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.

Follow up: Could you find an algorithm that runs in O(m + n) time?
*/

const getIndexes = (char, string) => {
  const idxs = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      idxs.push(i)
    }
  }
  return idxs
}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const lastPosition = new Array(t.length).fill(-1)

  let minIndex = -1
  let finalString = ''
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (!t.includes(char)) continue

    const indexesChar = getIndexes(char, t)
    const arrMins = lastPosition.filter((_, idx) => indexesChar.includes(idx))

    // const indexChar = t.indexOf(char)
    const indexChar = t.indexOf(Math.min(arrMins))
    console.log({ indexesChar, arrMins, indexChar })
    const indexLastChar = lastPosition[indexChar]

    lastPosition[indexChar] = i
    if (indexLastChar !== minIndex) continue

    minIndex = Math.min(...lastPosition)
    if (minIndex === -1) continue

    const newString = s.slice(minIndex, i + 1)
    if (!finalString.length || finalString.length > newString.length) finalString = newString
  }

  return finalString
}

// console.log(minWindow('ADOBECODEBANC', 'ABC')) // "BANC"
// console.log(minWindow('a', 'a')) // "a"
// console.log(minWindow('a', 'aa')) // ""
console.log(minWindow('aa', 'aa')) // "aa"

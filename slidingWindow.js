// Longest substring without repeating characters

function lengthOfLongestSubstring(s) {
  let charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Example Usage:
console.log(lengthOfLongestSubstring("abcacbdd")); // Output: 3 ("abc")
// console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 ("b")
// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 ("wke")

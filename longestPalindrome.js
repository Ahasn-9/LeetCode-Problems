// Helper function to expand around a center and return the length and start position
function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  // After the loop, left and right are one step beyond the palindrome
  const start = left + 1;
  const length = right - left - 1;
  return [length, start];
}

// Main function to find the longest palindromic substring
function longestPalindromicSubstring(s) {
  // Handle empty string or null input
  if (!s || s.length === 0) {
    return "";
  }

  let start = 0; // Starting index of the longest palindrome
  let maxLength = 1; // Length of the longest palindrome (minimum 1 for a single char)

  // Iterate through each character as a potential center
  for (let i = 0; i < s.length; i++) {
    // Check for odd-length palindrome (center at i)
    const [len1, start1] = expandAroundCenter(s, i, i);

    // Check for even-length palindrome (center between i and i+1)
    const [len2, start2] = expandAroundCenter(s, i, i + 1);

    // Update maxLength and start if a longer palindrome is found
    if (len1 > maxLength) {
      maxLength = len1;
      start = start1;
    }
    if (len2 > maxLength) {
      maxLength = len2;
      start = start2;
    }
  }

  // Return the substring using the start index and length
  return s.substring(start, start + maxLength);
}

// Test cases
console.log(longestPalindromicSubstring("babad")); // Output: "bab" (or "aba")
console.log(longestPalindromicSubstring("cbbd")); // Output: "bb"
console.log(longestPalindromicSubstring("a")); // Output: "a"
console.log(longestPalindromicSubstring("")); // Output: ""
console.log(longestPalindromicSubstring("racecar")); // Output: "racecar"

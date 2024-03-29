/**
 * @file Contains a function that will test if a string is a palindrome, the same forward as it is backwards.
 * @author Kylie Scott
 */

/**
 * Tests if a string is a palindrome. Ignores spaces, underscores, and other symbols. Ignores case.
 * 
 * @param {string} str String to be tested
 * @returns {boolean} True if the string is a palindrome
 */
function palindrome(str) {
  removeWhitespaceAndSymbols = str.replace(/\W|\s|_/g, "");
  upperCaseStr = removeWhitespaceAndSymbols.toUpperCase();

  const reverseStr = upperCaseStr.split("").reverse().join("");

  return upperCaseStr == reverseStr;
}

console.log(palindrome("eye"));

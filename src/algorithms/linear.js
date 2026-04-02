/**
 * Linear Search — O(n) time, O(1) space
 * Iterates through the array once, tracking the current minimum.
 */
function linearMin(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array");
  }

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

module.exports = { linearMin };

/**
 * Divide and Conquer — O(n) time, O(log n) space (call stack)
 * Splits the array in half recursively, comparing minimums from each half.
 */
function divideAndConquerMin(arr, left = 0, right = arr.length - 1) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array");
  }

  if (left === right) {
    return arr[left];
  }

  const mid = Math.floor((left + right) / 2);
  const leftMin = divideAndConquerMin(arr, left, mid);
  const rightMin = divideAndConquerMin(arr, mid + 1, right);

  return leftMin < rightMin ? leftMin : rightMin;
}

module.exports = { divideAndConquerMin };

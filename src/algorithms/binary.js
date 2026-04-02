console.log("binary");

function binaryMin(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array");
  }

  let left = 0;
  let right = arr.length - 1;
}

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return arr[left];
module.exports = { binaryMin };
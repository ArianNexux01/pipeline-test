const { linearMin } = require("./algorithms/linear");
const { divideAndConquerMin } = require("./algorithms/divideAndConquer");
const { tournamentMin } = require("./algorithms/tournament");
const { heapMin, MinHeap } = require("./algorithms/heap");
const { binaryMin } = require("./algorithms/binary");
/**
 * Finds the minimum value in an array using the specified algorithm.
 *
 * @param {number[]} arr - Input array
 * @param {"linear"|"divide-and-conquer"|"tournament"|"heap"} [algorithm="linear"] - Algorithm to use
 * @returns {number} The minimum value
 */
function findMin(arr, algorithm = "linear") {
  switch (algorithm) {
    case "linear":
      return linearMin(arr);
    case "divide-and-conquer":
      return divideAndConquerMin(arr);
    case "tournament":
      return tournamentMin(arr);
    case "heap":
      return heapMin(arr);
    case "binary":
      return binaryMin(arr);
    default:
      throw new Error(
        `Unknown algorithm "${algorithm}". Available: linear, divide-and-conquer, tournament, heap`
      );
  }
}

module.exports = {
  findMin,
  linearMin,
  divideAndConquerMin,
  tournamentMin,
  heapMin,
  MinHeap,
};

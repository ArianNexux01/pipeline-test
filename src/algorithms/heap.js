/**
 * Min-Heap — O(n) build time, O(1) for finding minimum
 * Builds a min-heap from the array; the root is always the minimum.
 * Useful when you need repeated minimum queries on the same data.
 */
class MinHeap {
  constructor(arr) {
    this._heap = [...arr];
    this._buildHeap();
  }

  _buildHeap() {
    const start = Math.floor(this._heap.length / 2) - 1;
    for (let i = start; i >= 0; i--) {
      this._siftDown(i);
    }
  }

  _siftDown(i) {
    const n = this._heap.length;
    while (true) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if (left < n && this._heap[left] < this._heap[smallest]) smallest = left;
      if (right < n && this._heap[right] < this._heap[smallest]) smallest = right;

      if (smallest === i) break;

      [this._heap[i], this._heap[smallest]] = [this._heap[smallest], this._heap[i]];
      i = smallest;
    }
  }

  min() {
    return this._heap[0];
  }
}

function heapMin(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array");
  }
  return new MinHeap(arr).min();
}

module.exports = { heapMin, MinHeap };

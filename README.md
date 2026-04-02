# find-min-array

Find the minimum number in an array using multiple algorithms.

## Installation

```bash
npm install find-min-array
```

## Usage

### `findMin(arr, algorithm?)`

The main entry point. Accepts an array and an optional algorithm name (defaults to `"linear"`).

```js
const { findMin } = require("find-min-array");

findMin([3, 1, 4, 1, 5]);                        // 1
findMin([3, 1, 4, 1, 5], "divide-and-conquer");  // 1
findMin([3, 1, 4, 1, 5], "tournament");          // 1
findMin([3, 1, 4, 1, 5], "heap");                // 1
```

### Importing algorithms directly

```js
const { linearMin }           = require("find-min-array");
const { divideAndConquerMin } = require("find-min-array");
const { tournamentMin }       = require("find-min-array");
const { heapMin, MinHeap }    = require("find-min-array");
```

## Algorithms

### Linear — `"linear"`

Iterates through the array once, tracking the current minimum.

- **Time:** O(n)
- **Space:** O(1)
- **Best for:** General use. Simple and memory-efficient.

```js
linearMin([8, 3, 7, 1, 5]); // 1
```

---

### Divide and Conquer — `"divide-and-conquer"`

Splits the array in half recursively, comparing the minimum from each half until a single value remains.

- **Time:** O(n)
- **Space:** O(log n) — call stack depth
- **Best for:** Demonstrating recursive decomposition on large arrays.

```js
divideAndConquerMin([8, 3, 7, 1, 5]); // 1
```

---

### Tournament — `"tournament"`

Pairs elements and compares them in elimination rounds, like a tournament bracket, until one winner (the minimum) remains.

- **Time:** O(n)
- **Space:** O(n)
- **Best for:** Scenarios that require finding both minimum and second minimum, or multiple ranked results.

```js
tournamentMin([8, 3, 7, 1, 5]); // 1
```

---

### Min-Heap — `"heap"`

Builds a min-heap from the array in O(n). The root of the heap is always the minimum, accessible in O(1).

- **Time:** O(n) to build, O(1) to query
- **Space:** O(n)
- **Best for:** Repeated minimum queries on the same dataset.

```js
heapMin([8, 3, 7, 1, 5]); // 1

// Use MinHeap directly for repeated queries
const { MinHeap } = require("find-min-array");
const heap = new MinHeap([8, 3, 7, 1, 5]);
heap.min(); // 1
```

---

## Algorithm Comparison

| Algorithm          | Time  | Space    | Best Use Case                          |
|--------------------|-------|----------|----------------------------------------|
| Linear             | O(n)  | O(1)     | General use, memory-constrained        |
| Divide and Conquer | O(n)  | O(log n) | Large arrays, recursive approach       |
| Tournament         | O(n)  | O(n)     | Multiple ranked results needed         |
| Min-Heap           | O(n)* | O(n)     | Repeated minimum queries on same data  |

*O(n) to build, O(1) per query thereafter.

## Error Handling

All functions throw an `Error` if the input is not a non-empty array:

```js
findMin([]);          // Error: Input must be a non-empty array
findMin("invalid");   // Error: Input must be a non-empty array
findMin([1], "sort"); // Error: Unknown algorithm "sort". Available: linear, divide-and-conquer, tournament, heap
```

## Running Tests

```bash
npm test
```

35 tests covering: typical arrays, single elements, negative numbers, identical values, odd/even lengths, empty arrays, and invalid inputs.

## License

MIT

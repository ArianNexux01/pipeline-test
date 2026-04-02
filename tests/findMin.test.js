const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { findMin, linearMin, divideAndConquerMin, tournamentMin, heapMin } = require("../src/index");

const algorithms = [
  ["linear", linearMin],
  ["divide-and-conquer", divideAndConquerMin],
  ["tournament", tournamentMin],
  ["heap", heapMin],
];

for (const [name, fn] of algorithms) {
  describe(name, () => {
    it("finds min in a simple array", () => {
      assert.equal(fn([3, 1, 4, 1, 5, 9, 2, 6]), 1);
    });

    it("handles single element", () => {
      assert.equal(fn([42]), 42);
    });

    it("handles negative numbers", () => {
      assert.equal(fn([-5, -1, -10, 0, 3]), -10);
    });

    it("handles all identical values", () => {
      assert.equal(fn([7, 7, 7, 7]), 7);
    });

    it("handles odd-length arrays", () => {
      assert.equal(fn([8, 3, 5]), 3);
    });

    it("handles two elements", () => {
      assert.equal(fn([10, 2]), 2);
    });

    it("throws on empty array", () => {
      assert.throws(() => fn([]), /non-empty/);
    });

    it("throws on non-array input", () => {
      assert.throws(() => fn("not an array"), /non-empty/);
    });
  });
}

describe("findMin (dispatcher)", () => {
  it("defaults to linear algorithm", () => {
    assert.equal(findMin([5, 3, 8, 1]), 1);
  });

  it("accepts algorithm as second argument", () => {
    for (const [name] of algorithms) {
      assert.equal(findMin([5, 3, 8, 1], name), 1);
    }
  });

  it("throws on unknown algorithm", () => {
    assert.throws(() => findMin([1, 2], "bubble-sort"), /Unknown algorithm/);
  });
});

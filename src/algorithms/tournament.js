/**
 * Tournament Algorithm — O(n) time, O(n) space
 * Pairs elements and compares them in rounds (like a tournament bracket)
 * until one winner (the minimum) remains.
 */
function tournamentMin(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array");
  }

  let round = [...arr];

  while (round.length > 1) {
    const nextRound = [];
    for (let i = 0; i < round.length - 1; i += 2) {
      nextRound.push(round[i] < round[i + 1] ? round[i] : round[i + 1]);
    }
    // carry over unpaired element if array length is odd
    if (round.length % 2 !== 0) {
      nextRound.push(round[round.length - 1]);
    }
    round = nextRound;
  }

  return round[0];
}

module.exports = { tournamentMin };

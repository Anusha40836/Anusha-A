/**
 * Generate series of odd numbers with special pattern:
 * - For even input, generate odd numbers up to previous odd count
 * - For odd input, generate odd numbers up to that count
 * @param {number} a - Input number
 * @returns {number[]} Series of odd numbers
 */
function generateSeries2(a) {
  // If input is even, use the previous odd number
  const n = a % 2 === 1 ? a : a - 1;

  const series = [];
  for (let i = 0; i < n; i++) {
    series.push(2 * i + 1);
  }
  return series;
}

// Example usage and testing
if (require.main === module) {
  console.log("Problem 3 Examples:");
  const testCases = [1, 2, 3, 4, 5, 6];

  testCases.forEach((a) => {
    const result = generateSeries2(a);
    console.log(`input a = ${a}, then output: ${result.join(", ")}`);
  });
}

module.exports = generateSeries2;

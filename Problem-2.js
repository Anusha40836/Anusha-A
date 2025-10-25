/**
 * Generate series of odd numbers until count = a
 * @param {number} a - Number of terms to generate
 * @returns {number[]} Series of odd numbers
 */
function generateSeries1(a) {
  const series = [];
  for (let i = 0; i < a; i++) {
    series.push(2 * i + 1);
  }
  return series;
}

// Example usage and testing
if (require.main === module) {
  console.log("Problem 2 Examples:");
  const testCases = [1, 2, 3, 4, 5];

  testCases.forEach((a) => {
    const result = generateSeries1(a);
    console.log(`input a = ${a}, then output: ${result.join(", ")}`);
  });
}

module.exports = generateSeries1;

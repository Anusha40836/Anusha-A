/**
 * Count how many numbers in the list are multiples of 1 through 9
 * @param {number[]} numbers - Array of integers
 * @returns {Object} Dictionary with counts for multiples of 1-9
 */
function countMultiples(numbers) {
  const result = {};

  for (let divisor = 1; divisor <= 9; divisor++) {
    let count = 0;
    for (const num of numbers) {
      if (num % divisor === 0) {
        count++;
      }
    }
    result[divisor] = count;
  }

  return result;
}

// Example usage and testing
if (require.main === module) {
  console.log("Problem 4 Example:");

  const inputList = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
  const output = countMultiples(inputList);

  console.log(`Input: [${inputList.join(", ")}]`);
  console.log("Output:");
  Object.entries(output).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
  });

  // Additional test case
  console.log("\nAdditional Test Case:");
  const testList = [10, 20, 30, 40, 50];
  const testOutput = countMultiples(testList);
  console.log(`Input: [${testList.join(", ")}]`);
  console.log("Output:");
  Object.entries(testOutput).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
  });
}

module.exports = countMultiples;

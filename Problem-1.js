class Calculator {
  /**
   * Perform basic arithmetic operations
   * @param {number} a - First number
   * @param {number} b - Second number
   * @param {string} operation - Type of operation ('add', 'subtract', 'multiply', 'divide')
   * @returns {number} Result of the operation
   */
  calculate(a, b, operation) {
    operation = operation.toLowerCase().trim();

    switch (operation) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        if (b === 0) {
          throw new Error("Cannot divide by zero");
        }
        return a / b;
      default:
        throw new Error(
          "Invalid operation. Use 'add', 'subtract', 'multiply', or 'divide'"
        );
    }
  }
}

// Example usage and testing
if (require.main === module) {
  const calc = new Calculator();

  console.log("Calculator Examples:");
  console.log(`5 + 3 = ${calc.calculate(5, 3, "add")}`);
  console.log(`10 - 4 = ${calc.calculate(10, 4, "subtract")}`);
  console.log(`6 * 7 = ${calc.calculate(6, 7, "multiply")}`);
  console.log(`15 / 3 = ${calc.calculate(15, 3, "divide")}`);

  // Test error cases
  try {
    console.log(`5 / 0 = ${calc.calculate(5, 0, "divide")}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

module.exports = Calculator;

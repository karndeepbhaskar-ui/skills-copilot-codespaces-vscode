(function (root) {
  function calculate(a, b, operator) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      throw new Error("Inputs must be valid numbers.");
    }

    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b === 0) {
          throw new Error("Cannot divide by zero.");
        }
        return a / b;
      default:
        throw new Error("Unsupported operator.");
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { calculate };
  }

  root.calculate = calculate;
})(typeof window !== "undefined" ? window : globalThis);

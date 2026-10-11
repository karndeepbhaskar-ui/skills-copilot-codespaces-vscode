const test = require("node:test");
const assert = require("node:assert/strict");
const { calculate } = require("./calculator");

test("adds two numbers", () => {
  assert.equal(calculate(2, 3, "+"), 5);
});

test("subtracts two numbers", () => {
  assert.equal(calculate(7, 4, "-"), 3);
});

test("multiplies two numbers", () => {
  assert.equal(calculate(6, 5, "*"), 30);
});

test("divides two numbers", () => {
  assert.equal(calculate(8, 2, "/"), 4);
});

test("throws for division by zero", () => {
  assert.throws(() => calculate(8, 0, "/"), /Cannot divide by zero/);
});

test("throws for unsupported operator", () => {
  assert.throws(() => calculate(8, 2, "%"), /Unsupported operator/);
});

const { sum } = require("./sum");

test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("add 3 + 4 to equal 8", () => {
  expect(sum(3, 4)).toBe(5);
});

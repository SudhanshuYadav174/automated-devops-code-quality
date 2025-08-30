const { add, divide } = require('../src/math');

describe('math module', () => {
  test('add adds positive numbers', () => { expect(add(2,5)).toBe(7); });
  test('add handles negatives', () => { expect(add(-2,-3)).toBe(-5); });
  test('divide divides correctly', () => { expect(divide(10,2)).toBe(5); });
  test('divide throws on zero divisor', () => { expect(() => divide(10,0)).toThrow('Division by zero'); });
});
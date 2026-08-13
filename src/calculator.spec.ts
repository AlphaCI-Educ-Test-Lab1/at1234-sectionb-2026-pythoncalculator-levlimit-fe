import { add, divide, multiply, subtract } from './calculator';

describe('calculator', () => {
  it('adds two numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('subtracts two numbers', () => {
    expect(subtract(10, 7)).toBe(3);
  });

  it('multiplies two numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  it('divides two numbers', () => {
    expect(divide(9, 3)).toBe(3);
  });

  it('refuses to divide by zero', () => {
    expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
  });
});

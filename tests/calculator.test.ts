import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from '../src/calculator';

describe('Calculator Tests', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should subtract two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('should multiply two numbers correctly', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  it('should divide two numbers correctly', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

  it('should handle invalid input', () => {
    expect(() => add(10, 'string' as unknown as number)).toThrow();
    expect(() => subtract('string' as unknown as number, 5)).toThrow();
  });
});

import factorial from './factorial';
import { expect as expectChai } from 'chai';

describe('factorial', () => {
  it(`Factorial of 10 should be 3628800`, () => {
    expectChai(factorial(10))
      .to.be.equal(3628800);
  });
  it(`Factorial of 0 should be 1`, () => {
    expectChai(factorial(0))
      .to.be.equal(1);
  });
  it(`Factorial of 2 should be 2`, () => {
    expectChai(factorial(2))
      .to.be.equal(2);
  });
  it(`Factorial of 1 should be 1`, () => {
    expectChai(factorial(1))
      .to.be.equal(1);
  });
});

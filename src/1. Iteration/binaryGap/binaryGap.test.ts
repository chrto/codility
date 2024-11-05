
import binaryGap from './binaryGap';
import { expect as expectChai } from 'chai';

describe('factorial', () => {
  it(`Factorial of 10 should be 3628800`, () => {
    expectChai(binaryGap(9))
      .to.be.equal(2);
  });
  it(`Factorial of 0 should be 1`, () => {
    expectChai(binaryGap(529))
      .to.be.equal(4);
  });
  it(`Factorial of 2 should be 2`, () => {
    expectChai(binaryGap(20))
      .to.be.equal(1);
  });
  it(`Factorial of 1 should be 1`, () => {
    expectChai(binaryGap(15))
      .to.be.equal(0);
  });
  it(`Factorial of 1 should be 1`, () => {
    expectChai(binaryGap(32))
      .to.be.equal(0);
  });
});

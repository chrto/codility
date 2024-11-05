
import permCheck from './permCheck';
import { expect as expectChai } from 'chai';

describe('permCheck', () => {
  it(`Should return 1 if given array is permutation`, () => {
    const a: number[] = [4, 1, 3, 2];
    expectChai(permCheck(a))
      .to.be.equal(1);
  });

  it(`Should return 0 if given array is NOT permutation`, () => {
    const a: number[] = [4, 1, 3];
    expectChai(permCheck(a))
      .to.be.equal(0);
  });

  it(`Should return 0 if given array is NOT permutation`, () => {
    const a: number[] = [4, 3, 2];
    expectChai(permCheck(a))
      .to.be.equal(0);
  });

  it(`Should return 1 if given array has only one element`, () => {
    const a: number[] = [1];
    expectChai(permCheck(a))
      .to.be.equal(1);
  });

  it(`Should return 0 if given array has only one element`, () => {
    const a: number[] = [3];
    expectChai(permCheck(a))
      .to.be.equal(0);
  });
});

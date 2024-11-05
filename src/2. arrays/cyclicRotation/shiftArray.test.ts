import shiftArray from './shiftArray';
import { expect as expectChai } from 'chai';


describe('shift', () => {
  it(`should shift intems in array k-times`, () => {
    expectChai(shiftArray([], 3))
      .to.be.deep.equal([]);
  });
  it(`should shift intems in array k-times`, () => {
    expectChai(shiftArray([3, 8, 9, 7, 6], 3))
      .to.be.deep.equal([9, 7, 6, 3, 8]);
  });
  it(`should shift intems in array k-times`, () => {
    expectChai(shiftArray([0, 0, 0], 1))
      .to.be.deep.equal([0, 0, 0]);
  });
  it(`should shift intems in array k-times`, () => {
    expectChai(shiftArray([1, 2, 3, 4], 4))
      .to.be.deep.equal([1, 2, 3, 4]);
  });
});

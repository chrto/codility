
import missingInteger from './missingInteger';
import { expect as expectChai } from 'chai';

describe('maxCounters', () => {
  it(`Should return missing integer`, () => {
    const a: number[] = [1, 3, 6, 4, 1, 2];
    expectChai(missingInteger(a))
      .to.be.equal(5);
  });

  it(`Should return missing integer`, () => {
    const a: number[] = [1, 2, 3];
    expectChai(missingInteger(a))
      .to.be.equal(4);
  });

  it(`Should return missing integer`, () => {
    const a: number[] = [-1, -3];
    expectChai(missingInteger(a))
      .to.be.equal(1);
  });

  it(`Should return missing integer`, () => {
    const a: number[] = [-1];
    expectChai(missingInteger(a))
      .to.be.equal(1);
  });

  it(`Should return missing integer`, () => {
    const a: number[] = [1];
    expectChai(missingInteger(a))
      .to.be.equal(2);
  });

  it(`Should return missing integer`, () => {
    const a: number[] = [0];
    expectChai(missingInteger(a))
      .to.be.equal(1);
  });

  it(`Should return missing integer`, () => {
    const a: number[] = [10];
    expectChai(missingInteger(a))
      .to.be.equal(1);
  });
});

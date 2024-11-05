
import countDiv from './countDiv';
import { expect as expectChai } from 'chai';

describe('countDIv', () => {
  it(`Should return 3`, () => {
    expectChai(countDiv(5, 11, 2))
      .to.be.equal(3);
  });

  it(`Should return 3`, () => {
    expectChai(countDiv(7, 12, 2))
      .to.be.equal(3);
  });

  it(`Should return 4`, () => {
    expectChai(countDiv(6, 12, 2))
      .to.be.equal(4);
  });

  it(`Should return 3`, () => {
    expectChai(countDiv(6, 11, 2))
      .to.be.equal(3);
  });

  it(`Should return 1`, () => {
    expectChai(countDiv(6, 11, 7))
      .to.be.equal(1);
  });

  it(`Should return 0`, () => {
    expectChai(countDiv(6, 11, 12))
      .to.be.equal(0);
  });

  it(`Should return 1`, () => {
    expectChai(countDiv(10, 10, 5))
      .to.be.equal(1);
  });

  it(`Should return 0`, () => {
    expectChai(countDiv(10, 10, 7))
      .to.be.equal(0);
  });

  it(`Should return 0`, () => {
    expectChai(countDiv(0,0, 11))
      .to.be.equal(1);
  });

  it(`Should return 0`, () => {
    expectChai(countDiv(1, 1, 11))
      .to.be.equal(0);
  });
});

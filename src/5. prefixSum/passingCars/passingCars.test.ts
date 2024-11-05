
import passingCars from './passingCars';
import { expect as expectChai } from 'chai';

describe('passingCars', () => {
  it(`Should by 5`, () => {
    const a: number[] = [0, 1, 0, 1, 1];
    expectChai(passingCars(a))
      .to.be.equal(5);
  });
});

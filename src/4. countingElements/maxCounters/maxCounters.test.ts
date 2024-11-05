
import maxCounters from './maxCounters';
import { expect as expectChai } from 'chai';

describe('maxCounters', () => {
  it(`Should return corect counters set`, () => {
    const n: number = 5;
    const a: number[] = [3, 4, 4, 6, 1, 4, 4];
    expectChai(maxCounters(n, a))
      .to.be.deep.equal([3, 2, 2, 4, 2]);
  });

  it(`Should return corect counters set`, () => {
    const n: number = 1;
    const a: number[] = [3, 1, 4, 6, 1, 4, 4];
    expectChai(maxCounters(n, a))
      .to.be.deep.equal([2]);
  });

});

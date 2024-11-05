import tapeEquilibrium from './tapeEquilibrium';
import { expect as expectChai } from 'chai';

describe('tapeEquilibrium', () => {
  it(`shoud returns the minimal difference that can be achieved => 1`, () => {
    expectChai(tapeEquilibrium([3, 1, 2, 4, 3]))
      .to.be.equal(1);
  });
});

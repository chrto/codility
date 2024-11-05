import frogJmp from './frogJmp';
import { expect as expectChai } from 'chai';

describe('frogJmp', () => {
  it(`shoud return 3 jumps from 10 to 85`, () => {
    expectChai(frogJmp(10, 85, 30))
      .to.be.equal(3);
  });
});

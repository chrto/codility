import oddOccurrencesInArray from './oddOccurrencesInArray';
import { expect as expectChai } from 'chai';


describe('oddOccurrencesInArray', () => {
  it(`should return element, which has no pair => 1`, () => {
    expectChai(oddOccurrencesInArray([1,2,3,3,2]))
      .to.be.deep.equal(1);
  });

  it(`should return element, which has no pair => 7`, () => {
    expectChai(oddOccurrencesInArray([9,3,9,3,9,7,9]))
      .to.be.deep.equal(7);
  });

});

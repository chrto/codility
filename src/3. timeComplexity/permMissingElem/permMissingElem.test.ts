import permMissingElem from './permMissingElem';
import { expect as expectChai } from 'chai';

describe('permMissingElem', () => {
  it(`shoud return missing element => 4 `, () => {
    expectChai(permMissingElem([2,3,1,5]))
      .to.be.equal(4);
  });
  it(`shoud return missing element => 1 => FIRST `, () => {
    expectChai(permMissingElem([2,3,4,5]))
      .to.be.equal(1);
  });
  it(`shoud return missing element => 5 => LAST `, () => {
    expectChai(permMissingElem([2,3,4,1]))
      .to.be.equal(5);
  });

  it(`shoud return missing element => 0 `, () => {
    expectChai(permMissingElem([1]))
      .to.be.equal(2);
  });
  it(`shoud return missing element => 1 `, () => {
    expectChai(permMissingElem([2]))
      .to.be.equal(1);
  });
  it(`shoud return missing element => 1 `, () => {
    expectChai(permMissingElem([]))
      .to.be.equal(1);
  });
});

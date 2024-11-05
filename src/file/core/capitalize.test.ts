import { capitalizeFirst, capitalizeSecond, capitalizeFlip } from './capitalize';
import { expect as expectChai } from 'chai';

describe(`Capitalize first char`, () => {
  it(`Should capitalize first char in word 'second' => sEcond`, () => {
    expectChai(capitalizeFirst('second'))
      .to.be.equal('Second');
  });

  it(`Should capitalize first char in word 'a' => A`, () => {
    expectChai(capitalizeFirst('a'))
      .to.be.equal('A');
  });

  it(`Should capitalize first char in word 'az' => Az`, () => {
    expectChai(capitalizeFirst('az'))
      .to.be.equal('Az');
  });

  it(`Should capitalize first char in word 'ada' => aDa`, () => {
    expectChai(capitalizeFirst('ada'))
      .to.be.equal('Ada');
  });
});

describe(`Capitalize second char`, () => {

  it(`Should capitalize second char in word 'second' => sEcond`, () => {
    expectChai(capitalizeSecond('second'))
      .to.be.equal('sEcond');
  });

  it(`Should capitalize second char in word 'a' => a`, () => {
    expectChai(capitalizeSecond('a'))
      .to.be.equal('a');
  });

  it(`Should capitalize second char in word 'az' => aZ`, () => {
    expectChai(capitalizeSecond('az'))
      .to.be.equal('aZ');
  });

  it(`Should capitalize second char in word 'ada' => aDa`, () => {
    expectChai(capitalizeSecond('ada'))
      .to.be.equal('aDa');
  });
});

describe(`Flip capitalized`, () => {

  it(`Should flip chars 'SeConD' => sEcONd`, () => {
    expectChai(capitalizeFlip('SeConD'))
      .to.be.equal('sEcONd');
    expectChai(capitalizeFlip('sEcONd'))
      .to.be.equal('SeConD');
  });

  it(`Should flip chars 'a' => A`, () => {
    expectChai(capitalizeFlip('a'))
      .to.be.equal('A');
    expectChai(capitalizeFlip('A'))
      .to.be.equal('a');
  });

  it(`Should flip chars 'az' => AZ`, () => {
    expectChai(capitalizeFlip('az'))
      .to.be.equal('AZ');
    expectChai(capitalizeFlip('AZ'))
      .to.be.equal('az');
  });
});

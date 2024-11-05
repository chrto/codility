it.todo('')
// import genomicRangeQuery, { impactFactor } from './genomicRangeQuery';
// import { expect as expectChai } from 'chai';

// describe('impactFactor', () => {
//   it(`Should return 1, if nucleotides is 'A'`, () => {
//     expectChai(impactFactor('A'))
//       .to.be.equal(1);
//   });
//   it(`Should return 2, if nucleotides is 'C'`, () => {
//     expectChai(impactFactor('C'))
//       .to.be.equal(2);
//   });
//   it(`Should return 3, if nucleotides is 'G'`, () => {
//     expectChai(impactFactor('G'))
//       .to.be.equal(3);
//   });
//   it(`Should return 4, if nucleotides is 'T'`, () => {
//     expectChai(impactFactor('T'))
//       .to.be.equal(4);
//   });
//   it(`Should return NaN, if nucleotides is 'X'`, () => {
//     expectChai(impactFactor('X'))
//       .to.be.NaN;
//   });
// });

// describe('genomicRangeQuery', () => {
//   it(`Should return minimal impact factor of nucleotides contained in the DNA sequence ([2, 4, 1])`, () => {
//     const S: string = 'CAGCCTA';
//     const P: number[] = [2, 5, 0];
//     const Q: number[] = [4, 5, 6];
//     expectChai(genomicRangeQuery(S, P, Q))
//       .to.be.deep.equal([2, 4, 1]);
//   });

//   it(`Should return minimal impact factor of nucleotides contained in the DNA sequence ([2, 4, 1])`, () => {
//     const S: string = 'TC';
//     const P: number[] = [0, 0, 1];
//     const Q: number[] = [0, 1, 1];
//     expectChai(genomicRangeQuery(S, P, Q))
//       .to.be.deep.equal([4, 2, 2]);
//   });
// });

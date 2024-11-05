
const lengthReducer = (acc: number[], v: string): number[] =>
  acc.concat(v.length);

const maxReducer = (acc: number, v: number, i: number, a: number[]): number =>
  i === 0 || i == a.length - 1
    ? acc
    : acc > v ? acc : v;


const binaryGap = (n: number): number =>
  n.toString(2)
    .split('1')
    .reduce(lengthReducer, [])
    .reduce(maxReducer, 0);

export default binaryGap;


const sumReducer = (acc: number, item: number): number => acc + item;
const sum = (arr: number[]): number =>
  arr.reduce(sumReducer, 0);

const absReducer = (acc: number[], _item: number, p: number, array: number[]): number[] => {
  let down: number;
  let up: number;
  let abs: number;

  if (p > 1) {
    down = acc[0] + array[p - 1];
    up = acc[1] - array[p - 1];
    abs = Math.abs(down - up);
    return [down, up, abs < acc[2] ? abs : acc[2]];
  } else if (p === 1) {
    down = sum(array.slice(0, p));
    up = sum(array.slice(p));
    return [down, up, Math.abs(down - up)];
  } else {
    return acc;
  }
};

const tapeEquilibrium = (arr: number[]): number =>
  arr
    .reduce(absReducer, [])[2];

export default tapeEquilibrium;

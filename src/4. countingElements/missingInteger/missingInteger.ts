// function* generator () {
//   let counter = 1
//   while (true) {
//     yield counter
//     counter ++
//   }
// }


// export default (A: number[]): number => {
//   const arr = A.filter((item) => item > 0)
//   for (const n of generator()) {
//     if (!arr.includes(n)) {
//       return n;
//     }
//   }
//   return -1
// }

export default (A: number[]): any => {
  const array = A
    .reduce((acc: number[], item: number): number[] =>
      item < 1
        ? acc
        : (!!acc[item - 1] ? acc[item - 1]++ : acc[item - 1] = 1, acc)
      , []);

  const index = array.findIndex(v => v === undefined);

  return index >= 0
    ? index + 1
    : array.length + 1;
};

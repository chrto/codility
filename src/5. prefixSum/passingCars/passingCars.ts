export default (A: number[]): number => {
  let counter = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      A.slice(i + 1).forEach(item => {
        counter += item;
      });
      if (counter >= 1000000000)
        return -1;
    }
  }
  return counter;
};
  // A.reduce((acc: number, item: number, index: number, arr: number[]): number =>
  //   (acc < 0) || (acc >= 1000000000)
  //     ? -1
  //     : (item === 1)
  //       ? acc
  //       : arr
  //         .slice(index + 1)
  //         .reduce((acc, item) => acc + item, acc),
  //   0
  // );
// export default (A: number[]): number =>
//   A.reduce((acc: number, item: number, index: number, arr: number[]): number =>
//     (acc < 0) || (acc >= 1000000000)
//       ? -1
//       : (item === 1)
//         ? acc
//         : arr
//           .slice(index + 1)
//           .reduce((acc, item) => acc + item, acc),
//     0
//   );

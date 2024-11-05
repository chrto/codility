export default (A: number[]): number => {
  const N = A.length;
  let P = 0;
  let Q = P + 1;
  let sum = A[P];
  let sliceAverage;
  let minAverage = (A[0] + A[1]) / 2;
  let startPosition = P;

  while (true) {
    if (Q === N) {
      P++;
      Q = P + 1;
      if (P + 2 === N) {
        return startPosition;
      }
    }

    sum = sum + A[Q];
    sliceAverage = sum / (Q - P + 1);
    sum // ?
    sliceAverage //?
    minAverage //?
    startPosition //?
    if (minAverage > sliceAverage) {
      P // ?
      sliceAverage //?
      startPosition = P
      minAverage = sliceAverage
    }
    Q++
  }
};

// type ACC = {
//   startPosition: number;
//   minAverage: number;
// };

// export default (A: number[]): number =>
//   A
//     .reduce(
//       (acc: ACC, _: number, index: number, arr: number[]): ACC => {
//         const N = arr.length;
//         const P = index;
//         let Q = P + 1;
//         let sum: number = arr[P];
//         let sliceAverage: number;

//         while (Q < N) {
//           sum = sum + arr[Q];
//           sliceAverage = sum / (Q - P + 1);
//           Q++;
//           acc = (acc.minAverage > sliceAverage)
//             ? {
//               startPosition: P,
//               minAverage: sliceAverage
//             }
//             : acc;
//         }
//         return acc;
//       },
//       {
//         startPosition: 0,
//         minAverage: (A[0] + A[1]) / 2
//       }
//     ).startPosition;

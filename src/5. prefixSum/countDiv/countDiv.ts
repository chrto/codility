export default (A: number, B: number, K: number): number => {
  let v = A;
  while (v % K !== 0 && v <= B) {
    v++;
  }
  return Math.ceil((B - v) / K) + (B % K === 0 ? 1 : 0);
};
// export default (A: number, B: number, K: number): number => {
//   let counter = 0;
//   let v = A;
//   let x;
//   while (x === undefined && v <= B) {
//     if (v % K === 0) {
//       x = v;
//       counter++;
//     } else {
//       v++;
//     }
//   }
//   return counter === 0 ? counter : counter + Math.floor((B - x) / K);
// };

// function* generator (x: number, y: number) {
//   let num: number = x;
//   while (true) {
//     yield num;
//     if (num === y)
//       return;
//     num++;
//   }
// }
// export default (A: number, B: number, K: number): number => {
//   let counter: number = 0;
//   for (const v of generator(A, B)) {
//     if ((v % K) === 0)
//       counter++;
//   }
//   return counter;
// };

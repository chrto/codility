// const reducer = (acc: number, item: number) =>
//   acc + 1 === item
//     ? item
//     : acc


// const permMissingElem = (arr: number[]): number =>
//   arr
//     .sort()
//     .reduce(reducer, 0) + 1
// const find = (item: number, index: number) =>
//   item !== index + 1;

// const permMissingElem = (arr: number[]): number => {
//   if (arr.length === 0) return 1;
//   const sorted = arr.sort();
//   const missing = sorted.find(find);
//   return sorted[0] === 2
//     ? 1
//     : isNaN(missing)
//       ? sorted.pop() + 1
//       : missing - 1;
// };

// const permMissingElem = (arr: number[]) => {
//   let n = 1
//   while (true) {
//     if (arr.indexOf(n) === -1) return n
//     n++
//   }
// }
const tail = ([_, ...rest]: number[]): number[] => rest;
const permMissingElem = (arr: number[]) => {
  let sorted = arr.sort();
  let n = 1;
  while (true) {
    if (sorted[0] !== n) return n
    n++;
    sorted = tail(sorted);
  }
};


export default permMissingElem;

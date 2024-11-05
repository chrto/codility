const isEven = (n: number): boolean => n % 2 === 0;

const find = (value: number, index: number, arr: number[]): boolean =>
  isEven(index)
    ? value !== arr[index + 1]
    : false;

const oddOccurrencesInArray = (arr: number[]): number =>
  arr
    .sort()
    .find(find);

// const reducer = (acc: number, item:number,index: number ,arr: number[]): number =>
//   acc !== 0
//   ? acc
//   : !isEven(index)
//     ? acc
//     : item === arr[index + 1]
//       ? acc
//       : item
// const oddOccurrencesInArray = (arr: number[]): number =>
//  arr
//   .sort()
//   .reduce(reducer, 0)




export default oddOccurrencesInArray;

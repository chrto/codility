export default (a: number[]): number =>
  a
    .sort((x: number, y: number): number => x - y)
    .reduce(
      (acc: number, item: number, index: number, arr: number[]) =>
        acc === 0
          ? acc
          : (index === 0 && item === 1) || (item - 1 === arr[index - 1])
            ? acc
            : 0
      , 1
    );

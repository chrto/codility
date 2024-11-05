interface ACC {
  counters: number[];
  maxCounter: number;
}

export default (N: number, A: number[]): number[] =>
  A
    .reduce(
      (acc: ACC, item: number): ACC =>
        item <= N
          ? {
            counters: (acc.counters[item - 1]++, acc.counters),
            maxCounter: acc.maxCounter < acc.counters[item - 1] ? acc.counters[item - 1] : acc.maxCounter
          }
          : {
            ...acc,
            counters: Array(N).fill(acc.maxCounter)
          },

      {
        counters: Array(N).fill(0),
        maxCounter: 0
      }

    ).counters;

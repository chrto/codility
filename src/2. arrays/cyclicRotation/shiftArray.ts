const shiftArray = (arr: number[], k: number): number[] =>
  arr.length === 0
    ? []
    : k === 0
      ? arr
      : shiftArray([arr.pop(), ...arr], k-1)

export default shiftArray

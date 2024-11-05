// const factorial =  (n: number): number =>
//   n <= 1
//     ? n
//     : n * factorial (n - 1)


function* generateArray (n: number) {
  let i = n;
  while (i > 0) {
    yield i;
    i--;
  }
}
// const reducer = (acc: number, v:number): number => acc * v
// const factorial = (n: number): number =>
//   n <= 0
//     ? 1
//     : Array.from(generateArray(n)).reduce(reducer, 1)

const aux = (generator: Generator, acc: number): number => {
  const next = generator.next();
  return next.done
    ? acc
    : aux(generator, acc * next.value);
};

const factorial = (n: number): number =>
  aux(generateArray(n), 1);


export default factorial;

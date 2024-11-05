import readFile from '../stream/read';
import writeFile from '../stream/write';
import { split, mapSync, } from 'event-stream';
// import { stdout } from 'process';


export const capitalizeFirst = ([first, ...rest]: string): string =>
  first
    .toUpperCase()
    .concat(rest.join(''));

export const capitalizeSecond = ([first, second, ...rest]: string): string =>
  second === undefined
    ? first
    : first
      .concat(second.toUpperCase())
      .concat(rest.join(''));

export const capitalizeFlip = ([...word]: string): string =>
  word.map((letter: string): string =>
    letter.toLowerCase() == letter
      ? letter.toUpperCase()
      : letter.toLowerCase()
  )
  .join('')
      // .concat(second.toUpperCase())
      // .concat(rest.join(''));



const isEmptyLine = (line: string): boolean =>
  line.length === 0;

// const addNewLine = (line: string): string =>
//   line.concat('\n');

const IN_FILE = 'storage/lorem.txt';
const OUT_FILE = 'storage/out_c.txt';

let words: number = 0;

export default (rootDir: string) =>
  readFile(`${rootDir}${IN_FILE}`)
    .pipe(split())
    .pipe(
      mapSync((line: string) =>
        isEmptyLine(line)
          ? line.concat('\n')
          : line
            .split(' ')
            .map(x => x)
            .join(' ')
            .concat('\n')
      )
        .on('error', (err) => {
          console.log('Error while processing file', err);
        })
        .on('close', () => {
          console.log(`in file are:`);
          console.log(`${words} words`);
          console.log('Finito');
          return `${words} \n`;
        })
    )
    .pipe(writeFile(`${rootDir}${OUT_FILE}`));

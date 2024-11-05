import readFile, {  } from '../stream/read';
import writeFile from '../stream/write';

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
    .join('');
// .concat(second.toUpperCase())
// .concat(rest.join(''));



const isEmptyLine = (line: string): boolean =>
  line.length === 0;

// const addNewLine = (line: string): string =>
//   line.concat('\n');

const IN_FILE = 'storage/lorem.txt';
const OUT_FILE = 'storage/out_mine.txt';

let line: string = '';

export default (rootDir: string) => {
  const writer = writeFile(`${rootDir}${OUT_FILE}`);

  const stream = readFile(`${rootDir}${IN_FILE}`)
    .on('data', (data) => {
      stream.pause();
      const lines: string[] = data.toString().split('\n');

      lines[0] = `${line}${lines[0]}`;
      line = lines.pop();

      lines
        .forEach((line) =>
          // writeFile(`${rootDir}${OUT_FILE}`).write(
          writer.write(
            isEmptyLine(line)
              ? line.concat('\n')
              : line
                .split(' ')
                .map(x => x)
                .join(' ')
                .concat('\n')

          ));

      stream.resume();
      // if (data.length < BUFFER_SIZE) {
      //   writer.end();
      // }
    })
    .on('error', (err) => {
      console.log('Error while processing file', err);
    })
    .on('end', () => {
      // writer.end();
    });
};
    // .pipe(stdout)
    // .pipe(split())
    // .pipe(
    //   mapSync((line: string) =>
    //     isEmptyLine(line)
    //       ? line.concat('\n')
    //       : line
    //         .split(' ')
    //         .map(capitalizeFlip)
    //         .join(' ')
    //         .concat('\n')
    //   )
    //     .on('error', (err) => {
    //       console.log('Error while processing file', err);
    //     })
    //     .on('close', () => {
    //       console.log(`in file are:`);
    //       console.log(`${words} words`);
    //       console.log('Finito');
    //       return `${words} \n`;
    //     })
    // )
    // .pipe(stdout);

// import { stdout } from 'process';
import { stdout } from 'process';
import readFile from '../stream/read';
// import writeFile from '../stream/write';


// Generated 113 paragraphs, 10000 words, 67578 bytes of Lorem Ipsum
const IN_FILE = 'storage/lorem.txt';
// const OUT_FILE = 'storage/out.txt'
let words: number = 0;
let paragraphs: number = 0;
let line: string = '';

const removeEmptyLines = (line: string): boolean => line.length > 0;
const countWordsInLine = (line: string) => line.split(' ').length;
const sumWordsInLines = (sum: number, line: number) => sum += line;

export default (rootDir: string) =>
  readFile(`${rootDir}${IN_FILE}`)
    .on('data', (data) => {
      const lines: string[] = data.toString().split('\n');

      lines[0] = `${line}${lines[0]}`;
      line = lines.pop();

      paragraphs += lines
        .filter(removeEmptyLines)
        .length;
      words += lines
        .filter(removeEmptyLines)
        .map(countWordsInLine)
        .reduce(sumWordsInLines, 0);
    })
    .on('error', (err) => {
      console.log('Error while processing file', err);
    })
    .on('close', () => {
      console.log(`in file are:`);
      console.log(`${words} words`);
      console.log(`${paragraphs} paragraphs`);
      console.log('Finito');
    })
    .pipe(stdout);
    // .pipe(writeFile(`${rootDir}${OUT_FILE}`));

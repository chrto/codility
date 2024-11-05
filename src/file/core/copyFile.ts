import readFile from '../stream/read';
import writeFile from '../stream/write';
import { split, mapSync } from 'event-stream';

const IN_FILE = 'storage/lorem.txt';
const OUT_FILE = 'storage/lorem_copy.txt';

export default (rootDir: string) =>
  readFile(`${rootDir}${IN_FILE}`)
    .pipe(split())
    .pipe(
      mapSync((line: string) => {
        console.log(line.split(' ').length);
        return line;
      })
    )
    .pipe(
      mapSync((line: string) => `${line} \n`)
        .on('error', (err) => {
          console.log('Error while processing file', err);
        })
        .on('end', () => {
          console.log('Finito');
        })
    )
    .pipe(writeFile(`${rootDir}${OUT_FILE}`));

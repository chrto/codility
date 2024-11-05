import readFile from '../stream/read';
import { split, mapSync } from 'event-stream';
import { stdout } from 'process';

const IN_FILE = 'storage/lorem.txt';

export default (rootDir: string) =>
  readFile(`${rootDir}${IN_FILE}`)
    .pipe(split())
    .pipe(
      mapSync((line: string) => `${line} \n`)
        .on('error', (err) => {
          console.log('Error while processing file', err);
        })
        .on('end', () => {
          console.log('Finito');
        })
    )
    .pipe(stdout);

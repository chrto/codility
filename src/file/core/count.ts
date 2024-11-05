import readFile from '../stream/read';
import { split, mapSync,  } from 'event-stream';
import { stdout } from 'process';


// Generated 113 paragraphs, 10000 words, 67578 bytes of Lorem Ipsum

const IN_FILE = 'storage/lorem.txt';


let words: number = 0;
let lines: number = 0;
export default (rootDir: string) =>
  readFile(`${rootDir}${IN_FILE}`)
    .pipe(split())
    .pipe(
      mapSync((line: string) => {
          if (line.length > 0 ) {
            words = words + line.split(' ').length
            lines = lines + 1
          }
          return `${line} \n`
      })
        .on('error', (err) => {
          console.log('Error while processing file', err);
        })
        .on('end', () => {
          console.log(`in file are:`)
          console.log(`${words} words`)
          console.log(`${lines} lines`)
          console.log('Finito');
          return `${words} \n`
        })
    )
    .pipe(stdout);

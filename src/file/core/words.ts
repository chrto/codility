import readFile from '../stream/read';
import { split, mapSync,  } from 'event-stream';
import { stdout } from 'process';
// import { stdout } from 'process';


// Generated 113 paragraphs, 10000 words, 67578 bytes of Lorem Ipsum

const IN_FILE = 'storage/lorem.txt';

let words: number = 0;

export default (rootDir: string) =>
  readFile(`${rootDir}${IN_FILE}`)
    .pipe(split(/(\n?\s)/))
    .pipe(
      mapSync((word: string) => {
        if (word.length > 1) {
            words = words + 1
            // console.log(word)
            console.log(`${word}=${words}`)
          }
          // return `${word} \n`
      })
        .on('error', (err) => {
          console.log('Error while processing file', err);
        })
        .on('close', () => {
          console.log(`in file are:`)
          console.log(`${words} words`)
          console.log('Finito');
          return `${words} \n`
        })
    )
    .pipe(stdout);

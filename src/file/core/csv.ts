import readFile from '../stream/read';
// import { split, mapSync,  } from 'event-stream';
import {  parse } from 'fast-csv';

import { stdout } from 'process';


// Generated 113 paragraphs, 10000 words, 67578 bytes of Lorem Ipsum

const IN_FILE = 'storage/expected_traces.csv';

// let words: number = 0;
// interface CsvRow {
//   block_number: string;
//   from_address: string;
//   to_address: string;
// }

// interface DetailsRow {
//   fromAddress: string;
//   toAddress: string;
// }
export default (rootDir: string) =>
  readFile(`${rootDir}${IN_FILE}`)
    // .pipe(format<any, DetailsRow>({ headers: true }))
    // .transform((row, next): void => {
    //   next(null, {
    //     fromAddress: row.from_address,
    //     toAddress: row.to_address
    //   });
    // })


    .pipe(parse({ headers: true, ignoreEmpty: true }))
    .transform((data) => `${JSON.stringify(data)}\n`)
    // .transform((data) => `${JSON.stringify({blockNumber: data.block_number, fromAddress: data.from_address})}\n`)
    // .on('data', (chunk) => console.log(chunk.toString()))
    .pipe(stdout);

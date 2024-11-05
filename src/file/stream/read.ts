import { createReadStream, ReadStream } from 'fs';

export const BUFFER_SIZE = 10 * 1024;
export default (filePath: string): ReadStream =>
  createReadStream(filePath, {highWaterMark: BUFFER_SIZE})
  // createReadStream(filePath)
    .on('open', (fd: number) => {
      console.log(`File ${filePath} has been opened for reading.`);
      console.log(`File descriptor: ${fd}`);
    })
    .on('close', ()=> {
      console.log(`File ${filePath} has been closed.`)
    })
    .on('end', () => {
      console.log('end event has been fired (reader)')
    })
    // .on('data', (chunk) => {
    //   console.log('data event has been fired')
    //   console.log(chunk.toString())
    // })

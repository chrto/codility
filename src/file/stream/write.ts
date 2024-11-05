import { createWriteStream, WriteStream } from 'fs';

export default (filePath: string): WriteStream =>
  createWriteStream(filePath)
    .on('open', (fd: number) => {
      console.log(`File ${filePath} has been opened for writing.`);
      console.log(`File descriptor: ${fd}`);
    })
    .on('close', () => {
      console.log(`File ${filePath} has been closed.`);
    })
    .on('end', () => {
      console.log('end event has been fired (writer)')
    });

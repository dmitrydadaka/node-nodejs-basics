import * as fs from 'fs';

export const write = async () => {
    
    const file = fs.createWriteStream('src/streams/files/fileToWrite.txt');
    process.stdin.pipe(file);
    
    process.stdin.resume();
};
write();

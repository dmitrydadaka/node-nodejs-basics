import * as fs from 'fs';

export const read = async () => {

    let stream = fs.createReadStream('src/streams/files/fileToRead.txt');

    stream.on('data', function (data) {
        process.stdout.write(data);
    });
};
read()
import * as fs from 'fs';

export const read = async () => {
    const fileName = 'src/fs/files/fileToRead.txt';

    try {
        await fs.promises.access(fileName);
        await fs.readFile( fileName, 'utf-8', function (err, data) {
            if (err) throw err;
            console.log(data);
        });
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw Error('FS operation is failed');;
        } else {
            throw err;
        }
    }
}
read();

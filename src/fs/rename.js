import * as fs from 'fs';

export const rename = async () => {
    const fileName = 'src/fs/files/wrongFilename.txt';

    try {
        await fs.promises.access(fileName);
        await fs.rename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', function (err, data) {
            if (err) throw err;
            console.log('File is renamed!');
        });
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw Error('FS operation is failed');

        } else {
            throw err;
        }
    }
};
rename();

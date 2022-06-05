import * as fsPromises from 'fs/promises';
import * as fs from 'fs';

export const remove = async () => {
    const fileName = 'src/fs/files/fileToRemove.txt';

    try {
        await fs.promises.access(fileName);
        await fsPromises.unlink(fileName);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw Error('FS operation is failed');;
        } else {
            throw err;
        }
    }
};
remove()

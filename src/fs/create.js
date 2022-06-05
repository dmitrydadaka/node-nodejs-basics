import * as fs from 'fs';
import { exists } from 'fs';

export const create = async () => {
    const fileName = 'src/fs/fresh.txt';

    try {
        await fs.promises.access(fileName);
        throw Error('FS operation is failed');;
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.writeFile('src/fs/fresh.txt', 'I am fresh and young', function (err) {
                if (err) throw err;
                console.log('File is created successfully.');
            });
        } else {
            throw err;
        }
    }
};
create();

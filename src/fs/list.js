import * as fs from 'fs';
import * as path from 'path';
import { readdir} from 'fs/promises';

export const list = async () => {
    const directName = 'src/fs/files'
    const __dirname = path.resolve();
    try {
        await fs.promises.access(directName);
        const pathToFiles = path.join(__dirname, 'src/fs/files');
        const files = await readdir(pathToFiles, {
            withFileTypes: true,
          });
          for (const file of files) {
            if (file.isFile()) {
              console.log('name file:', file.name);
              console.log('---------------------------');
            }
          }
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw Error('FS operation is failed');

        } else {
            throw err;
        }
    }
};
list();

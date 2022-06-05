import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

export const compress = async () => {
    const filePath = 'src/zip/files/fileToCompress.txt';
    const stream = createReadStream(filePath);
    stream
        .pipe(createGzip())
        .pipe(createWriteStream(`src/zip/archive.gz`))
        .on("finish", () =>
            console.log(`Successfully compressed the file at ${filePath}`)
        );
};
compress();

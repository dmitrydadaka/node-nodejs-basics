export const decompress = async () => {
    const filePath = 'src/zip/files/archive.gz';
    const stream = createReadStream(filePath);
    stream
        .pipe(Gunzip())
        .pipe(createWriteStream(`src/zip/fileToCompress.txt`))
        .on("finish", () =>
            console.log(`Successfully decompressed the file at ${filePath}`)
        );
    };
    decompress();
    
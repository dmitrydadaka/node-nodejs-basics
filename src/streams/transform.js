import { pipeline, Transform } from 'stream';

export const transform = async () => {
     
        const reverse = new Transform({
            transform(chunk, encoding, callback) {
              callback(null, chunk.reverse());
            },
          });
        
};
transform();

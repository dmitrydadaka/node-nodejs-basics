export const parseEnv = () => {
    for(let e in process.env) {
        if(e.includes('RSS_')) {
            console.log(`${e} = ${process.env[e]}`);
        }
    }
};
parseEnv();

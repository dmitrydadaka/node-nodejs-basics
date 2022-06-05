import { argv } from "process";

export const parseArgs = () => {
    for (let i = 0; i <= argv.slice(2).length; i += 2) {
        console.log(`${argv[i]} is ${argv[i+1]}`);
    }
};
parseArgs();

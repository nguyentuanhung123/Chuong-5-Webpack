import { reject } from "lodash";

const p = () => new Promise((resolve, reject) => {
    console.log('Hello World');
    resolve('100');
})

export default p;
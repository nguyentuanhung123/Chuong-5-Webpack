import handle from './utils.js';
import sum from './total.js';
import './css/style.css';
import './scss/style.scss'

// p().then((res) => {
//     console.log(res);
// })

console.log('Total : ', sum(12, 8));

// ES6 Spread Operator
const person = { name: 'Hung' }
const personClone = { ...person }
console.log('personClone', personClone)

//ES7 Object.values
console.log('Object.values', Object.values(personClone)) //Hung

const main = async () => {
    const data = await handle();
    console.log('Data : ', data);
}

main();


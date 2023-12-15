import p from './utils.js';
import sum from './index.js';
import './css/style.css';
import './scss/style.scss'

p().then((res) => {
    console.log(res);
})

console.log('Total : ', sum(2, 7));


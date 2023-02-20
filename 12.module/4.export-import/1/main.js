// 1.
// import increase from './counter.js';

// 2.
import { increase as increase1, getCount } from './counter.js';

// console.log(count);
increase1();
// console.log(count);
// count = -10;
// console.log(count);
increase1();
increase1();
const count = getCount();
console.log(count);

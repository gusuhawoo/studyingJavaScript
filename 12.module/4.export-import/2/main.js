// 1.
// import increase from './counter.js';

// 2.
// import { increase as increase1, getCount } from './counter.js';

// 3.
import * as counter from './counter.js';

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());

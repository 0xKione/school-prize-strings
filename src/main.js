// src/main.js

import App from './App';

const inst = new App(30);

console.time('execution');
const prizeStrings = inst.run();
console.log(`${prizeStrings} ${inst.totalDays}-day 'prize' strings`);
console.timeEnd('execution');

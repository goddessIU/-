// a.mjs
import b from './test';
console.log(b.count);    // 1
b.add();
console.log(b.count);    // 1
console.log(b.get());    // 2
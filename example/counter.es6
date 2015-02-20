"use strict";

import {Counter} from "../lib/counter.js";

var c = new Counter(5);
console.log(`Initial value: ${c.getValue()}`);

for (let i = 0; i < 10; i++) {
  console.log(`value=${c.increment().getValue()}`);
}
console.log(`Current value: ${c.getValue()}`);

for (let i = 0; i < 20; i++) { 
  console.log(`value=${c.decrement().getValue()}`);
}
console.log(`Current value: ${c.getValue()}`);

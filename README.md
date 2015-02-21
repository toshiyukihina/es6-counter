# counter

`Counter` class written in Javacript ES6. This is just a hello program for me.

[![Build Status][drone-image]][drone-url]
[![License][license-image]][license-url]

# Usage - API

Run command as below, and generated in `docs` dir.

```
$ npm run docs
```

# Example

```js
var c = new Counter();

for (let i = 0; i < 10; i++) {
  c.increment();
}
console.log(c.getValue()); //=> 10

c.decrement(); //=> 9
```

# License

MIT

[drone-url]:https://drone.io/github.com/toshiyukihina/es6-counter/latest
[drone-image]:https://drone.io/github.com/toshiyukihina/es6-counter/status.png

[license-url]: https://github.com/twada/power-assert/blob/master/MIT-LICENSE.txt
[license-image]: http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat

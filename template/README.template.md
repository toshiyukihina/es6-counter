# counter

`Counter` class written in Javacript ES6. This is just a hello program for me.

# Usage - API

{{heading-depth-set 2~}}
{{#this}}
  {{>exported~}}
{{/this}}

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
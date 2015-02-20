# counter

[![Build Status](https://drone.io/github.com/toshiyukihina/es6-counter/status.png)](https://drone.io/github.com/toshiyukihina/es6-counter/latest)

`Counter` class written in Javacript ES6. This is just a hello program for me.

# Usage - API


  <a name="Counter"></a>
####class: Counter
**Members**

* [class: Counter](#Counter)
  * [new Counter()](#new_Counter)

<a name="new_Counter"></a>
#####new Counter()
Counter class holds the value and provides the methods to manipulate the value as a counter.


  <a name="<anonymous>..Counter"></a>
####&lt;anonymous&gt;~Counter(value)
Initialize the counter with the value.

**Params**

- value `Integer` - Initial value of the counter. If the value is not given, the initial value is set to 0.  

**Scope**: inner function of &#x60;&lt;anonymous&gt;&#x60;  

  <a name="setValue.value"></a>
####setValue.value(value)
Update the value held the counter.

**Params**

- value `Integer` - The new value to set to the counter.  


  <a name="getValue.value"></a>
####getValue.value()
Get the value held by the counter.

**Returns**: `Integer`  

  <a name="increment.value"></a>
####increment.value()
Increment the value held the counter.

**Returns**: [Counter](#Counter) - self instance.  

  <a name="decrement.value"></a>
####decrement.value()
Decrement the value held the counter.

**Returns**: [Counter](#Counter) - self instance.  


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

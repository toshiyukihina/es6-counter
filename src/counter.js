// LICENSE: MIT
'use strict';

/**
 * Counter class holds the value and provides the methods to manipulate the value as a counter.
 * @class Counter
 */
export class Counter {

  /**
   * Initialize the counter with the value.
   * @param {Integer} value Initial value of the counter. If the value is not given, the initial value is set to 0.
   */
  constructor(value = 0) {
    this.value = value;
  }

  /**
   * Update the value held the counter.
   * @param {Integer} value The new value to set to the counter.
   */
  setValue(value) {
    this.value = value;
  }

  /**
   * Get the value held by the counter.
   * @returns {Integer}
   */
  getValue() {
    return this.value;
  }

  /**
   * Increment the value held the counter.
   * @returns {Counter} self instance.
   */
  increment() {
    this.value++;
    return this;
  }

  /**
   * Decrement the value held the counter.
   * @returns {Counter} self instance.
   */
  decrement() {
    this.value--;
    return this;
  }

};

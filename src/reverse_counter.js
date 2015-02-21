"use strict";

import {Counter} from "./counter.js";

/**
 * Counter class holds the value and provides the methods to manipulate the value as a counter.
 * Manipulators this class provides behave as reverse counter.
 * @class ReverseCounter
 */
export class ReverseCounter extends Counter {
  
  /**
   * Initialize the counter with the value.
   * @param {Integer} 
   */
  constructor(value = 0) {
    super(value);
  }

  /**
   * Decrement the counter value.
   * @returns {ReverseCounter} self
   */
  increment() {
    this.value--;
    return this;
  }

  /**
   * Increment the counter value.
   * @returns {ReverseCounter} self
   */
  decrement() {
    this.value++;
    return this;
  }

};

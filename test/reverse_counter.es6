"use strict";

import support from 'source-map-support';
support.install();

import {ReverseCounter} from "../lib/reverse_counter.js";
import assert from "assert";

describe("ReverseCounter", ()=> {
  describe("#constructor", ()=> {
    it("should be initialized with the given value", () => {
      let c = new ReverseCounter(1);
      assert.equal(c.getValue(), 1);
    });
  });

  describe("#increment", () => {
    it("should decrement the value", () => {
      let c = new ReverseCounter();
      assert.equal(c.increment().getValue(), -1);
    });
  });

  describe("#decrement", () => {
    it("should increment the value", () => {
      let c = new ReverseCounter();
      assert.equal(c.decrement().getValue(), 1);
    });
  });
});

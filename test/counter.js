"use strict";

import support from 'source-map-support';
support.install();

import {Counter} from "../lib/counter.js";
import assert from "assert";

describe("Counter", ()=> {
  describe("#constructor", ()=> {
    it("should be initialized with the given value", ()=> {
      let c = new Counter(2);
      assert.equal(c.getValue(), 2);
    });
  });

  describe("#getValue()", ()=> {
    it("should return 0 as default value", ()=> {
      let c = new Counter();
      assert.equal(c.getValue(), 0);
    });
  });

  describe("#setValue()", ()=> {
    it("should return the set value", ()=> {
      let c = new Counter();
      c.setValue(1);
      assert.equal(c.getValue(), 1);
    });
  });

  describe("#increment()", ()=> {
    it("should return incremented value", ()=> {
      let c = new Counter();
      c.increment();
      assert.equal(c.getValue(), 1);
    });
  });

  describe("#decrement()", ()=> {
    it("should return decremented value", ()=> {
      let c = new Counter();
      c.decrement();
      assert.equal(c.getValue(), -1);
    });
  });
});

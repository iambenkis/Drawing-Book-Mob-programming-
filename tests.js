const pageCount = require('./challenge')
const assert = require('assert');

describe('Tests', function () {
  it('Test of number of turned pages ', function () {
    assert(pageCount(6,2)=== 1);
    assert(pageCount(5,4)=== 0);
  })
})

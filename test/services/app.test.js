/* global describe, it, expect */

var $require = require('proxyquire');
var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../com/services/app');


describe('services/app', function() {
  
  it('should load service configuration from this package', function() {
    var registry = factory();
    console.log(registry);
    
    expect(1).to.equal(2);
  }); // should load service configuration from this package
  
});

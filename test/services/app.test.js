/* global describe, it, expect */

var $require = require('proxyquire');
var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../com/services/app');


describe('services/app', function() {
  
  it('should load service configuration from this package', function() {
    var registry = factory();
    expect(registry.get('postgresql')).to.deep.equal({ port: 5432, protocol: 'tcp' });
    expect(registry.get('postgres')).to.deep.equal({ port: 5432, protocol: 'tcp' });
  }); // should load service configuration from this package
  
});

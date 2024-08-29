/* global describe, it */

//var pkg = require('..');
var expect = require('chai').expect;


describe('bixby-ns', function() {
  
  describe('package.json', function() {
    var json = require('../package.json');
    
    it('should have assembly metadata', function() {
      expect(json.assembly.namespace).to.equal('ns');
      
      expect(json.assembly.components).to.have.length(1);
      expect(json.assembly.components).to.include('services');
    });
  });
  
});

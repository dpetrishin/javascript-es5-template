var assert = require('assert');
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
var TestClient = require('../src/testClient');

describe('Test Class', function() {
	it('should return value', function() {
		var model = {};
		var client = new TestClient('https://');
		assert.equal(client.start(model), 'nice!');
	});
	
	it('should not be instantiated', function() {
		expect(function() {
			var client = new TestClient();
		}).to.throw('baseUrl should not be empty.')
	})
});
'use strict';

/**
 * @constructor
 * @param {String} baseUrl  - Base url.
 */
var TestClass = function(baseUrl) {
	if (baseUrl === undefined || baseUrl == '') {
		throw 'baseUrl should not be empty.';
	}
	this.baseUrl = baseUrl;
	console.log("base url:" + this.baseUrl);
}

TestClass.prototype.start = function(model) {
	console.log('Start');
	return 'nice!';
}

module.exports = TestClass;
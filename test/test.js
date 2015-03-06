
var eventwheel = require('..');
var assert = require('assert');

var sandbox = document.createElement('div');
sandbox.id = 'sandbox';
sandbox.style.display = 'none';
document.getElementsByTagName('body')[0].appendChild(sandbox);

describe('eventwheel', function() {
  it('should return function', function() {
    assert(typeof eventwheel === 'function');
  });
});

describe('eventwheel(element, fn)', function() {
  it('should return function', function() {
    assert(typeof eventwheel(sandbox, function() {}) === 'function');
  });
});

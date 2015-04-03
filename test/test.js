
var eventwheel = require('..');
var assert = require('assert');

var sandbox = document.createElement('div');
sandbox.id = 'sandbox';
sandbox.style.display = 'none';
document.getElementsByTagName('body')[0].appendChild(sandbox);

function handler() {}

describe('eventwheel', function() {
  it('should return function', function() {
    assert(typeof eventwheel === 'function');
    assert(typeof eventwheel.bind === 'function');
    assert(typeof eventwheel.unbind === 'function');
  });
});

describe('eventwheel(element, fn)', function() {
  it('should return function', function() {
    assert(typeof eventwheel(sandbox, handler) === 'function');
  });
});

describe('eventwheel.bind(element, fn)', function() {
  it('should return function', function() {
    assert(typeof eventwheel.bind(sandbox, handler) === 'function');
  });
});

describe('eventwheel.unbind(element, fn)', function() {
  it('should return function', function() {
    assert(typeof eventwheel.unbind(sandbox, handler) === 'function');
  });
});

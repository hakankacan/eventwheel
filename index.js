
'use strict';

/**
 * Module dependencies
 */

try {
  var events = require('event');
} catch (err) {
  var events = require('component-event');
}

/**
 * Wheel events
 */

var wheelEvents = [
  'wheel',
  'mousewheel',
  'scroll',
  'DOMMouseScroll'
];

/**
 * Expose eventwheel
 * @param  {Element} element
 * @param  {Function} fn
 * @param  {Boolean} capture
 * @return {Function}
 * @api public
 */

module.exports = function(element, fn, capture) {
  for (var e = 0; e < wheelEvents.length; e++) {
    if ('on' + wheelEvents[e] in window) {
      return events.bind(element, wheelEvents[e], fn, capture || false);
    }
  }
};

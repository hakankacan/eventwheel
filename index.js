
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

var wheelEventsMap = [
  'wheel',
  'mousewheel',
  'scroll',
  'DOMMouseScroll'
];

/**
 * Wheel event name
 */

var wheelEvent;

for (var e = 0; e < wheelEventsMap.length; e++) {
  if ('on' + wheelEventsMap[e] in window) {
    wheelEvent = wheelEventsMap[e];
    break;
  }
}

/**
 * Expose bind
 * @param  {Element} element
 * @param  {Function} fn
 * @param  {Boolean} capture
 * @return {Function}
 * @api public
 */

module.exports = module.exports.bind = function(element, fn, capture) {
  return events.bind(element, wheelEvent, fn, capture || false);
};

/**
 * Expose unbind
 * @param  {Element} element
 * @param  {Function} fn
 * @param  {Boolean} capture
 * @return {Function}
 * @api public
 */

module.exports.unbind = function(element, fn, capture) {
  return events.unbind(element, wheelEvent, fn, capture || false);
};

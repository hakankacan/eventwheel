(function umd(require){
  if ('object' == typeof exports) {
    module.exports = require('1');
  } else if ('function' == typeof define && (define.amd || define.cmd)) {
    define(function(){ return require('1'); });
  } else {
    this['eventwheel'] = require('1');
  }
})((function outer(modules, cache, entries){

  /**
   * Global
   */

  var global = (function(){ return this; })();

  /**
   * Require `name`.
   *
   * @param {String} name
   * @param {Boolean} jumped
   * @api public
   */

  function require(name, jumped){
    if (cache[name]) return cache[name].exports;
    if (modules[name]) return call(name, require);
    throw new Error('cannot find module "' + name + '"');
  }

  /**
   * Call module `id` and cache it.
   *
   * @param {Number} id
   * @param {Function} require
   * @return {Function}
   * @api private
   */

  function call(id, require){
    var m = { exports: {} };
    var mod = modules[id];
    var name = mod[2];
    var fn = mod[0];

    fn.call(m.exports, function(req){
      var dep = modules[id][1][req];
      return require(dep || req);
    }, m, m.exports, outer, modules, cache, entries);

    // store to cache after successful resolve
    cache[id] = m;

    // expose as `name`.
    if (name) cache[name] = cache[id];

    return cache[id].exports;
  }

  /**
   * Require all entries exposing them on global if needed.
   */

  for (var id in entries) {
    if (entries[id]) {
      global[entries[id]] = require(id);
    } else {
      require(id);
    }
  }

  /**
   * Duo flag.
   */

  require.duo = true;

  /**
   * Expose cache.
   */

  require.cache = cache;

  /**
   * Expose modules
   */

  require.modules = modules;

  /**
   * Return newest require.
   */

   return require;
})({
1: [function(require, module, exports) {

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

}, {"event":2,"component-event":2}],
2: [function(require, module, exports) {
var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    prefix = bind !== 'addEventListener' ? 'on' : '';

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.bind = function(el, type, fn, capture){
  el[bind](prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.unbind = function(el, type, fn, capture){
  el[unbind](prefix + type, fn, capture || false);
  return fn;
};
}, {}]}, {}, {"1":""}));
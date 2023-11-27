/**
 * @namespace typedefs
 */

/**
 * @callback valueSetter
 * @param {any} value
 *
 *
 * @callback subscriber
 * @param {any} value
 *
 *
 * @typedef {Function} update
 * @param {valueSetter} valueSetter
 * @returns {void}
 *
 *
 * @typedef {Function} get
 * @returns {any}
 *
 *
 * @typedef {Function} subscribe
 * @param {subscriber} valueSubscriber
 * @returns {void}
 *
 *
 * @typedef {Function} set
 * @param {any} value
 * @returns {void}
 *
 * @typedef {Object} justBindStore
 * @property {get} get Returns the current value.
 * @property {set} set Accepts a new value.
 * @property {update} update Accepts a function that returns the new value.
 * @property {subscribe} subscribe Accepts a function that will be called when the value changes.
 */

exports.unused = {};

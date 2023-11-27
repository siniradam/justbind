const typedefs = require("./typedefs");

/**
 * Internal helper function that checks if the document is ready.
 * @param {*} fn
 */
function onReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

/**
 * Creates a reactive variable that can be bound to HTML elements.
 * @param {string} name
 * @param {*} value
 * @returns {typedefs.justBindStore}
 */
function justBind(name, value) {
  const subscribers = [];
  let bindedElements = [];

  /**
   * Captures all elements with the bind attribute.
   */
  function captureElements() {
    bindedElements = document.querySelectorAll(`[bind=${name}]`);
  }

  /**
   * Assigns change listeners to all binded elements.
   */
  function assignChangeListeners() {
    bindedElements.forEach((el) => {
      if (el.nodeName == "INPUT" || el.nodeName == "SELECT") {
        el.addEventListener("input", (a) => {
          value = el.value;

          updateBindedElements();
          updateSubscribers();
        });
      }
    });
  }

  /**
   * Updates all binded HTML elements.
   */
  function updateBindedElements() {
    bindedElements.forEach((el) => {
      el.nodeName == "INPUT" || el.nodeName == "SELECT"
        ? (el.value = value)
        : el.nodeName == "IMG"
        ? (el.src = value)
        : (el.innerHTML = value);
    });
  }

  /**
   * Updates all subscribers.
   */
  function updateSubscribers() {
    // Subscribers
    subscribers.forEach((subscriber) => subscriber(value));
  }

  const methods = {
    /** @type {typedefs.get} */
    get: () => value,

    set: (setValue) => {
      value = setValue;
      updateBindedElements();
    },

    /** @type {typedefs.update} */
    update: (valueSetter) => {
      value = valueSetter(value);

      // Binded Elements
      updateBindedElements();

      //
      updateSubscribers();
    },

    /** @type {typedefs.subscribe} */
    subscribe: (fn) => {
      if (typeof fn == "function") subscribers.push(fn);
    },
  };

  onReady(() => {
    captureElements();
    assignChangeListeners();
    updateBindedElements();
    updateSubscribers();
  });

  return methods;
}

exports.onReady = onReady;
exports.justBind = justBind;

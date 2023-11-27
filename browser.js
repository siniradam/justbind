(function () {
  const dictionary = {};

  const { justBind } = require("./src/justbind");

  // Extract initializer.
  Object.assign(window, { justbind: justBind });
})();

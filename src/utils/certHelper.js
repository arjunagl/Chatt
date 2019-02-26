// eslint-disable-next-line import/no-extraneous-dependencies
const devcert = require('devcert');

(async () => {
  try {
    await devcert.certificateFor('localhost');
  } catch (e) {
    // Deal with the fact the chain failed
  }
})();

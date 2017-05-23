console.log("process.env.CLIENT_SIDE..................", process.env.CLIENT_SIDE);

if (process.env.CLIENT_SIDE) {
  module.exports = require('./client');
} else {
  module.exports = require('./server');
}

console.log("process.env.CLIENT_SIDE..................", process.env.CLIENT_SIDE);

if (process.env.CLIENT_SIDE) {
  console.log("client side");
  module.exports = require('./client');
} else {
  console.log("server side");
  module.exports = require('./server');
}

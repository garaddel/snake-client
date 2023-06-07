const net = require("net");
const { connect } = require("./client.js");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  stdin.on("data", handleUserInput);
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {
  if (key === '\u0003') {
    process.exit();
  }
};
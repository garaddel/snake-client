const { connect } = require("./client.js");
const { setupInput } = require("./input.js");

console.log("Connecting ...");
const conn = connect();

setupInput(conn);

// setup interface to handle user input from stdin

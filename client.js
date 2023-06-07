const net = require("net");
const { IP, PORT } = require("./constants.js");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event listener for data
  conn.on("data", (data) => {
    console.log("Received data:", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: DEL");
    //conn.write("Move: up");
  });

  return conn;
};

module.exports = { connect };
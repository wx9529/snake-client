const net = require("net");
const {IP,PORT} = require('./constants')
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  console.log("Connecting ...");
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Connection established");
    console.log("Writting message to server ");
    conn.write("Name: wxx");
  });

  conn.on("data", (data) => {
    console.log("data: ", data);
  });

  return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = { connect };

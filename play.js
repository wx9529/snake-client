const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });
  console.log("Connecting ...");
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Connection established");
    console.log("Writting message to server ");
    conn.write("Name: wxx");
    console.log("Sending instructions");
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 2050);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 2000);
    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, 2100);
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 2150);
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });
  conn.on("data", (data) => {
    console.log("data: ", data);
  });

  return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = { connect };

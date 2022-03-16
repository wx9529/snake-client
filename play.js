const net = require("net");
const { stdin } = require("process");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });
  console.log("Connecting ...");
  // interpret incoming data as text

  const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    const handleUserInput = function (key) {
      if (key === "\u0003") {
        process.exit();
      }
    };
    return stdin;
  };
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Connection established");
    console.log("Writting message to server ");
    conn.write("Name: wxx");
    // // console.log("Sending instructions");
    // console.log("Enter input");
    // const stdin = setupInput();
    // stdin.on('data',)
  });

  conn.on("data", (data) => {
    console.log("data: ", data);
  });

  return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = { connect };

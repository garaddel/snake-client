const handleUserInput = (key, conn) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    console.log("Move: up");
    conn.write("Move: up");
  } else if (key === 'a') {
    console.log("Move: left");
    conn.write("Move: left");
  } else if (key === 's') {
    console.log("Move: down");
    conn.write("Move: down");
  } else if (key === 'd') {
    console.log("Move: right");
    conn.write("Move: right");
  }
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    handleUserInput(key, conn);
  });

  return stdin;
};

module.exports = { setupInput };
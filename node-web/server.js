const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  res.end("hello world\n");
});

server.listen(3000);
console.log("Servidor en la url http://localhost:3000");

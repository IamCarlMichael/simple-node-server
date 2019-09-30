const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  //   console.log("request", req);
  //   console.log("respond", res);
  console.log("METHOD", req.method);
  console.log("Path", req.url);
  //   console.log(req);
  console.log("connected to the server");
  if (req.url === "/books" && req.method === "GET") {
    res.end("Here are the books");
  } else if (req.url === "/books" && req.method === "POST") {
    res.end("You have created a new book:)");
  } else {
    res.end("Thank you for visiting the server, hope to see you again :)");
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server is now listening on PORT ", PORT);
});

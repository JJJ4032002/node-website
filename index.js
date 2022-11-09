const http = require("http");
const fs = require("fs/promises");
const hostname = "127.0.0.1";
const port = 8080;
async function ChangeContent(res, filename) {
  let content = await fs.readFile(filename, "utf8");
  res.end(content);
}
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    ChangeContent(res, "./index.html");
  } else if (req.url === "/about") {
    ChangeContent(res, "./about.html");
  } else if (req.url === "/contact-me") {
    ChangeContent(res, "./contact-me.html");
  } else {
    ChangeContent(res, "./404.html");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

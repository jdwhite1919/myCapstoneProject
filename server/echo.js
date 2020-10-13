const server = http.createServer((request, response) =>
{
  if (request.url == "/") {
    response.writeHead(200, { "Content-Type"})
  }
});
server.listen(4040);
console.log(`Listening on Port: ${4040}`);

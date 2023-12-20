// Create a web server with node.js that returns a list of comments
// from a database in JSON format

// Import node.js modules
var http = require("http");
var comments = require("./data/comments.json");

// Create a server that returns a list of comments
http.createServer(function(req, res) {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response body "Hello World"
    res.end(JSON.stringify(comments));
}).listen(8081);

// Print URL for accessing server
// from the database in JSON format
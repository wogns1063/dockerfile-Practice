var express = require('express');
var app = express();
const os = require('os');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send(os.cpus());
});


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});


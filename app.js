const express = require("express");
const app = express();
// app.use(express.static(__dirname));

const port = process.env.PORT || 80;

// use when you are using css and js in index.html
// app.use(express.static("public/"));
app.use(express.static(__dirname + '/public'));

  

app.listen(port);
console.log('Server started at http://localhost:' + port);
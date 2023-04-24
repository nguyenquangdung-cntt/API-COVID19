const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.port || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    fs.readFile('./public/html/testFetch.html','utf-8',function (err,data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        console.log(err);
        res.end(data); 
    });
});

app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
});
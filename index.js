const { request } = require('express');
const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    let html;

    fs.readFile('./posts/post.html', 'utf8' , (err, data) => {
        if (err) {
            req.writeHead(404);
        }
        else{
            html = data;
            res.setHeader('Content-Type', 'text/html');
        }
        res.send(html);
      });
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
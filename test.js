var express = require('express');
var app = express();

app.get('/.well-known/acme-challenge/G7qcWZC4vGfTgW9Ub3VkiwPJIjmzD-RDSgMAdgacGrE', (req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('G7qcWZC4vGfTgW9Ub3VkiwPJIjmzD-RDSgMAdgacGrE.1lwd44w6FY7eT04-IEt10Z5zj4goRNd-YnMYk2QWTI8');
    res.end();
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
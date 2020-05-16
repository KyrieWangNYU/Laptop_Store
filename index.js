const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {

    const pathName = url.parse(req.url, true).pathname;
    const query = url.parse(req.url, true).query;
    const id = url.parse(req.url, true).query.id;

    console.log(url.parse(req.url, true));

    if (pathName === '/products' || pathName === '/'){
        res.writeHead(200, { 'Content-type': 'text/html'});
        res.end('This is product page');
    }else if (pathName === '/laptop' && id < laptopData.length){
        res.writeHead(200, { 'Content-type': 'text/html'});
        res.end(`This is laptop page for laptop ${id}`);
    }else{
        res.writeHead(404, { 'Content-type': 'text/html'});
        res.end('This is not the correct page');
    }

    
});

server.listen(1337, '127.0.0.1', () => {
    console.log('Listenging for requests now');
})
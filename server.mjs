import { createServer } from 'node:http';

const server = createServer((req, res) => {
	console.log(req.method, req.url);

	// req('GET', 200)
	res.end('Maintenance Alert API is running!!!');
});
server.listen(3000, '127.0.0.1');

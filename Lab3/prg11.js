import http from 'http';

const server = http.createServer((req, res) => {

    // Home Page
    if (req.url === '/' && req.method === 'GET') {
        res.end('Home Page');
    }

    // Get all products
    else if (req.url === '/product' && req.method === 'GET') {

        const products = [
            {
                id: 1,
                name: 'Mobile',
                price: 100
            },
            {
                id: 2,
                name: 'Tablet',
                price: 200
            }
        ];

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(products));
    }

    // Get a single product
    else if (req.url.startsWith('/product/') && req.method === 'GET') {
        res.end('Show product');
    }

    // Add product
    else if (req.url === '/product' && req.method === 'POST') {
        // retrieve data from client
        let body = '';
        req.on('data', chunk => {
            body = chunk;
        });
        req.on('end', () => {
            const product = JSON.parse(body);
        });

        // add data to database
        res.writeHead(201, { 'Content-Type': 'application/json' });


        
        // send back status of operation


        res.end('Add product');
    }

    // Update product
    else if (req.url.startsWith('/product/') && req.method === 'PUT') {
        res.end('Update quantity');
    }

    // Delete product
    else if (req.url.startsWith('/product/') && req.method === 'DELETE') {
        res.end('Remove product');
    }

    // Invalid route
    else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Program 11 is running on port 3000...');
});
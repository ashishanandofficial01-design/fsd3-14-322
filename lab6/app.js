import express from 'express';
import { products } from './data.js';   
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1>');
});
app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((item) => item.id === (id));
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }           
    else{
        res.status(200).json(product);
    }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
   
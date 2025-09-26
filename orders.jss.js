const express = require('express');
const router = express.Router();

// In-memory order store (replace with DB in production)
let orders = [];

// Get all orders
router.get('/', (req, res) => {
  res.json(orders);
});

// Create a new order
router.post('/', (req, res) => {
  const order = req.body;
  order.id = orders.length + 1;
  orders.push(order);
  res.status(201).json(order);
});

// Get order by ID
router.get('/:id', (req, res) => {
  const order = orders.find(o => o.id == req.params.id);
  if (order) res.json(order);
  else res.status(404).json({ error: 'Order not found' });
});

module.exports = router;

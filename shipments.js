const express = require('express');
const router = express.Router();

// In-memory shipment store (replace with DB in production)
let shipments = [];

// Get all shipments
router.get('/', (req, res) => {
  res.json(shipments);
});

// Create a new shipment
router.post('/', (req, res) => {
  const shipment = req.body;
  shipment.id = shipments.length + 1;
  shipments.push(shipment);
  res.status(201).json(shipment);
});

// Get shipment by ID
router.get('/:id', (req, res) => {
  const shipment = shipments.find(s => s.id == req.params.id);
  if (shipment) res.json(shipment);
  else res.status(404).json({ error: 'Shipment not found' });
});

module.exports = router;


const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Calculator logic
app.post('/calculate', (req, res) => {
  const { expression } = req.body;
  try {
    const result = Function(`"use strict"; return (${expression})`)();
    res.json({ result });
  } catch (error) {
    res.status(400).json({ result: 'Invalid Expression' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

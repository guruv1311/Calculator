
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Calculator logic route
app.post('/calculate', (req, res) => {
  const { expression } = req.body;
  try {
    // Use Function constructor instead of eval for a bit more safety
    const result = Function(`"use strict"; return (${expression})`)();
    res.json({ result });
  } catch (error) {
    console.error('Calculation error:', error);
    res.status(400).json({ result: 'Invalid Expression' });
  }
});

app.listen(PORT, () => {
  console.log(`Calculator server running on http://localhost:${PORT}`);
});

// app.js
const express = require('express');
const path = require('path');

const app = express();
const port = 2022; // You can change this port if needed

app.get('/', (req, res) => {
    res.redirect('https://tryoutchemicalistronic.site/')
  });

app.get('/kwitansi', (req, res) => {
    res.redirect('https://drive.google.com/drive/folders/1imDQ-bx6LvIgkZFH8U4JD46w7BVs2Bjp?usp=sharing');
    });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

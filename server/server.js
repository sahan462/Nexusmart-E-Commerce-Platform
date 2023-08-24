const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Simulated in-memory storage for demonstration purposes
const database = [];

app.post('/api/save-address', (req, res) => {
    const addressData = req.body;
    // Save addressData to the database (or perform any database operation)
    database.push(addressData);
    res.status(200).json({ message: 'Address data saved successfully.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

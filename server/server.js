require('dotenv').config();
const express = require('express');
const cors = require('cors');
const auth = require('./routes/v1/auth');
require('./dbconnect'); // Ensure this file establishes the database connection

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/v1', auth); // Prefix the routes with /api/v1


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

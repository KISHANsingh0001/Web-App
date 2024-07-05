require('dotenv').config();
const express = require('express');
const cors = require('cors');
const auth = require('./routes/v1/auth');
const assessment = require('./routes/v1/assessment');

require('./dbconnect'); // Ensure this file establishes the database connection

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/v1', auth); // Prefix the routes with /api/v1
app.use('/api/v1', assessment);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

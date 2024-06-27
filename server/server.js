require('dotenv').config();
const express = require('express');
const app = express();
const assessmentRouter = require('./routes/assessment');
const port = process.env.PORT

app.use(express.json()); 

app.use(assessmentRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
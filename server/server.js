require('dotenv').config();
const express = require('express');
const app = express();
const assessmentRouter = require('./routes/v1/assessment');
const auth = require('./routes/v1/auth');
const port = process.env.PORT


app.use(express.json()); 

app.use(assessmentRouter);
app.use(auth);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
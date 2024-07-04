require('dotenv').config();
const express = require('express');
const app = express();


app.use(express.json()); 

app.use(assessmentRouter);
app.use(auth);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
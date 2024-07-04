require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const assessmentRouter = require('./routes/v1/assessment');
const auth = require('./routes/v1/auth');
const formalDiagnosis = require('./routes/v1/formalDiagnosis');
const consultation = require('./routes/v1/consultation');
const therapy = require('./routes/v1/therapy');
const port = process.env.PORT
const db_url = process.env.MONGO_URL;


app.use(express.json());

app.use(assessmentRouter);
app.use(auth);
app.use(formalDiagnosis);
app.use(consultation);
app.use(therapy);


mongoose.connect(db_url).then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
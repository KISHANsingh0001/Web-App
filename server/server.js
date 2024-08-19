import express from 'express'
import cors from 'cors'
import auth from './routes/auth.js'
import assessment from './routes/assessment.js'
import admin from './routes/adminauth.js'
import consultation from './routes/consultation.js'
import formalDiagnosis from './routes/formalDiagnosis.js'
import './dbconnect.js'
import dotenv from 'dotenv';
import Diagnosis from './routes/diagnosis.js';
dotenv.config(); 


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/', auth); 
app.use('/api/', assessment);
app.use('/api/admin', admin)
app.use('/api/',consultation)
app.use('/api/', Diagnosis);
app.use("/",formalDiagnosis)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

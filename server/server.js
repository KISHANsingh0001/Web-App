import express from 'express'
import cors from 'cors'
import auth from './routes/auth.js'
import assessment from './routes/assessment.js'
import admin from './routes/adminauth.js'
import consultation from './routes/consultation.js'
import formalDiagnosis from './routes/formalDiagnosis.js'
import './dbconnect.js'
import dotenv from 'dotenv';
<<<<<<< HEAD
import Diagnosis from './routes/diagnosis.js';
=======
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); //
const __dirname = path.dirname(__filename); //

>>>>>>> 5e00446987c3e76d19cdb226fdc40001a43b25d3
dotenv.config(); 


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist"));
});

app.use('/api/', auth); 
app.use('/api/', assessment);
app.use('/api/admin', admin)

app.use('/api/',consultation)
<<<<<<< HEAD
app.use('/api/', Diagnosis);
app.use("/",formalDiagnosis)
=======


>>>>>>> 5e00446987c3e76d19cdb226fdc40001a43b25d3
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

import express from 'express';
import diagnosisSchema from '../models/diagnosisSchema.js'

const router = express.Router();

// Route to save the diagnosis
router.post('/saveDiagnosis', async (req, res) => {
    const { email, diagnosis, selectedOption } = req.body;
    try {
      const existingDiagnosis = await diagnosisSchema.findOne({ email });
      if (existingDiagnosis) {
        existingDiagnosis.diagnosis = diagnosis;
        existingDiagnosis.selectedOption = selectedOption;
        await existingDiagnosis.save();
      } else {
        const newDiagnosis = new diagnosisSchema({ email, diagnosis, selectedOption });
        await newDiagnosis.save();
      }
      res.status(200).json({ message: 'Diagnosis saved successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving diagnosis', error });
    }
  });

// Route to get the diagnosis for a user
router.get('/getDiagnosis', async (req, res) => {
    const { email } = req.query;
    console.log('Received email:', email); // Debug log
    try {
      const diagnosis = await diagnosisSchema.findOne({ email });
      if (diagnosis) {
        res.status(200).json({
          diagnosis: diagnosis.diagnosis,
          selectedOption: diagnosis.selectedOption
        });
      } else {
        res.status(404).json({ message: 'No diagnosis found for this user' });
      }
    } catch (error) {
      console.error('Error fetching diagnosis:', error); // Debug log
      res.status(500).json({ message: 'Error fetching diagnosis', error });
    }
  });
  router.post('/saveDiagnosis/:email', async (req, res) => {
    const email = req.params.email;
    const { diagnosis, selectedOption } = req.body;
  
    try {
      const existingDiagnosis = await diagnosisSchema.findOne({ email });
      if (existingDiagnosis) {
        existingDiagnosis.diagnosis = diagnosis;
        existingDiagnosis.selectedOption = selectedOption;
        await existingDiagnosis.save();
      } else {
        const newDiagnosis = new diagnosisSchema({ email, diagnosis, selectedOption });
        await newDiagnosis.save();
      }
      res.status(200).json({ message: 'Diagnosis saved successfully' });
    } catch (error) {
      console.error('Error saving diagnosis:', error);
      res.status(500).json({ message: 'Error saving diagnosis', error });
    }
  });

export default router;

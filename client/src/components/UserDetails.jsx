import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import axios from 'axios';

const UserDetails = ({ user, onClose }) => {
  const [selectedDiagnosis, setSelectedDiagnosis] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [step, setStep] = useState(1); // Added to handle step 1 and step 2

  useEffect(() => {
    // Fetch the existing diagnosis details for the user
    const fetchDiagnosis = async () => {
      try {
        const response = await axios.get(`/api/getDiagnosis?email=${user.email}`);
        if (response.data) {
          setSelectedDiagnosis(response.data.diagnosis);
          setSelectedOption(response.data.selectedOption);
          if (response.data.diagnosis === 'Formal Diagnosis') {
            setStep(2); // Move to step 2 if Formal Diagnosis is selected
          }
        }
      } catch (error) {
        console.error('Error fetching diagnosis:', error);
      }
    };

    fetchDiagnosis();
  }, [user.email]);

  const handleSave = async () => {
    try {
      await axios.post(`/api/saveDiagnosis/${user.email}`, {
        email: user.email,
        diagnosis: selectedDiagnosis,
        selectedOption,
      });
      if (selectedDiagnosis === 'Formal Diagnosis') {
        setStep(2);
      } else {
        onClose();
      }
    } catch (error) {
      console.error('Error saving diagnosis:', error);
    }
  };

  const renderOptions = () => {
    if (selectedDiagnosis === 'Therapy') {
      return (
        <div className="mb-4">
          <strong>Select Therapy Option:</strong>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                value="Autism"
                checked={selectedOption === 'Autism'}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              Autism
            </label>
            <label>
              <input
                type="radio"
                value="ADHD"
                checked={selectedOption === 'ADHD'}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              ADHD
            </label>
            <label>
              <input
                type="radio"
                value="LD"
                checked={selectedOption === 'LD'}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              LD
            </label>
          </div>
        </div>
      );
    } else if (selectedDiagnosis === 'Training Program') {
      return (
        <div className="mb-4">
          <strong>Select Training Program Option:</strong>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                value="Program A"
                checked={selectedOption === 'Program A'}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              Program A
            </label>
            <label>
              <input
                type="radio"
                value="Program B"
                checked={selectedOption === 'Program B'}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              Program B
            </label>
            <label>
              <input
                type="radio"
                value="Program C"
                checked={selectedOption === 'Program C'}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              Program C
            </label>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">User Details</h2>

        <div className="mb-4">
          <strong>Email: </strong>{user.email}
        </div>
        <div className="mb-4">
          <strong>Date: </strong>{user.date}
        </div>
        <div className="mb-4">
          <strong>Time Slot: </strong>{user.timeSlot}
        </div>
        <div className="mb-4">
          <strong>Mode: </strong>{user.mode}
        </div>
        <div className="mb-4">
          <strong>Result: </strong>{user.result}
        </div>

        {step === 1 && (
          <>
            <div className="mb-4">
              <strong>Select Diagnosis:</strong>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    value="Therapy"
                    checked={selectedDiagnosis === 'Therapy'}
                    onChange={(e) => {
                      setSelectedDiagnosis(e.target.value);
                      setSelectedOption('');
                    }}
                  />
                  Therapy
                </label>
                <label>
                  <input
                    type="radio"
                    value="Training Program"
                    checked={selectedDiagnosis === 'Training Program'}
                    onChange={(e) => {
                      setSelectedDiagnosis(e.target.value);
                      setSelectedOption('');
                    }}
                  />
                  Training Program
                </label>
                <label>
                  <input
                    type="radio"
                    value="Formal Diagnosis"
                    checked={selectedDiagnosis === 'Formal Diagnosis'}
                    onChange={(e) => {
                      setSelectedDiagnosis(e.target.value);
                      setSelectedOption('');
                    }}
                  />
                  Formal Diagnosis
                </label>
              </div>
            </div>
            {renderOptions()}
          </>
        )}

        {step === 2 && (
          <div className="mb-4">
            <strong>Step 2: Diagnosis Details</strong>
            {/* Fetch the date and time slot details here and display them */}
            <p>Please wait! Request is sent to the user. Check back later for details.</p>
            {/* Example placeholder for fetched data */}
            <div className="mt-4">
              <strong>Date: </strong> {user.date || 'N/A'}
              <br />
              <strong>Time Slot: </strong> {user.timeSlot || 'N/A'}
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <button
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded flex items-center"
            onClick={handleSave}
          >
            <FaCheck className="mr-2" /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

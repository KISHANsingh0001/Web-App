// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
const QUESTIONS_PER_PAGE = 5;

const Assessment = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const newid = id.replace(/:/g, '');
  const token = localStorage.getItem('token');
  
  useEffect(() => {
    fetchQuestions(newid);
  }, [newid]);

  const fetchQuestions = (test) => {

    fetch(`http://localhost:3000/api/assessment?test=${test}`)
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
        setResponses(new Array(data.length).fill(""));
      })
      .catch(error => console.error("Error fetching questions:", error));
  };

  const handleOptionChange = (questionIndex, option) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = option;
    setResponses(newResponses);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    

    fetch(`http://localhost:3000/api/assessment?test=${newid}`, {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ responses })
    })
      .then(response => response.json())
      .then(data => {
        setResult(data.prediction);
      })
      .catch(error => {
        console.error("Error:", error);
        setError("Failed to submit assessment.");
      })
      .finally(() => {
        setResponses(new Array(questions.length).fill("")); // Reset responses
      });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  useEffect(() => {
    if (result) {
      localStorage.setItem("result", result);
    }
  }, [result]);
  const startIndex = currentPage * QUESTIONS_PER_PAGE;
  const currentQuestions = questions.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);

  return (
    <div className="App p-8 max-w-3xl mx-auto bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-6 text-center">Assessment Questionnaire</h1>
      {error && <p className="text-red-500">{error}</p>}
      {result === null ? (
        <form onSubmit={handleSubmit}>
          {currentQuestions.map((question, index) => (
            <div key={question.Qid} className="mb-6">
              <label className="block text-lg font-medium mb-2">{question.Question}</label>
              <div>
                {question.Options.map((option, optionIndex) => (
                  <label key={optionIndex} className="block">
                    <input
                      type="radio"
                      name={`question-${startIndex + index}`}
                      value={option}
                      checked={responses[startIndex + index] === option}
                      onChange={() => handleOptionChange(startIndex + index, option)}
                      className="mr-2"
                      required
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            {currentPage > 0 && (
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Previous
              </button>
            )}
            {startIndex + QUESTIONS_PER_PAGE < questions.length && (
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto"
              >
                Next
              </button>
            )}
          </div>
          {startIndex + QUESTIONS_PER_PAGE >= questions.length && (
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Submit
            </button>
          )}
        </form>
      ) : (
        <div className="result text-center">
          <h2 className="text-xl font-bold mt-6">Prediction Result</h2>
          <p className="text-lg mt-4">{result}</p>
        </div>
      )}
      <div>
        <Link to="/bookconsultation">
        <button> Book Consultation</button>
        </Link>
      </div>
    </div>
  );
};

export default Assessment;

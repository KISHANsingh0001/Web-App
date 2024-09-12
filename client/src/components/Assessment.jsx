import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import AuthPopUp from './AuthPopUp';

const QUESTIONS_PER_PAGE = 5;

const Assessment = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const { id } = useParams();
  const newid = id.replace(/:/g, '');
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions(newid);
  }, [newid]);

  const fetchQuestions = (test) => {
    fetch(`https://leeza.app/api/assessment?test=${test}`)
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
        setResponses(new Array(data.length).fill(''));
      })
      .catch(error => console.error('Error fetching questions:', error));
  };

  const handleOptionChange = (questionIndex, option) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = option;
    setResponses(newResponses);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    
    if (!token) {
      // Show login popup if user is not logged in
      setShowLoginPopup(true);
    } else {
      // Submit the assessment if logged in
      submitAssessment(token);
    }
  };

  const submitAssessment = (token) => {
    fetch(`https://leeza.app/api/assessment?test=${newid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ responses }),
    })
      .then(response => {
        if (response.status === 403) {
          setError('Your session has expired or you are not authorized. Please log in again.');
          setShowLoginPopup(true);  // Show login popup if forbidden
          return Promise.reject('Forbidden: Token expired or invalid.');
        }
        if (!response.ok) {
          return Promise.reject('Error submitting assessment: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        setResult(data.prediction);
        localStorage.setItem('result', data.prediction); // Store the result in localStorage
      })
      .catch(error => {
        console.error(error);
        setError('Failed to submit assessment.');
      });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleLoginSuccess = () => {
    const token = localStorage.getItem('token');
    setShowLoginPopup(false);
    if (token) {
      submitAssessment(token);  // After login, submit the assessment
    }
  };

  const startIndex = currentPage * QUESTIONS_PER_PAGE;
  const currentQuestions = questions.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);

  return (
    <div className="App p-8 max-w-3xl mx-auto bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-6 text-center">Assessment Questionnaire</h1>
      {error && <p className="text-red-500">{error}</p>}
      {result === null ? (
        <form onSubmit={handleSubmit}>
          {currentQuestions.map((question, index) => (
            <div
              key={question.Qid}
              className="mb-6 p-6 bg-white border border-gray-300 shadow-lg rounded-lg"
            >
              <label className="block text-lg font-medium mb-4 text-center">{question.Question}</label>
              <div className="flex flex-col items-center space-y-4">
                {question.Options.map((option, optionIndex) => (
                  <div key={optionIndex} className="min-w-[150px] w-full flex justify-center">
                    <input
                      type="radio"
                      id={`question-${startIndex + index}-${optionIndex}`}
                      name={`question-${startIndex + index}`}
                      value={option}
                      checked={responses[startIndex + index] === option}
                      onChange={() => handleOptionChange(startIndex + index, option)}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor={`question-${startIndex + index}-${optionIndex}`}
                      className={`flex items-center justify-center h-14 text-center bg-white border-2 border-gray-200 rounded-lg cursor-pointer shadow-md w-64
                      peer-hover:border-green-500 peer-hover:bg-green-50
                      peer-checked:bg-green-600 peer-checked:border-green-600 peer-checked:text-white
                      transition-all duration-200`}
                    >
                      <div className="text-lg font-semibold capitalize">{option}</div>
                    </label>
                  </div>
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
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4 text-lg md:text-xl w-full md:w-auto max-w-xs md:max-w-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          )}
        </form>
      ) : (
        <div className="result text-center mt-6 p-6 bg-white border border-gray-300 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold">Prediction Result</h2>
          <p className="text-lg mt-4">{result}</p>
        </div>
      )}
      <div className="text-center mt-8">
        <p className="text-lg font-medium mb-4">
          If you are willing to take the next step in your journey, book a consultation with our experts. We offer a wide range of services to help you with autism-related needs.
        </p>
        <Link to="/bookconsultation">
          <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700">
            Book Consultation
          </button>
        </Link>
      </div>
      {showLoginPopup && <AuthPopUp onSuccess={handleLoginSuccess} />} {/* Show login popup */}
    </div>
  );
};

export default Assessment;

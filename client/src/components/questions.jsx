
const questions = [
  {
    id: 1,
    text: "I prefer to do things on my own, rather than with others.",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 2,
    text: "I prefer doing things the same way - for instance my morning routine or trip to the supermarket",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 3,
    text: "I find myself becoming strongly absorbed in something – even obsessional",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 4,
    text: "I am very sensitive to noise and will wear earplugs or cover my ears in certain situations",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 5,
    text: "Sometimes people say I am being rude, even though I think I am being polite.",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 6,
    text: "I find it easy to imagine what characters from a book might look like.",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 7,
    text: "I find it easy to talk in groups of people",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 8,
    text: "I am more interested in finding out about ‘things’ than people",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 9,
    text: "I find numbers, dates and strings of information fascinating",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 10,
    text: "I prefer non-fiction books and films to fiction",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 11,
    text: "I find it upsetting if my daily routine is upset or changed",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 12,
    text: "It’s difficult for me to understand other people’s facial expression and body language",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 13,
    text: "I don’t have any problems making small talk with new people",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 14,
    text: "I notice very small changes in a person’s appearance",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 15,
    text: "When I was young I used to play lots of ‘let’s pretend’ or imaginary games",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 16,
    text: "I like collecting information about things I am interested in",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 17,
    text: "I like meeting new people",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 18,
    text: "People close to me say I talk about the same things repeatedly",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 19,
    text: "I find it easy to work out what people are thinking or feeling just by looking at their facial expressions",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 20,
    text: "New social situations make me feel anxious",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 21,
    text: "It’s important to me to carefully plan any activities I am going to do",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 22,
    text: "I find it hard to work out what people’s intentions are",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 23,
    text: "I would find it really hard to play imaginary games with children",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 24,
    text: "I am a good diplomat and can help ease difficult social or work situations",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 25,
    text: "I am often the last person to understand a joke",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 26,
    text: "I like doing things spontaneously",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 27,
    text: "If I am interrupted doing something I find it hard to get back to what I was doing before hand",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 28,
    text: "I notice patterns in things all the time",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 29,
    text: "I have some very strong interests and get upset if I can’t pursue them",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  {
    id: 30,
    text: "I can tell if someone I am talking to is getting bored",
    options: [
      "Definitely Agree",
      "Slightly Agree",
      "Slightly Disagree",
      "Definitely Disagree",
    ],
  },
  // Add more questions as needed
];
import React, { useState } from 'react';
function Questions() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [progress, setProgress] = useState(0);
  
    const handleAnswerClick = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
            setProgress((prev) => prev + 100 / questions.length);
          } else {
            setProgress(100);
          }
    };
    function resetFun(){
        setCurrentQuestion(0);
        setProgress(0);
    }
  
    const QuestionContent = ({ question }) => (
      <div className="w-full">
        <div className='flex justify-center'>
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6 font-serif">
            Question {currentQuestion + 1}
          </h1>
        </div>
        <div className='flex justify-center'>
          <p className="text-lg md:text-xl text-gray-700 mb-8 text-center">
            {question.text}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-between p-1 ">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={handleAnswerClick}
              className="flex-1 p-4 text-lg rounded-xl transition-all duration-200 hover:scale-105
                bg-white border-2 border-purple-200 hover:border-purple-400 
                text-stateSkyblue hover:bg-purple-50 shadow-sm hover:shadow-md
                whitespace-nowrap"
            >
              {option}
            </button>
          ))}
        </div>
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-statePurple">
              <span className="text-sm font-medium m-1 font-serif">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-purple-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <span className='m-2 p-2 flex justify-center items-center'>
            <button className='border p-2 bg-blue-100 rounded-md' onClick={resetFun}>Reset Progress</button>
        </span>
      </div>
    );
  
    return (
      <div className=" bg-slate-50 flex  justify-center p-4">
        <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl p-8 m-8">
          <div className="mb-8 relative overflow-hidden">
            <QuestionContent question={questions[currentQuestion]} />
          </div>
        </div>
      </div>
    );
  }
export default Questions;

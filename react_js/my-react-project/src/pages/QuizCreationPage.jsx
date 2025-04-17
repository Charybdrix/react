import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

function QuizCreationPage() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({ A: '', B: '', C: '', D: '' });
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !question ||
      !correctAnswer ||
      Object.values(options).some((opt) => !opt)
    ) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const quizResponse = await axios.post('http://localhost:5001/api/Quiz', {
        question: question,
      });

      const quizId = quizResponse.data.quizId;

      await Promise.all(
        Object.keys(options).map((key) =>
          axios.post('http://localhost:5001/api/Answer', {
            option: options[key],
            is_True: key === correctAnswer,
            quizId: quizId,
          })
        )
      );

      alert('Try create');
      setQuestion('');
      setOptions({ A: '', B: '', C: '', D: '' });
      setCorrectAnswer('');
    } catch (error) {
      console.error('Error submitting quiz:', error);
      alert('Failed to create quiz');
    }
  };

  return (
    <>
      <nav className="bg-pink-400 p-9 rounded-lg shadow">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <a href="\">
              <FontAwesomeIcon icon={faHouse} />
            </a>
          </div>
          <div className="space-x-6">
            <a
              href="\create"
              className="text-gray-300 hover:text-white text-2xl font-sans"
            >
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </a>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-6">
        <h1 className="font-sans text-pink-500 text-5xl mb-6">Create a Quiz</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
          <input
            id="question"
            type="text"
            placeholder="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="border-2 border-pink-500 rounded-md p-4 w-full focus:border-pink-800 focus:outline-none mb-4"
          />

          {['A', 'B', 'C', 'D'].map((option) => (
            <div
              key={option}
              className="flex items-center space-x-2 mb-3"
            >
              <input
                id={option}
                type="text"
                placeholder={`Option ${option}`}
                value={options[option]}
                onChange={handleInputChange}
                className="border-2 border-pink-500 p-4 w-full focus:border-pink-800 focus:outline-none"
              />
              <input
                type="radio"
                name="correctAnswer"
                value={option}
                checked={correctAnswer === option}
                onChange={() => setCorrectAnswer(option)}
                className="w-5 h-5 accent-pink-500"
              />
            </div>
          ))}

          <button
            onClick={handleSubmit}
            className="bg-pink-400 font-serif text-white text-2xl font-bold py-4 px-8 rounded-lg shadow-xl hover:bg-pink-800 w-full mt-4"
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}

export default QuizCreationPage;

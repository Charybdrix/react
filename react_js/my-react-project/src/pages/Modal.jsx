import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Modal({ closeModal, onQuizSubmit }) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({ A: '', B: '', C: '', D: '' });
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

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

      const quizData = {
        question,
        options: Object.keys(options).map((key) => ({
          option: key,
          text: options[key],
          isTrue: key === correctAnswer,
        })),
      };

      alert('Question and Answers Created Successfully!');
      closeModal();
      onQuizSubmit(quizData);
    } catch (error) {
      console.error('Error submitting quiz:', error);
      alert('Failed to create quiz');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-pink-100 bg-opacity-30 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          Close
        </button>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-center">
            <h1 className="font-sans text-pink-500 text-5xl">Create</h1>
          </div>

          <hr className="border-pink-500" />

          <div>
            <input
              id="question"
              type="text"
              placeholder="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="border-2 border-pink-500 rounded-md p-4 w-full focus:border-pink-800 focus:outline-none"
            />
          </div>

          {['A', 'B', 'C', 'D'].map((option) => (
            <div
              key={option}
              className="flex items-center space-x-2"
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

          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-pink-400 font-serif text-white text-3xl font-bold py-5 px-10 rounded-lg shadow-2xl shadow-pink-500/50 hover:bg-pink-800"
              disabled={loading}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onQuizSubmit: PropTypes.func.isRequired,
};

export default Modal;

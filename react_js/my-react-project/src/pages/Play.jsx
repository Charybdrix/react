import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Play() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/Quiz');
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };
    fetchQuizzes();
  }, []);

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

      <div className="flex items-center justify-center min-h-screen bg-pink-100">
        <div className="flex flex-col space-y-4 w-full max-w-lg">
          <div className="flex justify-center">
            <h1 className="font-sans text-pink-500 text-5xl">Quiz</h1>
          </div>

          <hr className="border-pink-500" />

          {quizzes.length > 0 ? (
            quizzes.map((quiz) => (
              //   <div
              //     key={quiz.quizId}
              //     className="mb-6 p-4 border border-pink-500 rounded-lg"
              //   ></div>
              <div
                key={quiz.quizId}
                className="mb-6 p-4 border border-pink-500 rounded-lg"
              >
                <p className="text-lg font-semibold">{quiz.question}</p>
                <ul className="mt-2">
                  {quiz.answers?.map((answer) => (
                    <li
                      key={answer.answerId}
                      className="mt-1"
                    >
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={`quiz-${quiz.quizId}`}
                          value={answer.answerId}
                          className=" accent-pink-500"
                        />
                        <p>{answer.option}</p>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No quizzes available.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Play;

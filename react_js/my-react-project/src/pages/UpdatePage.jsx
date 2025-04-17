import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdatePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { quizId, question: initialQuestion } = location.state || {};

  const [question, setQuestion] = useState(initialQuestion || '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!quizId) {
      navigate('/create'); // Redirect if no quiz ID is provided
    }
  }, [quizId, navigate]);

  const handleUpdate = async () => {
    if (!question.trim()) {
      alert('Question cannot be empty');
      return;
    }

    setLoading(true);
    try {
      await axios.put(`http://localhost:5001/api/Quiz/${quizId}`, {
        question,
      });

      alert('Test update');
      navigate('/create'); // Redirect back to quiz list after update
    } catch (error) {
      console.error('Error updating quiz:', error);
      alert('Failed to update quiz');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-6">
      <h1 className="font-sans text-pink-500 text-5xl mb-6">Update Quiz</h1>

      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Updated Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border-2 border-pink-500 rounded-md p-4 w-full focus:border-pink-800 focus:outline-none mb-4"
        />

        <button
          onClick={handleUpdate}
          className="bg-pink-400 font-serif text-white text-2xl font-bold py-4 px-8 rounded-lg shadow-xl hover:bg-pink-800 w-full mt-4"
          disabled={loading}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default UpdatePage;

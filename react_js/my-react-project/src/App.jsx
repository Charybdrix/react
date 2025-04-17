import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Create from './pages/Create';
import Update from './pages/Update';
import Play from './pages/Play';
import QuizCreationPage from './pages/QuizCreationPage';
import UpdatePage from './pages/UpdatePage';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="quiz"
            element={<Quiz />}
          />
          <Route
            path="create"
            element={<Create />}
          />
          <Route
            path="update"
            element={<Update />}
          />
          <Route
            path="play"
            element={<Play />}
          />
          <Route
            path="quizCreate"
            element={<QuizCreationPage />}
          />
          <Route
            path="quizUpdate"
            element={<UpdatePage />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

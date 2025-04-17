import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
function Quiz() {
  return (
    <>
      <nav className="bg-pink-400 p-9 rounded-lg shadow">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <a href="\">Quiz App</a>
          </div>
          <div className="space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-white text-2xl font-sans font-bold"
            >
              Play
            </a>
            <a
              href="\quiz"
              className="text-gray-300 hover:text-white text-2xl font-sans"
            >
              <FontAwesomeIcon icon={faHouse} />
            </a>
            <a
              href="\create"
              className="text-gray-300 hover:text-white text-2xl font-sans"
            >
              <FontAwesomeIcon icon={faPlus} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-2xl font-sans"
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </a>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-center min-h-screen bg-pink-100"></div>
    </>
  );
}

export default Quiz;

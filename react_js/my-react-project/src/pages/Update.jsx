import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
function Update() {
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

      <div className="flex items-center justify-center min-h-screen bg-pink-100">
        <div className="flex flex-col space-y-4 w-full max-w-lg">
          <div className="flex justify-center">
            <h1 className=" font-sans text-pink-500 text-5xl ">Update</h1>
          </div>

          <hr className="border-pink-500" />

          <div>
            <input
              id="name"
              type="text"
              placeholder="Question"
              className="input-field border-2 border-pink-500 rounded-md p-4 w-full   focus:border-pink-800 focus:outline-none"
            />
          </div>

          <div>
            <input
              id="A"
              type="text"
              placeholder="Option A"
              className="input-field border-2 border-pink-500 rounded-md p-4 w-full  focus:border-pink-800 focus:outline-none"
            />
          </div>

          <div>
            <input
              id="B"
              type="text"
              placeholder="Option B"
              className="input-field border-2 border-pink-500 rounded-md p-4 w-full  focus:border-pink-800 focus:outline-none "
            />
          </div>

          <div>
            <input
              id="C"
              type="text"
              placeholder="Option C"
              className="input-field border-2 border-pink-500 rounded-md p-4 w-full  focus:border-pink-800 focus:outline-none "
            />
          </div>

          <div>
            <input
              id="D"
              type="text"
              placeholder="Option D"
              className="input-field border-2 border-pink-500 rounded-md p-4 w-full  focus:border-pink-800 focus:outline-none "
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={''}
              className="bg-pink-400  font-serif  text-white text-3xl font-bold  py-5 px-10 rounded-lg shadow-2xl shadow-pink-500/50 hover:bg-pink-800"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;

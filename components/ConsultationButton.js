import { useState } from "react";

const ConsultationButon = () => {
  const [modal, setModal] = useState();

  const handleModal = () => {
    if (!modal) {
      setModal(true);
    } else setModal(false);
  };
  return (
    <div className="justifv-center flex items-center">
      <button
        onClick={handleModal}
        className="bg-opactiy-60 lg:text-lg lg:w-96 w-full max-w-screen-sm p-2 mx-auto mb-5 font-light text-white bg-red-300 rounded-lg"
      >
        BOOK A FREE CONSULTATION TODAY
      </button>
      {modal && (
        <div className="bg-opacity-90 fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full p-4 bg-black">
          <div
            className="absolute w-screen h-screen"
            onClick={handleModal}
          ></div>
          <div>
            <form className="relative flex flex-col w-full max-w-screen-md p-4 mx-auto my-auto text-gray-900 bg-white rounded">
              <h1 className="md:text-2xl mb-4 text-xl">
                Enter your detail below and we will contact you for an
                appointment
              </h1>
              <label for="name">Name</label>
              <input className="w-full p-1 my-2 border rounded" />
              <label for="name">Email</label>
              <input className="w-full p-1 my-2 border rounded" />
              <button
                type="submit"
                className="px-2 py-1 mt-1 ml-auto text-white bg-purple-300 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultationButon;

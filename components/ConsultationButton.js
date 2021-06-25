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
            <form className="relative lg:p-10 flex flex-col w-full max-w-screen-md p-4 mx-auto my-auto text-gray-900 bg-gray-50 rounded">
      
              <h1 className="mb-4 lg:mb-8 text-3xl font-medium">
                Enter your detail below and we will contact you for a 15 minute
                appointment
              </h1>
              <div className="flex flex-col">
                <label className="mb-2 lg:mb-4">Name</label>
                <input type="text" className="p-1 mb-2"></input>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 lg:mb-4">Email Address</label>
                <input type="email" className="p-1 mb-4 lg:mb-8"></input>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="px-2 py-1 ml-auto text-white bg-blue-400 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultationButon;

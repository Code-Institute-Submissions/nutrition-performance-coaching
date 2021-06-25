import { useRef } from "react";

import { useAuth } from "../context/AuthContext";

const LogIn = () => {
  const { loadingUser, user, login, error } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(emailRef.current.value, passwordRef.current.value);
    console.log("done");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 lg:p-10 lg:my-auto z-30 w-full h-auto max-w-screen-lg p-4 ml-auto text-gray-900 rounded"
    >
      <h1 className="mb-4 text-3xl font-medium">
        Log in to Nutrition Performance Coaching
      </h1>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="p-1 mb-2 rounded"
          ref={emailRef}
        ></input>
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="p-1 mb-4 rounded"
          ref={passwordRef}
        ></input>
      </div>
      {error && <p className="mb-4 text-sm text-red-400">{error}</p>}
      <div className="flex">
        <button
          type="submit"
          value="submit"
          className="px-2 py-1 ml-auto text-white bg-blue-400 rounded"
        >
          {loadingUser ? `Loading...` : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default LogIn;

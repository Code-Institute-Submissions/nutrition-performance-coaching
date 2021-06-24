import Image from "next/image";

export default function Login() {
  return (
    <div>
      <div className="-z-10 fixed w-screen h-screen overflow-hidden">
        <Image
          alt="background"
          src="/bg.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="xl:px-20 relative w-full h-full p-4 text-white bg-gray-500 bg-opacity-50">
          <div className="lg:pt-40 lg:flex pt-20">
            <div className="lg:w-1/2">
              <h1 className="lg:text-6xl lg:mb-12 mb-6 text-4xl uppercase">
                Performance
              </h1>
              <h2 className="lg:text-6xl lg:mb-12 mb-6 text-4xl font-light uppercase">
                Nutrition
              </h2>
              <h3 className="lg:text-6xl lg:mb-12 mb-6 text-4xl font-thin uppercase">
                Programming
              </h3>
            </div>
            <div className="lg:w-1/2">
              <form className="bg-gray-50 z-30 w-full h-auto max-w-screen-sm p-4 ml-auto lg:p-10 lg:my-auto text-gray-900 rounded">
                <h1 className="mb-4 text-3xl font-medium">
                  Log in to Nutrition Performance Coaching
                </h1>
                <div className="flex flex-col">
                  <label className="mb-2">Email Address</label>
                  <input type="email" className="p-1 mb-2"></input>
                </div>
                <div className="flex flex-col">
                  <label className="mb-2">Password</label>
                  <input type="password" className="p-1 mb-4"></input>
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
            <h5 className="md:right-4 lg:right-20 absolute bottom-0 mb-5 text-lg uppercase">
              Creating output optimised by input
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

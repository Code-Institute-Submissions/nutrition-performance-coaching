const HeroVideo = () => {
  return (
    <header className="relative flex flex-col justify-start h-screen overflow-hidden">
      <div className="relative z-30 p-4 text-2xl text-white bg-gray-500 bg-opacity-50 w-full h-4/6 ">
        <div className="mt-20">
          <h1 className="text-4xl mb-6 uppercase">Performance</h1>
          <h2 className="text-4xl mb-6 font-light uppercase">Nutrition</h2>
          <h3 className="text-4xl font-thin uppercase">Programming</h3>
          <h5 className="text-lg uppercase mb-5 bottom-0 absolute">
            Creating output optimised by input
          </h5>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full max-w-none h-4/6"
      >
        <source src="/web16-9video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-gray-900 p-4 h-1/3 flex flex-col justify-around">
        <h5 className="text-2xl">
          We believe Women perform best through tailored nutritional coaching
        </h5>
        <h6 className="font-thin text-lg">
          Schedule a free 15 minute call to see how we can help you
        </h6>
        <button className="bg-pink-200 text-white font-light p-2 w-full rounded-lg">
          BOOK A FREE CONSULTATION TODAY
        </button>
      </div>
    </header>
  );
};

export default HeroVideo;

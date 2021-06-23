import ConsultationButon from "../components/ConsultationButton";

const HeroVideo = () => {
  return (
    <header className="relative flex flex-col justify-start overflow-y-auto overflow-x-hidden lg:overflow-hidden">
      <div className="relative z-30 px-4 text-2xl text-white bg-gray-500 bg-opacity-50 w-full h-96 lg:h-screen lg:px-20">
        <div className="mt-20 lg:mt-40">
          <h1 className="text-4xl mb-6 uppercase lg:text-6xl lg:mb-12">
            Performance
          </h1>
          <h2 className="text-4xl mb-6 font-light uppercase lg:text-6xl lg:mb-12">
            Nutrition
          </h2>
          <h3 className="text-4xl font-thin uppercase lg:text-6xl lg:mb-12">
            Programming
          </h3>
          <div className="w-96 mx-auto hidden lg:block">
            <ConsultationButon />
          </div>
          <h5 className="text-lg uppercase mb-5 bottom-0 absolute md:right-4 lg:right-20">
            Creating output optimised by input
          </h5>
        </div>
      </div>
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        playsInline
        className="absolute z-10 w-auto min-w-full max-w-none h-96 lg:h-screen md:w-screen overflow-hidden object-cover"
      >
        <source src="/web16-9video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative text-gray-900 p-4 py-12 md:mx-20 lg:hidden">
        <h5 className="text-2xl mb-5">
          We believe Women perform best through tailored nutritional coaching
        </h5>
        <h6 className="font-thin text-lg mb-5">
          Schedule a free 15 minute call to see how we can help you
        </h6>
        <ConsultationButon />
      </div>
    </header>
  );
};

export default HeroVideo;

import Journal from "../icons/Journal";
import Program from "../icons/Program";
import Perform from "../icons/Perform";

const Features = () => {
  return (
    <div className="md:mx-20 px-4 py-6 xl:py-16 text-gray-900" id="features">
      <h3 className="lg:text-4xl mb-4 text-3xl">
        Building better female athletes
      </h3>
      <h5 className="lg:text-2xl mb-10 text-xl font-light xl:mb-24">
        Our goal is to provide you with the best nutrition for the best
        performance through very simple process:
      </h5>
      <div className="xl:grid-cols-3 grid grid-cols-1">
        <div className="grid-row-2 xl:grid-flow-row grid grid-cols-2 col-span-1 gap-1">
          <div className="xl:order-last col-span-1 row-span-2">
            <Journal />
          </div>
          <div className="xl:col-span-3 xl:order-first xl:justify-center xl:h-8 xl:border-b flex items-end col-span-1 row-span-1">
            <h5 className=" lg:text-3xl lg:mb-4 md:text-2xl text-xl font-light">
              Journal
            </h5>
          </div>
          <div className="xl:row-span-2 col-span-1 row-span-1">
            <p className="md:text-base lg:text-xl xl:px-4 xl:pt-6 text-sm font-thin">
              We create a simple food journal to gauge your current nutritional
              preferences and habits.
            </p>
          </div>
        </div>
        <div className="grid-row-2 xl:grid-flow-row grid grid-flow-col grid-cols-2 col-span-1 gap-1">
          <div className="xl:order-last order-3 col-span-1 row-span-2">
            <Program />
          </div>
          <div className="xl:col-span-3 xl:order-first xl:justify-center xl:border-b xl:h-8 flex items-end order-1 col-span-1 row-span-1">
            <h5 className="lg:text-3xl lg:mb-4 md:text-2xl text-xl font-light">
              Program
            </h5>
          </div>
          <div className="xl:row-span-2 order-2 col-span-1 row-span-1">
            <p className="md:text-base lg:text-xl xl:pt-6 xl:px-4 col-span-1 row-span-1 text-sm font-thin">
              We construct a program that is uniquely tailored to your
              performance goals and timeline.
            </p>
          </div>
        </div>
        <div className="grid-row-2 xl:grid-flow-row grid grid-cols-2 col-span-1 gap-1">
          <div className="xl:order-last col-span-1 row-span-2">
            <Perform />
          </div>
          <div className="xl:col-span-3 xl:order-first xl:justify-center xl:border-b xl:h-8 flex items-end col-span-1 row-span-1">
            <h5 className=" lg:text-3xl lg:mb-4 md:text-2xl text-xl font-light">
              Perform!
            </h5>
          </div>
          <div className="xl:row-span-2 col-span-1 row-span-1">
            <p className="md:text-base lg:text-xl xl:px-4 xl:pt-6 text-sm font-thin">
              We monitor your progress and make adaptations to your nutritional
              programming as needed for optimal performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

import Journal from "../icons/Journal";
import Program from "../icons/Program";
import Perform from "../icons/Perform";

const Features = () => {
  return (
    <div className="px-4 pt-12 pb-6 text-gray-900">
      <h3 className="text-3xl mb-4">Building better female atheltes</h3>
      <h5 className="text-xl mb-8 font-light">
        Our goal is to provide you with the best nutrition for the best
        performance through very simple process:
      </h5>
      <div className="flex items-center justify-between mb-4">
        <Journal />
        <div className="w-1/2 pl-4">
          <h5 className="text-xl mb-2 font-light">Journal</h5>
          <p className="text-sm font-thin">
            We create a simple food journal to gauge your current nutritional
            preferences and habits.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="w-1/2 pr-4">
          <h5 className="text-xl mb-2 font-light">Program</h5>
          <p className="text-sm font-thin">
            We construct a program that is uniquely tailored to your performance
            goals and timeline.
          </p>
        </div>
        <Program />
      </div>
      <div className="flex items-center justify-between mb-4">
        <Perform />
        <div className="w-1/2 pl-4">
          <h5 className="text-xl mb-2 font-light">Perform!</h5>
          <p className="text-sm font-thin">
            `We monitor your progress and make adaptations to your nutritional
            programming as needed for optimal performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

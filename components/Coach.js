import Image from "next/image";
import ConsultationButon from "../components/ConsultationButton";

const Coach = () => {
  return (
    <div className="py-12">
      <div className="lg:flex lg:flex-row-reverse lg:items-center lg:bg-gray-400 mb-12">
        <div className="md:mx-20 lg:mx-0 lg:w-7/12 lg:p-20 lg:text-white p-4">
          <h3 className="lg:text-4xl mb-4 text-3xl">
            Expert Programming by Experienced Nutritionists
          </h3>
          <h5 className="lg:text-2xl mb-4 text-xl font-light">
            Our lead nutritionist is Lindsey Doyle who has spent that past 5
            years coaching high performing athletes.
          </h5>
        </div>
        <div className="lg:w-5/12 relative flex items-center justify-center">
          <div className="bg-opacity-70 absolute z-10 flex flex-col items-center justify-center w-full h-full p-4 bg-red-300">
            <div className="md:mx-20 text-white">
              <h3 className="mb-4 text-5xl">Lindsey Doyle</h3>
              <hr className="mb-4" />

              <p className="mb-4 text-2xl">
                MSc in Sports Nutrition and coach to many world class
                professional MMA fighters and BJJ athletes
              </p>
            </div>
          </div>
          <Image
            src={"/lindsey-nobg.png"}
            width={500}
            height={500}
            objectFit="cover"
            objectPosition="center"
            className="w-full h-full mx-auto"
          />
        </div>
        <div className="md:mx-20 lg:hidden p-4">
          <h5 className=" mt-2 mb-4 text-xl font-light">
            “I specialise in helping women make weight and perform in a safe,
            efficient and effective manner!” - Lindsey
          </h5>
        </div>
      </div>
      <div className="md:mx-20 px-4">
        <ConsultationButon />
      </div>
    </div>
  );
};

export default Coach;

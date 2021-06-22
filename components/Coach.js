import Image from "next/image";

const Coach = () => {
  return (
    <div className="py-12">
      <h3 className="text-3xl mb-4 px-4">
        Expert Programming by Experienced Nutritionists
      </h3>
      <h5 className="text-xl mb-4 font-light px-4">
        Our lead nutritionist is Lindsey Doyle who has spent that past 5 years
        coaching high performing athletes.
      </h5>
      <div className="relative flex">
        <div className="bg-red-300 bg-opacity-70 w-full h-full p-4 absolute z-10">
          <div className="text-white mt-44">
            <h3 className="text-5xl mb-4">Lindsey Doyle</h3>
            <hr className="mb-4" />

            <p className="text-2xl mb-4">
              MSc in Sports Nutrition and coach to many world class professional
              MMA fighters and BJJ athletes
            </p>
          </div>
        </div>
        <Image
          src={"/lindsey-nobg.png"}
          width={500}
          height={500}
          objectFit="cover"
          objectPosition="center"
          className="w-full h-full"
        />
      </div>
      <h5 className="text-xl my-4 font-light px-4">
        “I specialise in helping women make weight and perform in a safe,
        efficient and effective manner!” - Lindsey
      </h5>
    </div>
  );
};

export default Coach;

import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="md:mx-20 p-4 mb-12 text-gray-600">
      <h1 className="mb-8 text-3xl text-gray-900 lg:hidden">Client Testimonials</h1>
      <div className="flex flex-wrap">
        <div className="flex items-center justify-between w-full max-w-screen-sm mx-auto">
          <div className="w-28 lg:w-36">
            <Image
              src="/testimonial2.png"
              width={140}
              height={140}
              className="rounded-full"
            />
          </div>
          <div className="w-2/3 pl-4">
            <p className="lg:text-xl mb-2">
            I got great coaching and now I feel healthier, happier and my
              performance is through the roof!
            </p>
            <h3 className="lg:text-2xl mb-2 text-xl font-medium text-gray-900">
              Jane Doe
            </h3>
            <h5 className="lg:text-xl text-lg font-light text-gray-900">
              Profession reiewer
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

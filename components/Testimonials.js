import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="p-4 text-gray-600 mb-12">
      <h1 className="text-3xl text-gray-900 mb-8">Client Testimonials</h1>
      <div className="flex flex-wrap">
        <div className="md:w-1/2 w-full flex items-center justify-around">
          <div className="w-28">
            <Image
              src="/testimonial2.png"
              width={140}
              height={140}
              className="rounded-full"
            />
          </div>
          <div className="w-2/3 pl-4">
            <p className="mb-2">
              "I got great coaching and now I feel healthier, happier and my
              performance is through the roof!""
            </p>
            <h3 className="text-xl text-gray-900 font-medium mb-2">Jane Doe</h3>
            <h5 className="text-lg text-gray-900 font-light">
              Profession reiewer
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

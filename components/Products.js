import Image from "next/image"

export const Products = () => {
  return (
    <section className="body-font overflow-hidden text-gray-600">
      <div className="mx-auto">
        <div className="lg:w-4/5 flex flex-wrap mx-auto">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 lg:h-auto object-cover object-center w-full h-64 rounded"
            src="https://dummyimage.com/400x400"
            width={400}
            height={400}
          />
          <div className="lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0 w-full mt-6">
            <h2 className="title-font text-sm tracking-widest text-gray-500">
              BRAND NAME
            </h2>
            <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">
              The Catcher in the Rye
            </h1>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="mt-5 mb-5 border-b-2 border-gray-100">
              
            </div>
            <div className="flex">
              <span className="title-font text-2xl font-medium text-gray-900">
                €48.00
              </span>
              <button className="focus:outline-none hover:bg-indigo-600 flex px-6 py-2 ml-auto text-white bg-indigo-500 border-0 rounded">
                Buy Now
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

import Image from "next/image";
import LogIn from "../components/LogIn";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const router = useRouter();

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const redirect = () => {
        router.push("/dashboard");
      };
      redirect();
    }
  }, [user]);
  return (
    <div>
      <div className="-z-10 fixed w-screen h-screen overflow-hidden">
        <Image
          alt="background"
          src="/bg.jpg"
          layout="fill"
          ws
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
              <LogIn />
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

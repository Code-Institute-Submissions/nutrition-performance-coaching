import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

import Products from "../components/Products";

export default function Dashboard() {
  const { user, loadingUser } = useAuth();
  const router = useRouter();

  if (loadingUser) {
    return (
      <div className="text-gray-900 min-h-screen">
        <p className="pt-20">Loading...</p>
      </div>
    );
  }
  if (user) {
    return (
      <div className="px-4 py-24 text-gray-900  min-h-screen">
        <div className="mb-5 lg:mb-12 max-w-screen-lg mx-auto flex">
          <h1 className="w-1/2 pb-4 text-2xl font-light text-center border-b-4 border-blue-700">
            Products
          </h1>
          <h1 className="w-1/2 pb-4 text-2xl font-light text-center border-b-4 border-gray-200 text-gray-700">
            Journal
          </h1>
        </div>
        <Products />
      </div>
    );
  } else {
    return router.push("/login");
  }
}

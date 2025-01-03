import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-purple-600">
        <div className="flex flex-col space-y-4">
          <h1 className="lg:text-6xl font-bold text-2xl text-white">Oops!</h1>
          <p className="text-xl text-white">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="text-3xl text-white">404 PAGE NOT FOUND</p>
          <div className="mt-4">
            <Link
              to="/"
              className=" flex flex-row w-28 justify-center space-x-4 items-center px-2 py-2 bg-white rounded-md hover:bg-gray-100"
            >
              <AiTwotoneHome />
              <span>Home</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./tailwind.css";

const Intro = () => {
  return (
    <div className="animated-bg overflow-hidden h-screen w-screen p-5">
      <div className="rounded-[20px]  flex flex-col justify-start space-y-[93px] py-[40px] px-[50px] pb-70 h-full text-white bg-[#6610F2]">
        <h1 className="text-6xl font-spacegrotesk ">Hello Dear,</h1>
        <div className="flex flex-col space-y-[40px] items-center justify-center w-full">
          <p className="w-[445px] font-poppins text-xl font-bold text-center">
            Please carefully follow the instructions provided to create an
            effective and standout resume. Pay attention to details and
            customize it for each application. These guidelines will help you
            present your skills and experiences in the best possible way. Let's
            begin by following the instructions step by step.
          </p>

          <Link
            to="/mvc"
            className="w-[335px] h-12 rounded-full bg-white text-[#6610F2] text-base font-medium font-poppins flex flex-row space-x-1 items-center justify-center"
          >
            <span>Create your CV Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
            >
              <path d="M1.5 9L5.5 5L1.5 1" stroke="#6610F2" stroke-width="2" />
            </svg>
          </Link>
          <h2 className="w-[445px] h-[50px] text-center text-white text-4xl font-normal font-spacegrotesk">
            GOOD LUCK !!!
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Intro;

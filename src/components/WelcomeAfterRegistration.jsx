import React from "react";
import { Link } from "react-router-dom";
// import "./tailwind.css";

const WelcomeAfterRegistration = () => {
  return (
    <div className="animated-bg overflow-hidden h-screen w-screen p-5">
      <div className="rounded-[20px]  flex flex-col justify-start space-y-[93px] py-[40px] px-[50px] pb-70 h-full text-white bg-[#6610F2]">
        <h1 className="text-6xl font-spacegrotesk ">Welcome Name,</h1>
        <div className="flex flex-col space-y-[40px] items-center justify-center w-full">
          <p className="w-[445px] font-poppins text-xl font-bold text-center">
            We're thrilled to have you join our platform. Thank you for taking
            the first step. Now, let's move forward together! Please take a few
            more steps to complete your profile and unlock the full potential of
            our services.
          </p>

          <Link
            to="/pre-registration2"
            className="w-[335px] h-12 rounded-full bg-white text-[#6610F2] text-base font-medium font-poppins flex flex-row space-x-1 items-center justify-center"
          >
            <span>Countinue</span>
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
export default WelcomeAfterRegistration;

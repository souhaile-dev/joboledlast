import React, { useState } from "react";
import userIcon from "../../../assets/svg/user_icon.svg";
import { FaDotCircle, FaRegCircle } from "react-icons/fa";
import { FaCircle, FaCheckCircle } from "react-icons/fa";

const ProfileStatus = ({ setValue, profilType }) => {
  const [selectedOption, setSelectedOption] = useState("1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setValue(event);
  };

  return (
    <div className="flex flex-col gap-y-11 items-center justify-center">
      <div className="basis-2/12 w-[78px]">
        <img src={userIcon} alt="email icon" />
      </div>
      <div className="basis-5/12 font-poppins font-normal flex pb-0 px-20 p-8 ">
        <div className="items-end self-end text-center  w-[422px]">
          <h1 className="text-[20px] mb-4">You Want to Connect As</h1>
          <p className="text-[14px]">
            {" "}
            Please select the option that best describes your situation:
          </p>
        </div>
      </div>
      {/* <div class="basis-7/12 flex items-center justify-center">
                <div class="relative flex items-center">
                    <input type="radio" id="radio1" name="radio-group" class="sr-only" />
                    <label for="radio1" class="flex items-center cursor-pointer">
                        <div class="w-4 h-4 border border-gray-300 rounded-full mr-3"></div>
                        <span class="text-gray-700 font-medium">Option 1</span>
                    </label>
                </div>
                <div class="relative flex items-center ml-8">
                    <input type="radio" id="radio2" name="radio-group" class="sr-only" />
                    <label for="radio2" class="flex items-center cursor-pointer">
                        <div class="w-4 h-4 border border-gray-300 rounded-full mr-3"></div>
                        <span class="text-gray-700 font-medium">Option 2</span>
                    </label>
                </div>
            </div> */}
      <div class="basis-7/12 m-4 my-0 p-2 flex flex-row items-center justify-center">
        <label class="basis-1/4 cursor-pointer h-[248px] m-4">
          <input
            type="radio"
            id="profilType"
            class="peer sr-only"
            name="pricing"
            value="1"
            checked={selectedOption === "1"}
            onChange={handleOptionChange}
          />
          <div class="w-[146px]  h-full max-w-xl rounded-md bg-white p-5 text-[#418DFD] ring ring-[#418DFD] ring-transparent transition-all hover:shadow peer-checked:text-[#6610F2] peer-checked:ring-[#6610F2] peer-checked:ring-offset-2">
            <div class="flex flex-col items-center justify-center font-poppins text-center">
              {selectedOption === "1" ? (
                <FaDotCircle size="22px" />
              ) : (
                <FaRegCircle size="22px" />
              )}
              <h1 className="text-sm font-semibold  my-3">Job Seeker</h1>
              <p className="text-[12px]">
                Currently looking for job opportunities?
              </p>
            </div>
          </div>
        </label>
        <label class="basis-1/4 cursor-pointer h-[248px] m-4">
          <input
            type="radio"
            id="profilType"
            class="peer sr-only"
            name="pricing"
            value="2"
            checked={selectedOption === "2"}
            onChange={handleOptionChange}
          />
          <div class="w-[146px] max-w-xl h-full rounded-md bg-white p-5 text-[#418DFD] ring ring-[#418DFD] ring-transparent transition-all hover:shadow peer-checked:text-[#6610F2] peer-checked:ring-[#6610F2] peer-checked:ring-offset-2">
            <div class="flex flex-col items-center justify-center font-poppins text-center">
              {selectedOption === "2" ? (
                <FaDotCircle size="22px" />
              ) : (
                <FaRegCircle size="22px" />
              )}
              <h1 className="text-sm font-semibold  my-3">Business Owner</h1>
              <p className="text-[12px]">
                Are you seeking to augment your team with highly skilled and
                talented Profiles?
              </p>
            </div>
          </div>
        </label>
        <label class="basis-1/4 cursor-pointer h-[248px] m-4">
          <input
            type="radio"
            class="peer sr-only"
            id="profilType"
            name="pricing"
            value="3"
            checked={selectedOption === "3"}
            onChange={handleOptionChange}
          />
          <div class="w-[146px] max-w-xl h-full rounded-md bg-white p-5 text-[#418DFD] ring ring-[#418DFD] ring-transparent transition-all hover:shadow peer-checked:text-[#6610F2] peer-checked:ring-[#6610F2] peer-checked:ring-offset-2">
            <div class="flex flex-col items-center justify-center font-poppins text-center">
              {selectedOption === "3" ? (
                <FaDotCircle size="22px" />
              ) : (
                <FaRegCircle size="22px" />
              )}
              <h1 className="text-sm font-semibold  my-3">
                Employed Professional
              </h1>
              <p className="text-[12px]">
                Already have a job, but seeking ways to accelerate your
                professional growth?
              </p>
            </div>
          </div>
        </label>
        <label class="basis-1/4 cursor-pointer h-[248px] m-4">
          <input
            type="radio"
            id="profilType"
            class="peer sr-only"
            name="pricing"
            value="4"
            checked={selectedOption === "4"}
            onChange={handleOptionChange}
          />
          <div class="w-[146px] max-w-xl h-full rounded-md bg-white p-5 text-[#418DFD] ring ring-[#418DFD] ring-transparent transition-all hover:shadow peer-checked:text-[#6610F2] peer-checked:ring-[#6610F2] peer-checked:ring-offset-2">
            <div class="flex flex-col items-center justify-center font-poppins text-center">
              {selectedOption === "4" ? (
                <FaDotCircle size="22px" />
              ) : (
                <FaRegCircle size="22px" />
              )}
              <h1 className="text-sm font-semibold  my-3">Student/Graduate</h1>
              <p className="text-[12px]">
                Are you a student or recent graduate looking for internship or
                entry-level job opportunities?
              </p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ProfileStatus;

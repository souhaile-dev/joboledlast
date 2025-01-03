import React, { useState } from "react";
import userIcon from "../../../assets/svg/user_icon.svg";
import { FaDotCircle, FaRegCircle } from "react-icons/fa";
import { FaCircle, FaCheckCircle } from "react-icons/fa";

const fields = [
  "Information Technology (IT)",
  "Healthcare",
  "Finance",
  "Business and Management",
  "Education",
  "Engineering",
  "Law and Legal Services",
  "Marketing and Advertising",
  "Science and Research",
  "Design and Creative Arts",
  "Social Work and Counseling",
  "Communication and Media",
  "Agriculture and Environmental Science",
  "Hospitality and Tourism",
  "Manufacturing and Production",
  "Public Administration and Government",
  "Nonprofit and Social Services",
  "Real Estate",
  "Fitness and Wellness",
  "Automotive and Transportation",
];
const ProfessionalInformations = ({
  setValue,
  highestDiplomeName,
  diplomeLevel,
  professionalField,
  yearsExperience,
}) => {
  // const [selectedOption, setSelectedOption] = useState("1");

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  //   setValue(event);
  // };

  return (
    <div className="flex flex-col gap-y-11 items-center justify-center">
      <div className="basis-2/12 w-[78px]">
        <img src={userIcon} alt="email icon" />
      </div>
      <div className="basis-5/12 font-poppins font-normal flex pb-0 px-20 p-8 ">
        <div className="items-end self-end text-center  w-[422px]">
          <h1 className="text-[20px] mb-4">Your Professional Field</h1>
          <p className="text-[14px]">
            Please provide details of your field of expertise and your highest
            diploma
          </p>
        </div>
      </div>
      <div class="basis-7/12 m-4 my-0 p-2 flex flex-col space-y-[20px] items-center justify-center">
        <div className="min-w-[500px] flex flex-row justify-start items-center space-x-[20px]">
          <input
            className="basis-2/12 rounded-none min-w-[352px] my-6 text-center  placeholder-poppins placeholder:text-black/[.5] placeholder:text-[14px] placeholder:font-normal h-12 border-b-[.5px] border-black/[.5] focus:outline-none text-xl"
            id="diplom"
            type="text"
            placeholder="Highest Diplome Name"
            value={highestDiplomeName}
            onChange={(e) => {
              setValue(e);
              // console.log(e.target.value);
            }}
          />

          <select
            value={diplomeLevel}
            onChange={(e) => {
              setValue(e);
              // console.log(e.target.value);
            }}
            className="border-b-[1px] w-[85px] h-12 text-black text-sm font-normal font-poppins py-[2px] px-[9px] border-[#808080]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Level</option>
            <option value="Bac+1">Bac+1</option>
            <option value="Bac+2">Bac+2</option>
            <option value="Bac+3">Bac+3</option>
            <option value="Bac+4">Bac+4</option>
            <option value="Bac+5">Bac+5</option>
            <option value="Bac+5">Bac+6</option>
            <option value="Bac+5">Bac+7</option>
          </select>
        </div>
        <select
          id="profetionafiled"
          className="basis-3/12 h-[40px] flex  rounded-full w-[500px] bg-[#EDF0F3] px-10 py-[10px] text-center"
          value={professionalField}
          onChange={(e) => {
            setValue(e);
            // console.log(e.target.value);
          }}
        >
          <option className="font-poppins font-normal text-[14px]" value="">
            Select your professional field
          </option>
          {fields.map((option) => (
            <option
              className="font-montserrat font-normal text-left text-[14px]"
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
        <div className="w-[500px] flex flex-row justify-start items-center space-x-[40px] pl-[21px]">
          <div className="text-black text-sm font-semibold font-poppins">
            Select your years of experience
          </div>
          <select
            value={yearsExperience}
            onChange={(e) => {
              setValue(e);
              // console.log(e.target.value);
            }}
            className="border-b-[1px] w-[88px] h-[27px] text-black text-sm font-normal font-poppins py-[2px] px-[9px] border-[#808080]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Years</option>
            <option value="1">0--2</option>
            <option value="2">2--5</option>
            <option value="3">5--7</option>
            <option value="4">7--9</option>
            <option value="5">+10</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalInformations;

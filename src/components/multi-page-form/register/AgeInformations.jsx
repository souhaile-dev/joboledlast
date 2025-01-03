import React, { useState } from "react";
import userIcon from "../../../assets/svg/user_icon.svg";
import { FaDotCircle, FaRegCircle } from "react-icons/fa";
import { FaCircle, FaCheckCircle } from "react-icons/fa";

const months = [
  { month: "January", number: 1 },
  { month: "February", number: 2 },
  { month: "March", number: 3 },
  { month: "April", number: 4 },
  { month: "May", number: 5 },
  { month: "June", number: 6 },
  { month: "July", number: 7 },
  { month: "August", number: 8 },
  { month: "September", number: 9 },
  { month: "October", number: 10 },
  { month: "November", number: 11 },
  { month: "December", number: 12 },
];

function createYears() {
  let _today = new Date();
  let theYear = _today.getFullYear();
  let arr = [];
  for (let i = theYear; i >= theYear - 100; i--) {
    arr.push(i);
  }
  return arr;
}
const AgeInformations = ({ setValue, birthDay }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  const days = 31;

  return (
    <div className="flex flex-col gap-y-11 items-center justify-center">
      <div className="basis-2/12 w-[78px]">
        <img src={userIcon} alt="email icon" />
      </div>
      <div className="basis-5/12 font-poppins font-normal flex pb-0 px-20 p-8 ">
        <div className="items-end self-end text-center  w-[422px]">
          <h1 className="text-[20px] mb-4">Your Age Details</h1>
          <p className="text-[14px]">
            Please share your age to help us tailor job recommendations to your
            career stage
          </p>
        </div>
      </div>
      <div class="basis-7/12 m-4 my-0 p-2 flex flex-row items-center justify-center space-x-[40px]">
        <select
          value={day}
          onChange={handleDayChange}
          className="border-b-[1px] w-[88px] h-[27px] text-black text-sm font-normal font-poppins py-[2px] px-[9px] border-[#808080]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option selected>Day</option>
          {Array(days)
            .fill()
            .map((_, index) => (
              <option value={index + 1} key={index}>
                {index + 1}
              </option>
            ))}
        </select>
        <select
          value={month}
          onChange={handleMonthChange}
          className="border-b-[1px] w-[88px] h-[27px] text-black text-sm font-normal font-poppins py-[2px] px-[9px] border-[#808080]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option selected>Month</option>
          {/* {Array(days)
            .fill()
            .map((_, index) => (
              <option value={index + 1} key={index}>
                {index + 1}
              </option>
            ))} */}

          {months.map((option) => (
            <option
              className="font-montserrat font-normal text-left text-[14px]"
              key={option.number}
              value={option.number}
            >
              {option.month}
            </option>
          ))}
        </select>
        <select
          value={year}
          onChange={handleYearChange}
          className="border-b-[1px] w-[88px] h-[27px] text-black text-sm font-normal font-poppins py-[2px] px-[9px] border-[#808080]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option selected>Year</option>
          {createYears().map((year) => (
            <option key={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AgeInformations;

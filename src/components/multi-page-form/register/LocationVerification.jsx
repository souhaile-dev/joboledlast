import React, { useState } from "react";
import countries from "../../../data/countries.json";
import locationIcon from "../../../assets/svg/location_icon.svg";

const LocationVerification = ({ setValue, city, country }) => {
  // console.log(countries);
  return (
    <div className="flex flex-col space-y-[100px] items-center justify-between">
      <div className="basis-2/12 w-[78px]">
        <img src={locationIcon} alt="email icon" />
      </div>
      <div className="flex flex-col space-y-[42px]">
        <div className="basis-5/12 font-poppins font-normal flex flex-col items-end self-end ">
          <div className="flex flex-col space-y-[10px]  text-center  w-[422px]">
            <h1 className="text-[20px]">Where are you located?</h1>
            <p className="text-[14px]">
              Our recommendation system will provide suggestions for job
              openings and job seekers in close proximity to you.
            </p>
          </div>
        </div>

        <div>
          <select
            id="country"
            className="basis-3/12 h-[40px] flex  rounded-full w-[422px] bg-[#EDF0F3] px-10 py-[10px] text-center"
            value={country}
            onChange={(e) => {
              setValue(e);
              // console.log(e.target.value);
            }}
          >
            <option className="font-poppins font-normal text-[14px]" value="">
              Click to select your Country
            </option>
            {countries.map((option) => (
              <option
                className="font-montserrat font-normal text-left text-[14px]"
                key={option.code}
                value={option.code}
              >
                {option.name}
              </option>
            ))}
          </select>

          <input
            className="basis-2/12 rounded-none  my-6 w-[422px] text-center  placeholder-poppins placeholder:text-black/[.5] placeholder:text-[14px] placeholder:font-normal h-12 border-b-[.5px] border-black/[.5] focus:outline-none text-xl"
            id="city"
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => {
              setValue(e);
              // console.log(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationVerification;

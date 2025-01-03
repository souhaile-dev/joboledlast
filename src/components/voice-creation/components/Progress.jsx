import React, { useState } from "react";
import axios from "axios";

const Progress = (props) => {
  return (
    <>
      <div className="bg-[#6610F2] h-1/2 w-full rounded-[20px] shadow flex flex-col space-y-[11px] justify-start items-center px-[20px] pt-[27px]">
        <div className="w-[72px] h-[72px] rounded-full border-2 border-white flex items-center justify-center text-center text-white text-4xl font-normal font-spacegrotesk">
          {props.stepNbr}
        </div>
        <div className="text-center text-white text-[26px] font-normal font-spacegrotesk">
          {props.title}
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: props.desc }}
          className="text-white text-sm font-semibold font-poppins text-center"
        ></p>
      </div>
    </>
  );
};

export default Progress;

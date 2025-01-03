import React, { useState } from "react";
import axios from "axios";

const Audio = (props) => {
  return (
    <>
      {!props.pressed && (
        <div
          className={`${props.bgColor} h-1/2 w-full rounded-[20px] shadow flex flex-col space-y-[24px] justify-center items-center px-[54px]`}
        >
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="49"
              viewBox="0 0 27 49"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4594 0C8.99935 0 5.38373 3.54384 5.38373 7.91538V25.2538C5.38373 29.6254 8.99935 33.1692 13.4594 33.1692C17.9195 33.1692 21.5352 29.6254 21.5352 25.2538V7.91538C21.5352 3.54384 17.9195 0 13.4594 0ZM18.4587 25.2538V7.91538C18.4587 5.20919 16.2205 3.01538 13.4594 3.01538C10.6984 3.01538 8.46019 5.20919 8.46019 7.91538V25.2538C8.46019 27.96 10.6984 30.1538 13.4594 30.1538C16.2205 30.1538 18.4587 27.96 18.4587 25.2538Z"
                fill="white"
              />
              <path
                d="M1.53823 18.1518C0.68869 18.1518 0 18.8268 0 19.6595V25.6308C0 32.3536 5.11526 37.9055 11.7391 38.7512V47.4923C11.7391 48.325 12.4278 49 13.2773 49C14.1268 49 14.8155 48.325 14.8155 47.4923V38.8007C21.654 38.1525 27 32.5036 27 25.6308V19.6595C27 18.8268 26.3113 18.1518 25.4618 18.1518C24.6122 18.1518 23.9235 18.8268 23.9235 19.6595V25.6308C23.9235 31.2732 19.2568 35.8474 13.5 35.8474C7.74324 35.8474 3.07646 31.2732 3.07646 25.6308V19.6595C3.07646 18.8268 2.38777 18.1518 1.53823 18.1518Z"
                fill="white"
              />
            </svg>
          </i>
          <div className="text-white text-base font-bold font-montserrat text-center hover:underline hover:cursor-pointer">
            Press here to start recording now
          </div>
        </div>
      )}
    </>
  );
};

export default Audio;
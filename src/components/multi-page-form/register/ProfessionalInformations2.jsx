import React, { useState } from "react";
import userIcon from "../../../assets/svg/user_icon.svg";
import { FaDotCircle, FaRegCircle } from "react-icons/fa";
import { FaCircle, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfessionalInformations2 = ({ setValue, cv }) => {
  // const [selectedOption, setSelectedOption] = useState("1");

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  //   setValue(event);
  // };

  const handleFileChange = (e) => {
    if (!e.target.files[0]) return;
    // setFormData({ ...formData, attachment: e.target.files[0] });
    // setSelectedFile(e.target.files[0].name);
  };
  return (
    <div className="flex flex-col gap-y-11 items-center justify-center">
      <div className="basis-2/12 w-[78px]">
        <img src={userIcon} alt="email icon" />
      </div>
      <div className="basis-5/12 font-poppins font-normal flex pb-0 px-20 p-8 ">
        <div className="items-end self-end text-center  w-[422px]">
          <h1 className="text-[20px] mb-4">Boost Your Profile with Your CV</h1>
          <p className="text-[14px]">
            Elevate your job search by adding or creating your CV to your
            profile
          </p>
        </div>
      </div>
      <div class="basis-7/12 m-4 my-0 p-2 flex flex-row space-x-[30px] items-center justify-center">
        <label className="w-[205px] cursor-pointer h-[159px] bg-[#6610F2] rounded-[20px] flex flex-col space-y-[7px] items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="33"
            viewBox="0 0 40 33"
            fill="none"
          >
            <path
              d="M26.7029 23.3969L20.118 16.812M20.118 16.812L13.5332 23.3969M20.118 16.812V31.6279"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M33.9288 27.3311C35.5344 26.4558 36.8028 25.0707 37.5338 23.3944C38.2648 21.7182 38.4167 19.8462 37.9657 18.074C37.5146 16.3018 36.4862 14.7302 35.0428 13.6074C33.5993 12.4846 31.8231 11.8744 29.9944 11.8732H27.9201C27.4219 9.94591 26.4931 8.15663 25.2038 6.6399C23.9145 5.12318 22.2981 3.91848 20.4761 3.11638C18.6542 2.31427 16.6741 1.93564 14.6848 2.00893C12.6955 2.08223 10.7486 2.60555 8.99065 3.53955C7.23268 4.47355 5.70931 5.79393 4.53509 7.40142C3.36086 9.00891 2.56633 10.8617 2.21123 12.8204C1.85612 14.7792 1.94969 16.793 2.48488 18.7104C3.02008 20.6278 3.98298 22.3989 5.3012 23.8906"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.7029 23.3969L20.118 16.812L13.5332 23.3969"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-white text-sm font-normal font-['Poppins']">
            Upload your CV
          </span>
          <input
            type="file"
            id="attachment"
            name="attachment"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        <Link
          to="#"
          className="w-[205px] h-[159px] bg-[#30E981] rounded-[20px] flex flex-col space-y-[7px] items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="46"
            viewBox="0 0 28 46"
            fill="none"
          >
            <path
              d="M14 26C12.1441 25.9981 10.3649 25.3408 9.05259 24.1724C7.74029 23.0039 7.00212 21.4196 7 19.7671V6.23288C7 4.57981 7.73749 2.99446 9.05024 1.82557C10.363 0.65668 12.1435 0 14 0C15.8565 0 17.637 0.65668 18.9497 1.82557C20.2625 2.99446 21 4.57981 21 6.23288V19.7671C20.9979 21.4196 20.2597 23.0039 18.9474 24.1724C17.6351 25.3408 15.8559 25.9981 14 26Z"
              fill="#030303"
            />
            <path
              d="M14 33C10.2883 32.9956 6.72974 31.4349 4.10514 28.6603C1.48054 25.8857 0.00419817 22.1238 0 18.2C0 17.8817 0.119588 17.5765 0.332467 17.3515C0.545346 17.1264 0.834079 17 1.13514 17C1.43619 17 1.7249 17.1264 1.93778 17.3515C2.15066 17.5765 2.27027 17.8817 2.27027 18.2C2.27027 21.4887 3.50606 24.6427 5.70581 26.9681C7.90557 29.2936 10.8891 30.6 14 30.6C17.1109 30.6 20.0944 29.2936 22.2942 26.9681C24.4939 24.6427 25.7297 21.4887 25.7297 18.2C25.7297 17.8817 25.8493 17.5765 26.0622 17.3515C26.2751 17.1264 26.5638 17 26.8649 17C27.1659 17 27.4546 17.1264 27.6675 17.3515C27.8804 17.5765 28 17.8817 28 18.2C27.9958 22.1238 26.5195 25.8857 23.8949 28.6603C21.2703 31.4349 17.7117 32.9956 14 33Z"
              fill="#030303"
            />
            <path
              d="M14 46C13.7348 46 13.4804 45.8784 13.2929 45.662C13.1054 45.4456 13 45.1522 13 44.8462V32.1538C13 31.8478 13.1054 31.5543 13.2929 31.338C13.4804 31.1216 13.7348 31 14 31C14.2652 31 14.5196 31.1216 14.7071 31.338C14.8946 31.5543 15 31.8478 15 32.1538V44.8462C15 45.1522 14.8946 45.4456 14.7071 45.662C14.5196 45.8784 14.2652 46 14 46Z"
              fill="#030303"
            />
            <path
              d="M10.5 4C10.7761 4 11 3.55228 11 3C11 2.44772 10.7761 2 10.5 2C10.2239 2 10 2.44772 10 3C10 3.55228 10.2239 4 10.5 4Z"
              fill="white"
            />
            <path
              d="M10.5 11C10.7761 11 11 10.5523 11 10C11 9.44772 10.7761 9 10.5 9C10.2239 9 10 9.44772 10 10C10 10.5523 10.2239 11 10.5 11Z"
              fill="white"
            />
            <path
              d="M16 8C16.5523 8 17 7.32843 17 6.5C17 5.67157 16.5523 5 16 5C15.4477 5 15 5.67157 15 6.5C15 7.32843 15.4477 8 16 8Z"
              fill="white"
            />
            <path
              d="M22.8791 46H5.12092C4.82363 46 4.53854 45.842 4.32833 45.5607C4.11811 45.2793 4 44.8978 4 44.5C4 44.1022 4.11811 43.7207 4.32833 43.4393C4.53854 43.158 4.82363 43 5.12092 43H22.8791C23.1764 43 23.4615 43.158 23.6717 43.4393C23.8819 43.7207 24 44.1022 24 44.5C24 44.8978 23.8819 45.2793 23.6717 45.5607C23.4615 45.842 23.1764 46 22.8791 46Z"
              fill="#030303"
            />
          </svg>
          <span className="text-black text-sm font-normal font-['Poppins']">
            Create your Cv <br /> using your voice
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProfessionalInformations2;

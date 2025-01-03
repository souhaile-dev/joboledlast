import React, { useState, CSSProperties, useEffect } from "react";
//import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import logoImg01 from "../assets/logo.svg";
import logoImg02 from "../assets/svg/logo-white.svg";
import blog01 from "../assets/png/blog-01.png";
import blog02 from "../assets/png/blog-02.png";
import blog03 from "../assets/png/blog-03.png";
import jobr01 from "../assets/png/jobr-01.png";
import jobr02 from "../assets/png/jobr-02.png";
import jobr03 from "../assets/png/jobr-03.png";
import jobr04 from "../assets/png/jobr-04.png";
import ttp01 from "../assets/png/ttp-01.png";
import ttp02 from "../assets/png/ttp-02.png";
import ttp03 from "../assets/png/ttp-03.png";
import ttp04 from "../assets/png/ttp-04.png";
import landingPageImg from "../assets/svg/landing_page.svg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const jobRecommendations = [
  {
    id: 1,
    job_title: "Conseiller Telephonique",
    company_name: "Majorel",
    city: "Casablanca",
    logo: jobr04,
  },
  {
    id: 2,
    job_title: "Graphic Designer",
    company_name: "Market Poke",
    city: "Casablanca",
    logo: jobr01,
  },
  {
    id: 3,
    job_title: "IT Consultant",
    company_name: "Tesla",
    city: "Tanger",
    logo: jobr03,
  },
  {
    id: 4,
    job_title: "Product Owner",
    company_name: "Adidas",
    city: "Rabat",
    logo: jobr02,
  },
];
const Talentedprofiles = [
  {
    id: 1,
    full_name: "Justin Michela",
    job_title: "C# Developer",
    city: "Casablanca",
    profile_picture: ttp01,
  },
  {
    id: 2,
    full_name: "Joanna Reutt",
    job_title: "Product Manager",
    city: "Marrakech",
    profile_picture: ttp04,
  },
  {
    id: 3,
    full_name: "Ryan Walker",
    job_title: "Developer",
    city: "Tanger",
    profile_picture: ttp02,
  },
  {
    id: 4,
    full_name: "Conor Kenney",
    job_title: "QA Engineer",
    city: "Rabat",
    profile_picture: ttp03,
  },
];
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-row space-x-5 items-center justify-center">
      <img src={logoImg01} alt="jobold" className="inline-block w-[192px] " />
      <AiOutlineLoading3Quarters className="animate-spin h-10 w-10 mr-3 text-[#6610F2]" />
    </div>
  );
};
const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay before the page loads
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col bg-[#EDF0F3] h-screen scrollbar scrollbar-thumb-[#6610F2] scrollbar-w-[10px] scrollbar-track-gray-100 overflow-y-scroll pt-[39px] space-y-[80px]">
          {/* The Nav Bar */}
          <div className="px-[76px] w-full flex flex-col space-y-[80px] ">
            <div className="h-[51px] w-full flex flex-row justify-between items-center ">
              <Link to="/" className="">
                <img
                  src={logoImg01}
                  alt="jobold"
                  className="inline-block w-[192px] "
                />
              </Link>
              <div className="flex flex-row justify-end">
                <Link
                  to="/"
                  className="font-poppins text-sm text-black w-[97px]  flex items-center justify-center"
                >
                  <span className="text-center">Home</span>
                </Link>
                <Link
                  to="#"
                  className="font-poppins text-sm text-black w-[97px]  flex items-center justify-center"
                >
                  <span className="text-center">Why Us</span>
                </Link>
                <Link
                  to="#"
                  className="font-poppins text-sm text-black w-[97px]  flex items-center justify-center"
                >
                  <span className="text-center">Blogs</span>
                </Link>
                <Link
                  to="/login"
                  className="font-poppins text-sm text-black w-[97px] flex items-center justify-center"
                >
                  <span className="text-center">Login</span>
                </Link>
                <Link
                  to="/register"
                  className="font-montserrat text-base font-bold text-white bg-[#6610F2] w-[128px] 
            h-[36px] rounded-[20px]  flex items-center justify-center ml-[21px]"
                >
                  <span className="text-center">Register</span>
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-col space-y-[24px]">
              <div className=" h-[436px] w-full flex flex-row space-x-[24px]">
                <div className="relative bg-white rounded-[20px] h-full basis-2/3 p-8 flex flex-col justify-between">
                  <div className="flex flex-col space-y-[25px]">
                    <span className="text-black text-[36px] font-normal font-spacegrotesk">
                      Create & Edit your Resume without the pain of typing
                    </span>
                    <span className="text-black text-[20px] font-normal font-poppins">
                      your resume in less than 10 minutes
                    </span>
                  </div>

                  <div className="w-[626px] absolute bottom-9">
                    <img src={landingPageImg} alt="" />
                  </div>
                  <button className="inline-flex items-center self-end w-[120px]">
                    <span className="text-sm font-poppins font-normal basis-9/12">
                      Create now
                    </span>
                    <i className="flex justify-center basis-3/12">
                      <svg
                        className="inline-block"
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM14.5071 8.70711C14.8976 8.31658 14.8976 7.68342 14.5071 7.29289L8.14315 0.928932C7.75262 0.538408 7.11946 0.538408 6.72893 0.928932C6.33841 1.31946 6.33841 1.95262 6.72893 2.34315L12.3858 8L6.72893 13.6569C6.33841 14.0474 6.33841 14.6805 6.72893 15.0711C7.11946 15.4616 7.75262 15.4616 8.14315 15.0711L14.5071 8.70711ZM1 9H13.8V7H1V9Z"
                          fill="black"
                        />
                      </svg>
                    </i>
                  </button>
                </div>
                <div className="flex flex-col justify-between bg-white rounded-[20px] h-full basis-1/3 p-8">
                  <div className="flex flex-col space-y-[25px]">
                    <span className="text-black text-[36px] font-normal font-spacegrotesk">
                      Convert your basic Resume to a dynamic & new template
                    </span>
                    <span className="text-black text-[20px] font-normal font-poppins">
                      Make your Resume more Raliable and visible
                    </span>
                  </div>

                  <button className="inline-flex items-center self-end w-[120px]">
                    <span className="text-sm font-poppins font-normal basis-9/12">
                      Create now
                    </span>
                    <i className="flex justify-center basis-3/12">
                      <svg
                        className="inline-block"
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM14.5071 8.70711C14.8976 8.31658 14.8976 7.68342 14.5071 7.29289L8.14315 0.928932C7.75262 0.538408 7.11946 0.538408 6.72893 0.928932C6.33841 1.31946 6.33841 1.95262 6.72893 2.34315L12.3858 8L6.72893 13.6569C6.33841 14.0474 6.33841 14.6805 6.72893 15.0711C7.11946 15.4616 7.75262 15.4616 8.14315 15.0711L14.5071 8.70711ZM1 9H13.8V7H1V9Z"
                          fill="black"
                        />
                      </svg>
                    </i>
                  </button>
                </div>
              </div>
              <div className="h-[183px] w-full flex flex-row space-x-[24px]">
                <div className="flex flex-col justify-between bg-white rounded-[20px] h-full basis-1/2 p-8">
                  <span className="text-black text-[36px] font-normal font-spacegrotesk">
                    Find your dream Job & accelerate your carrer
                  </span>

                  <button className="inline-flex items-center self-end w-[120px]">
                    <span className="text-sm font-poppins font-normal basis-9/12">
                      Find now
                    </span>
                    <i className="flex justify-center basis-3/12">
                      <svg
                        className="inline-block"
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM14.5071 8.70711C14.8976 8.31658 14.8976 7.68342 14.5071 7.29289L8.14315 0.928932C7.75262 0.538408 7.11946 0.538408 6.72893 0.928932C6.33841 1.31946 6.33841 1.95262 6.72893 2.34315L12.3858 8L6.72893 13.6569C6.33841 14.0474 6.33841 14.6805 6.72893 15.0711C7.11946 15.4616 7.75262 15.4616 8.14315 15.0711L14.5071 8.70711ZM1 9H13.8V7H1V9Z"
                          fill="black"
                        />
                      </svg>
                    </i>
                  </button>
                </div>
                <div className="flex flex-col justify-between bg-white rounded-[20px] h-full basis-1/2 p-8">
                  <span className="text-black text-[36px] font-normal font-spacegrotesk">
                    Hire top Talented profile & scale up your business
                  </span>

                  <button className="inline-flex items-center self-end w-[120px]">
                    <span className="text-sm font-poppins font-normal basis-9/12">
                      Hire now
                    </span>
                    <i className="flex justify-center basis-3/12">
                      <svg
                        className="inline-block"
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM14.5071 8.70711C14.8976 8.31658 14.8976 7.68342 14.5071 7.29289L8.14315 0.928932C7.75262 0.538408 7.11946 0.538408 6.72893 0.928932C6.33841 1.31946 6.33841 1.95262 6.72893 2.34315L12.3858 8L6.72893 13.6569C6.33841 14.0474 6.33841 14.6805 6.72893 15.0711C7.11946 15.4616 7.75262 15.4616 8.14315 15.0711L14.5071 8.70711ZM1 9H13.8V7H1V9Z"
                          fill="black"
                        />
                      </svg>
                    </i>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col space-y-[44px] min-h-[385px] p-8 bg-white rounded-[20px]">
              <div className=" flex flex-row justify-between">
                <h1 className="text-4xl font-normal font-spacegrotesk">
                  Job recommendation
                </h1>
                <button className="inline-flex items-center w-[120px]">
                  <span className="text-sm font-poppins font-normal basis-9/12">
                    See More
                  </span>
                  <i className="flex justify-center basis-3/12">
                    <svg
                      className="inline-block"
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM14.5071 8.70711C14.8976 8.31658 14.8976 7.68342 14.5071 7.29289L8.14315 0.928932C7.75262 0.538408 7.11946 0.538408 6.72893 0.928932C6.33841 1.31946 6.33841 1.95262 6.72893 2.34315L12.3858 8L6.72893 13.6569C6.33841 14.0474 6.33841 14.6805 6.72893 15.0711C7.11946 15.4616 7.75262 15.4616 8.14315 15.0711L14.5071 8.70711ZM1 9H13.8V7H1V9Z"
                        fill="black"
                      />
                    </svg>
                  </i>
                </button>
              </div>
              <div className="flex flex-row  justify-between">
                {jobRecommendations.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col space-y-[29px] items-center basis-1/4"
                  >
                    <img
                      className="w-[110px] h-[110px]"
                      src={item.logo}
                      alt="logo"
                    />
                    <div className="flex flex-col space-y-[4px] font-poppins text-center">
                      <h1 className="text-black text-[20px] font-normal">
                        {item.job_title}
                      </h1>
                      <div className="flex flex-row justify-center space-x-[10px]">
                        <h2 className="text-black text-[14px] font-normal">
                          {item.company_name}
                        </h2>
                        <h2 className="text-black text-[14px] font-normal">
                          {" "}
                          |{" "}
                        </h2>

                        <h2 className="text-black text-[14px] font-normal">
                          {item.city}
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col space-y-[44px] min-h-[385px] p-8 bg-white rounded-[20px]">
              <div className=" flex flex-row justify-between">
                <h1 className="text-4xl font-normal font-spacegrotesk">
                  Top Talented profiles
                </h1>
                <button className="inline-flex items-center w-[120px]">
                  <span className="text-sm font-poppins font-normal basis-9/12">
                    See More
                  </span>
                  <i className="flex justify-center basis-3/12">
                    <svg
                      className="inline-block"
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM14.5071 8.70711C14.8976 8.31658 14.8976 7.68342 14.5071 7.29289L8.14315 0.928932C7.75262 0.538408 7.11946 0.538408 6.72893 0.928932C6.33841 1.31946 6.33841 1.95262 6.72893 2.34315L12.3858 8L6.72893 13.6569C6.33841 14.0474 6.33841 14.6805 6.72893 15.0711C7.11946 15.4616 7.75262 15.4616 8.14315 15.0711L14.5071 8.70711ZM1 9H13.8V7H1V9Z"
                        fill="black"
                      />
                    </svg>
                  </i>
                </button>
              </div>

              <div className="flex flex-row  justify-between">
                {Talentedprofiles.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col space-y-[29px] items-center  basis-1/4"
                  >
                    <img
                      className="w-[154px] h-[154px] rounded-full"
                      src={item.profile_picture}
                      alt="logo"
                    />
                    <div className="flex flex-col space-y-[4px] font-poppins text-center">
                      <h1 className="text-black text-[20px] font-normal">
                        {item.full_name}
                      </h1>
                      <div className="flex flex-row justify-center space-x-[10px]">
                        <h2 className="text-black text-[14px] font-normal">
                          {item.job_title}
                        </h2>
                        <h2 className="text-black text-[14px] font-normal">
                          {" "}
                          |{" "}
                        </h2>

                        <h2 className="text-black text-[14px] font-normal">
                          {item.city}
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col space-y-[44px]  p-8 bg-white rounded-[20px]">
              <div className=" flex flex-row justify-between">
                <h1 className="text-4xl font-normal font-spacegrotesk">
                  Blogs
                </h1>
                <div className="text-black text-[16px] font-medium font-poppins">
                  Follow recruiting market News, Obstacles, and see why Jobold
                  should be your GO-TO platform
                </div>
                <button className="inline-flex items-center w-[120px]">
                  <span className="text-sm font-poppins font-normal basis-9/12">
                    See More
                  </span>
                  <i className="flex justify-center basis-3/12">
                    <svg
                      className="inline-block"
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM14.5071 8.70711C14.8976 8.31658 14.8976 7.68342 14.5071 7.29289L8.14315 0.928932C7.75262 0.538408 7.11946 0.538408 6.72893 0.928932C6.33841 1.31946 6.33841 1.95262 6.72893 2.34315L12.3858 8L6.72893 13.6569C6.33841 14.0474 6.33841 14.6805 6.72893 15.0711C7.11946 15.4616 7.75262 15.4616 8.14315 15.0711L14.5071 8.70711ZM1 9H13.8V7H1V9Z"
                        fill="black"
                      />
                    </svg>
                  </i>
                </button>
              </div>
              <div className="flex flex-row space-x-[18px] w-full">
                <div className="flex flex-col space-y-[25px] bg-[#EDF0F3] rounded-[16px] h-[580px] basis-1/2 p-[18px]">
                  <img className="rounded-[10px] w-full" src={blog01} alt="" />
                  <div className="flex flex-row justify-between px-[9px]">
                    <span className="text-white text-[14px] font-normal font-poppins w-24 h-[29px] px-2 py-1 bg-[#FE764B] rounded-[200px]">
                      Study Case
                    </span>
                    <span className="text-black text-[14px] font-normal italic">
                      June 2021
                    </span>
                  </div>
                  <div className="text-black text-[20px] font-normal font-poppins px-[9px]">
                    Improving employer brand and reducing agency spend for JT
                  </div>
                  <div className="text-[#2D2E2E] font-inter text-[16px] font-normal px-[9px]">
                    Let’s embody your beautiful ideas together, simplify the way
                    you visualize your next big things. Let’s embody your
                    beautiful ideas together, simplify the way you visualize
                    your next big things.
                  </div>
                </div>
                <div className="flex flex-col space-y-[18px]  h-[580px] basis-1/2">
                  <div className=" flex flex-row space-x-[32px] bg-[#EDF0F3] rounded-[16px]  p-[23px] basis-1/2">
                    <img
                      className="rounded-[10px] basis-1/2"
                      src={blog02}
                      alt=""
                    />
                    <div className="flex flex-col justify-between">
                      <div className="text-black text-[20px] font-normal font-poppins">
                        Reducing recruitment spend by 83% with Jersey
                        Electricity
                      </div>

                      <div className="flex flex-row justify-between">
                        <span className="text-white text-[12px] font-normal font-poppins w-[49px] h-[23px] px-2 py-1 bg-[#418DFD] rounded-[200px]">
                          News
                        </span>
                        <span className="text-black text-[14px] font-normal italic">
                          June 2021
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-[32px] bg-[#EDF0F3] rounded-[16px]  p-[23px] basis-1/2">
                    <img
                      className="rounded-[10px] basis-1/2"
                      src={blog03}
                      alt=""
                    />
                    <div className="flex flex-col justify-between">
                      <div className="text-black text-[20px] font-normal font-poppins">
                        Recruiting During the Pandemic: Food4Heroes 230,000
                        Meals, 43 Hospitals, 12 Weeks
                      </div>

                      <div className="flex flex-row justify-between">
                        <span className="text-white text-[12px] font-normal font-poppins w-[61px] h-[23px] px-2 py-1 bg-[#30E981] rounded-[200px]">
                          Insights
                        </span>
                        <span className="text-black text-[14px] font-normal italic">
                          June 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full relative">
            <div className=" bg-[#418DFD] w-full z-10 shadow rounded-[20px] h-[126px] py-[37px] flex flex-row space-x-[30px] items-center justify-center">
              <div className="text-white text-[36px] font-normal font-spacegrotesk">
                Get Your free trial Now
              </div>
              <button className="text-black text-[20px] font-normal font-poppins w-[168px] h-12 bg-green-400 rounded-[33px]">
                Try Now
              </button>
            </div>
            <div className="h-[654px] bg-[#6610F2] w-full absolute top-[91px] pl-[76px] pt-[131px] pr-[53px] pb-[46px]">
              <div className="flex flex-row h-full">
                <div className="flex flex-col h-full basis-2/5 justify-between">
                  <div className="flex flex-col space-y-[36px]">
                    <img
                      src={logoImg02}
                      alt="jobold"
                      className="inline-block w-[282px]"
                    />
                    <div className="text-white text-[16px] font-medium font-poppins pr-[50px]">
                      AI-powered matching algorithm: uses natural language
                      processing and machine learning to match candidates to
                      jobs based on their qualifications and job requirements.
                    </div>
                  </div>
                  <div className="flex flex-col text-white text-[20px] font-normal font-poppins">
                    <span>Contact@jobold.co </span>
                    <span>(+212) 621 325 654 </span>
                  </div>
                </div>
                <div className="flex flex-col basis-3/5 h-full justify-between">
                  <div className="flex flex-row space-x-[116px]">
                    <div className="flex flex-col">
                      <span className="border-b h-[44px] w-[147px] border-white text-white text-[20px] font-normal font-poppins mb-[21px]">
                        Company
                      </span>

                      <Link
                        to="/"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Home
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Road map
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Partner with Us
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Career
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Blog
                      </Link>
                    </div>
                    <div className="flex flex-col">
                      <span className="border-b h-[44px] w-[147px] border-white text-white text-[20px] font-normal font-poppins mb-[21px]">
                        Support
                      </span>

                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Policy
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Terms
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Cookies
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Contact
                      </Link>
                    </div>
                    <div className="flex flex-col">
                      <span className="border-b h-[44px] w-[147px] border-white text-white text-[20px] font-normal font-poppins mb-[21px]">
                        Connect
                      </span>

                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        LinkedIn
                      </Link>
                      <Link
                        to="#"
                        className="font-poppins text-white text-[16px] font-medium mb-[17px]"
                      >
                        Twitter
                      </Link>
                    </div>
                  </div>
                  <div className="text-white text-[12px] font-normal font-poppins text-right">
                    Alrights reserved by Jobold.co
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
